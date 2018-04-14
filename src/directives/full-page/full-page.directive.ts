import { Directive, Input, ElementRef, OnInit, AfterViewInit, HostListener, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import 'jquery';
import 'jquery.scrollto';
import * as _ from 'lodash';

import { SectionDirective } from './section.directive';
import { Debounce } from '../../model/debounce/debounce.decorator';

declare var $: any;

/**
 * Allows for section-by-section scrolling.  This directive is so named because it was
 * originally a wrapper around fullpage.js, but that plugin was so buggy and so ill-equipped
 * for my purposes that I ended up having to write this directive.
 */
@Directive({
  selector: 'full-page'
})
export class FullPageDirective implements OnInit, AfterViewInit, OnDestroy {
  private static readonly defaultTopBuffer = 10;
  private static readonly defaultBottomBuffer = 10;
  private static readonly defaultScrollDuration = 500;

  @Input('fpOptions') options: {
    /**
     * topBuffer (number) - the total number of pixels the user should scroll down before
     * moving them to the next section.  Any amount scrolled smaller than this value will
     * automatically scroll the User back up to the beginning of the current section.
     * Default: 10
     */
    topBuffer:        number,
    /**
     * bottomBuffer (number) - the total number of pixels a user should scroll up before
     * moving them to the previous section.  Any amount scrolled smaller than this value will
     * automatically scroll the User back down to the beginning of the current section.
     * Default: 10
     */
    bottomBuffer:     number,
    /**
     * scrollToDefault (boolean) - if no SectionComponent is marked as active when the
     * directive is loaded, should the default SectionComponent be scrolled into view?
     * Default: true
     */
    scrollToDefault:  boolean,
    /**
     * scrollDuration (number) - the duration, in milliseconds, of automatic scrolls.
     * Default: 500
     */
    scrollDuration:   number
  };

  @ContentChildren(SectionDirective) sections: QueryList<SectionDirective>;

  private activeSection: number = 0;  // Index of the active SectionComponent.
  private originalMethods: {scrollIntoView: (...args: any[]) => any};  // Original methods overwritten by this directive.
  private ignoreScrollEvent: boolean = false;  // Used to ignore automatic scrolling events (initiated by something other than the user).

  constructor(private $element: ElementRef) { }

  /**
   * Initialize the options and overwrite any native functions as necessary.
   */
  ngOnInit(): void {
    this.options = this.options || {topBuffer: FullPageDirective.defaultTopBuffer, bottomBuffer: FullPageDirective.defaultBottomBuffer, scrollToDefault: true, scrollDuration: FullPageDirective.defaultScrollDuration};

    this.options.topBuffer = _.isNumber(this.options.topBuffer) ? this.options.topBuffer : FullPageDirective.defaultTopBuffer;
    this.options.bottomBuffer = _.isNumber(this.options.bottomBuffer) ? this.options.bottomBuffer : FullPageDirective.defaultBottomBuffer;

    if(this.options.topBuffer < 0) {
      console.warn('topBuffer must be a positive number.');

      this.options.topBuffer = FullPageDirective.defaultTopBuffer;
    }

    if(this.options.bottomBuffer < 0) {
      console.warn('bottomBuffer must be a positive number.');

      this.options.bottomBuffer = FullPageDirective.defaultBottomBuffer;
    }

    let self = this;

    // This is a little bit of a hack (bad Calvin!), but it should work for now.
    this.originalMethods = {} as {scrollIntoView: (...args: any[]) => any};

    this.originalMethods.scrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function fullPageScrollIntoView(options: ScrollIntoViewOptions) {
      self.ignoreScrollEvent = true;

      let target: number | Element;

      if(options.block === 'end' || options.inline === 'end') {
        let $element = $(this);

        target = $element.offset().top + $element.outerHeight(true) - $(window).height();
      } else {
        target = this;
      }

      $(window).scrollTo(target, 500);

      setTimeout(() => {
        self.ignoreScrollEvent = false;
      }, self.options.scrollDuration);
    };
  }

  /**
   * Look for the currently active section and scroll it into view.
   */
  ngAfterViewInit(): void {
    if(!this.sections) {
      return;
    }

    let sections = this.sections.toArray();
    let useDefault = true;

    _.forEach(sections, (section: SectionDirective, index: number): boolean => {
      if(section.isActive()) {
        this.activeSection = index;
        useDefault = false;

        return false;
      }

      return true;
    });

    if(!useDefault || this.options.scrollToDefault) {
      sections[this.activeSection].scrollIntoView();
    }
  }

  /**
   * Revert scrollIntoView back to its original form.
   */
  ngOnDestroy(): void {
    Element.prototype.scrollIntoView = this.originalMethods.scrollIntoView;
  }

  /**
   * Event handler for the scroll event.  This method takes care of all the magic of this
   * directive.  It automagically scrolls to the next section or back to the current section
   * when necessary.
   */
  @HostListener('window:scroll', [])
  @Debounce(300, 750)
  onScroll($event): void {
    if(!this.sections || !this.sections.length || this.ignoreScrollEvent) {
      return;
    }

    let sections = this.sections.toArray();
    let activeSection = sections[this.activeSection];

    let windowPosition = $(window).scrollTop();
    let activeSectionTop = activeSection.getTopPosition();

    let scrollAmount = (activeSectionTop - windowPosition);

    if(scrollAmount >= this.options.bottomBuffer) {
      if(this.activeSection === 0) {
        return;
      }

      this.activeSection -= 1;
      sections[this.activeSection].scrollIntoView();

      return;
    }

    scrollAmount = -scrollAmount;
    if(scrollAmount >= this.options.topBuffer && !activeSection.canOverflow()) {
      if((this.activeSection + 1) === this.sections.length) {
        return;
      }

      this.activeSection += 1;
      sections[this.activeSection].scrollIntoView();

      return;
    }

    if(activeSection.canOverflow()) {
      // Determine if we have reached the bottom of the section yet.
      let bottomPosition = activeSection.getTopPosition() + activeSection.getHeight();
      let maximumScrollPosition = bottomPosition - $(window).height();

      if(windowPosition <= maximumScrollPosition) {
        // We are still somewhere in the middle of the currently active section.
        return;
      }

      // We have scroll past the active section.  Determine by how far and take action!
      if((windowPosition - maximumScrollPosition) > this.options.bottomBuffer) {
        if((this.activeSection + 1) === this.sections.length) {
          return;
        }

        this.activeSection += 1;
        sections[this.activeSection].scrollIntoView();

        return;
      } else {
        activeSection.scrollToBottom();

        return;
      }
    }
  }
}
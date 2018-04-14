import { Directive, Input, ElementRef, HostBinding, OnInit } from '@angular/core';
import 'jquery';

declare var $ : any;

/**
 * SectionDirective represents a section within the FullPageDirective.
 */
@Directive({
  selector:  '[fp-section]'
})
export class SectionDirective implements OnInit {
  /**
   * overflow (boolean) - can this section overflow?  True means the section can be longer
   * than the view height.  If a section cannot overflow, its height will automatically be
   * set to the full view height.
   */
  @Input() overflow: boolean;

  /**
   * defaultActive (boolean) - is this the section that should be active by default when
   * the page loads?
   */
  @Input() defaultActive: boolean;

  @HostBinding('style.height') sectionHeight: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    // If this section does not overflow, set its height.
    if(this.overflow) {
      return;
    }

    this.sectionHeight = '100vh';
  }

  /**
   * Returns whether this section is the default active section when the page is initialized.
   *
   * @returns (boolean) true iff this section should be active by default
   */
  isActive(): boolean {
    return this.defaultActive;
  }

  /**
   * Returns whether this component can overflow.  An overflown component can have a length
   * greater than the view height.
   *
   * @returns (boolean) true iff this section can overflow
   */
  canOverflow(): boolean {
    return this.overflow;
  }

  /**
   * Scrolls this Section into view, placing the top of the section at the top of the
   * window.
   */
  scrollIntoView(): void {
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }

  /**
   * Scrolls this Section into view, placing the bottom of the section at the bottom of the
   * window.
   */
  scrollToBottom(): void {
    this.element.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'end'});
  }

  /**
   * Returns the vertical position of the top of this section.  This value is the distance
   * a user has to scroll for the top of this section to be at the top of the window.
   *
   * @returns (number) the position of the top of this section
   */
  getTopPosition(): number {
    return $(this.element.nativeElement).offset().top;
  }

  /**
   * Returns the height of this section.
   *
   * @returns (number) the height of this section
   */
  getHeight(): number {
    return $(this.element.nativeElement).outerHeight();
  }
}
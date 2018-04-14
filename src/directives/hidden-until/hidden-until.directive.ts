import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import 'jquery';

import { Debounce } from '../../model/debounce/debounce.decorator';

declare var $: any;

@Directive({
  selector: '[hiddenUntil]'
})
export class HiddenUntilDirective implements OnInit {
  /**
   * hiddenUntil (string) - the distance at which this element should become visible.  The
   * string can be one of
   *   - a number that represents the distance in pixels
   *   - a number ending in px that represents the distance in pixels
   *   - a number ending in % or vh that represents the distance as a percentage of the view
   *     height
   * A string ending with any other units will be stripped of the units and treated as a
   * number.
   */
  @Input('hiddenUntil')
  set offset(offset: string) {
    this._offset = offset;

    this.computeOffset();
  }

  /**
   * @see HiddenUntilDirective#offset
   */
  get offset(): string {
    return this._offset;
  }

  private $element: ElementRef;  // The element this directive wraps.
  private computedOffset: number;  // The computed value of the offset in pixels.
  private _offset: string;  // The raw offset as provided by the parent component.

  constructor(element: ElementRef) {
    this.$element = element;
  }

  ngOnInit(): void {
    this.computeOffset();
    this.run();
  }

  /**
   * Event handler for the window resizing.
   */
  @HostListener('window:resize', [])
  @Debounce(400, 1000)
  onWindowResize(): void {
    this.computeOffset();
  }

  /**
   * Event handler for the window scroll event.  Determines if the element should be
   * displayed.
   */
  @HostListener('window:scroll', [])
  @Debounce(100, 500)
  run(): void {
    if($(window).scrollTop() >= this.computedOffset) {
      this.$element.nativeElement.setAttribute('style', '');
    } else {
      this.$element.nativeElement.setAttribute('style', 'display: none;');
    }
  }

  /**
   * Computes the value of the offset in pixels.
   */
  private computeOffset(): void {
    if(this.offset.endsWith('%')) {
      this.computedOffset = $(this.$element.nativeElement).parent().innerHeight() * (parseInt(this.offset, 10) / 100);
    }

    if(this.offset.endsWith('vh')) {
      this.computedOffset = $(window).height() * (parseInt(this.offset, 10) / 100);
    }

    this.computedOffset = parseInt(this.offset, 10);
  }
}
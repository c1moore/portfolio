import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

enum TypingState {
  TYPING,
  DELETING
}

@Component({
  selector:     'text-typer',
  templateUrl:  './text-typer.component.pug',
  styleUrls:    ['./text-typer.component.less']
})
export class TextTyperComponent implements OnInit {
  @Input() values: string[];
  @Input() typeDelay: number;
  @Input() typeVariance: number;
  @Input() deleteDelay: number;
  @Input() deleteVariance: number;
  @Input() period: number;
  @Input() transitionDelay: number;
  @Input() loop: boolean;

  private valueIndex: number;
  private cursorPosition: number;
  private state: TypingState;
  private breakLoop: boolean;

  text: string;

  ngOnInit(): void {
    this.text = this.values[0];
    this.cursorPosition = this.values[0].length;
    this.valueIndex = 0;
    this.state = TypingState.DELETING;
    this.breakLoop = false;

    this.typeDelay = this.typeDelay || 200;
    this.typeVariance = this.typeVariance || 100;
    this.deleteDelay = this.deleteDelay || 100;
    this.deleteVariance = this.deleteVariance || 50;
    this.period = this.period || 2500;
    this.transitionDelay = this.transitionDelay || 500;
    this.loop = _.isBoolean(this.loop) ? this.loop : true;

    setTimeout(() => this.type(), this.period);
  }

  /**
   *
   */
  private type(): void {
    if(this.breakLoop) {
      return;
    }

    switch (this.state) {
      case TypingState.TYPING:
        this.typeChar();
        break;

      case TypingState.DELETING:
        this.deleteChar();
        break;
    }

    if(this.state === TypingState.TYPING && this.cursorPosition === this.values[this.valueIndex].length) {
      // Delete the currently typed string.
      this.state = TypingState.DELETING;
    } else if(this.state === TypingState.DELETING && this.cursorPosition === 0) {
      // Move on to the next value.
      let nextValue = (this.valueIndex + 1) % this.values.length;

      if(nextValue === 0 && !this.loop) {
        this.breakLoop = true;

        return;
      }

      this.valueIndex = nextValue;
      this.state = TypingState.TYPING;
    }
  }

  /**
   *
   */
  private deleteChar(): void {
    this.cursorPosition -= 1;
    this.text = this.text.substr(0, this.cursorPosition);

    let delay;

    if(this.cursorPosition === 0) {
      delay = this.transitionDelay;
    } else {
      delay = this.deleteDelay - (Math.random() * this.deleteVariance);
    }

    setTimeout(() => this.type(), delay);
  }

  /**
   *
   */
  private typeChar(): void {
    this.text += this.values[this.valueIndex].charAt(this.cursorPosition);
    this.cursorPosition += 1;

    let delay;

    if(this.cursorPosition === this.values[this.valueIndex].length) {
      delay = this.period;
    } else {
      delay = this.typeDelay - (Math.random() * this.typeVariance);
    }

    setTimeout(() => this.type(), delay);
  }
}
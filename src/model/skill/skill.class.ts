import { InvalidArgumentError } from '../error';

export class Skill {
  name: string;        // The name of the programming language.
  icon: string;        // The source of an icon that can be used to represent the language.  This can be, for example, a URL or a base64 string.

  private _confidence: number;  // Number between 0 and 1 that indicates your confidence with this language.

  constructor(name: string, icon?: string, confidence?: number) {
    this.name = name;
    this.icon = icon;
    this._confidence = confidence;
  }

  /**
   * confidence (number) - your confidence level for this programming language
   */
  get confidence(): number {
    return this._confidence;
  }

  /**
   * @see Skill#confidence
   *
   * @throws (InvalidArgumentError) If confidence is not in the range [0,1]
   */
  set confidence(confidence: number) {
    if(confidence < 0 || confidence > 1) {
      throw new InvalidArgumentError('Confidence level must be between 0 and 1, inclusive.');
    }

    this.confidence = confidence;
  }
}
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { RecaptchaComponent } from 'ng-recaptcha';

import 'rxjs/add/operator/finally';

@Component({
  selector:     'contact',
  templateUrl:  './contact.component.pug',
  styleUrls:    ['./contact.component.less']
})
export class ContactComponent {
  private readonly emailPattern = /.*@.*\..*/;
  private readonly namePattern = /.+ .+/;

  @ViewChild('captcha') captcha: RecaptchaComponent;

  // User information.
  user: {name: string, email: string, phone?: string} = {
    name:   '',
    email:  ''
  };

  // Message data.
  message: {subject: string, content: string} = {
    subject:  '',
    content:  ''
  };

  // Errors with the form.
  errors: {[fieldName: string]: {invalid?: boolean, message?: string}} = {
    name:     {
      invalid:  false,
      message:  ''
    },
    email:    {
      invalid:  false,
      message:  ''
    },
    subject:  {
      invalid:  false,
      message:  ''
    },
    message:  {
      invalid:  false,
      message:  ''
    },
    captcha:  {
      invalid:  false,
      message:  ''
    }
  };

  captchaResponse: string;

  constructor(private http: HttpClient, private toastr: NotificationsService) { }

  /**
   * Callback for the Captcha response.
   *
   * @param response (string) - the captcha response
   */
  onCaptchaResponse(response: string): void {
    this.captchaResponse = response;

    this.onSubmit();
  }

  /**
   * Submits the contact form and sends the author (me) an email.
   */
  onSubmit(): void {
    let foundErrors: boolean = false;

    this.user.name.trim();
    this.user.email.trim();
    this.message.subject.trim();
    this.message.content.trim();

    if(!this.user.name || !this.namePattern.test(this.user.name)) {
      foundErrors = true;

      this.errors.name.invalid = true;
      this.errors.name.message = 'Your first and last names are required.';
    } else {
      this.errors.name.invalid = false;
    }

    if(!this.user.email) {
      foundErrors = true;

      this.errors.email.invalid = true;
      this.errors.email.message = 'Your email address is required.';
    } else if(!this.emailPattern.test(this.user.email)) {
      foundErrors = true;

      this.errors.email.invalid = true;
      this.errors.email.message = "I don't recognize this as an email.";
    } else {
      this.errors.email.invalid = false;
    }

    if(!this.message.subject) {
      foundErrors = true;

      this.errors.subject.invalid = true;
      this.errors.subject.message = 'A subject is required.';
    } else {
      this.errors.subject.invalid = false;
    }

    if(!this.message.content) {
      foundErrors = true;

      this.errors.message.invalid = true;
      this.errors.message.message = 'A message is required.';
    } else {
      this.errors.message.invalid = false;
    }

    if(!this.captchaResponse) {
      foundErrors = true;

      this.errors.captcha.invalid = true;
      this.errors.captcha.message = 'Please answer the CAPTCHA.';
    } else {
      this.errors.captcha.invalid =false;
    }

    if(foundErrors) {
      return;
    }

    this.http.post('/api/contact', {
      user:     this.user,
      message:  this.message,
      captcha:  this.captchaResponse
    }).finally(() => {
      this.captcha.reset();
    }).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.toastr.error('There was an error sending your message.', error.message);
      },
      () => {
        this.toastr.success('Message sent.');
      }
    );
  }
}
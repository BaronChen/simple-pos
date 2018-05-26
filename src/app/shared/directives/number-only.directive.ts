/*
* Combine answers from
* https://stackoverflow.com/questions/41465542/angular2-input-field-to-accept-only-numbers/41479077
*/
import { Directive, ElementRef, HostListener, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {



  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])
  keyDownEvent(event: KeyboardEvent) {
    // Add other conditions if need to allow ctr+c || ctr+v
    if (event.key.length === 1 && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    const pastedText = (event.originalEvent || event).clipboardData.getData('text/plain');

    if (pastedText) {
      const regEx = new RegExp('^[0-9]*$');
      if (!regEx.test(pastedText)) {
        event.preventDefault();
      }
    }
  }
}

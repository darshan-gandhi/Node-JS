import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appErrorwala]'
})
export class ErrorwalaDirective {

  constructor(elr:ElementRef) { 

    elr.nativeElement.style.background='red';
  }

}

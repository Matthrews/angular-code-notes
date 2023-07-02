import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  constructor() {
    console.log('Directive created...');
  }

  @HostBinding('class.highlight-card')
  get xYZ() {
    return true
  }
}

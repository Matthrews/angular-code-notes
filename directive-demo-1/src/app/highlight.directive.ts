import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  @Input('highlight')
  isHighlight = false;

  constructor() {
    console.log('Directive created...');
  }

  @HostBinding('class.highlight-card')
  get xYZ() {
    return this.isHighlight
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return "true"
  }
}

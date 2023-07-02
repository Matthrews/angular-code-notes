import { Directive, HostBinding, HostListener, Input } from "@angular/core";

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

  @HostListener("mouseover")
  mouseOver() {
    this.isHighlight = false;
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlight = true;
  }
}

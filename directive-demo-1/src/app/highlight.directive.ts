import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: '[highlight]',
  exportAs: 'hl'
})

export class HighlightDirective {
  @Input('highlight')
  isHighlight = false;

  @Output()
  toggleHighlight = new EventEmitter()

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

  @HostListener("mouseover", ['$event'])
  mouseOver($event: any) {
    console.log('mouseOver', $event);
    this.isHighlight = false;
    this.toggleHighlight.emit(this.isHighlight)
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlight = true;
    this.toggleHighlight.emit(this.isHighlight)
  }

  toggle() {
    this.isHighlight = !this.isHighlight;
    console.log('toggle runs...');
    this.toggleHighlight.emit(this.isHighlight)
  }
}

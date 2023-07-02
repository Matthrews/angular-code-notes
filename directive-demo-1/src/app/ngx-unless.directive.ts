import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngxUnless]',
})
export class NgxUnlessDirective {
  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  set ngxUnless(ngxUnlessValue: unknown) {
    if (!ngxUnlessValue) this.viewContainerRef.createEmbeddedView(this.templateRef)
    else this.viewContainerRef.clear()
  }
}

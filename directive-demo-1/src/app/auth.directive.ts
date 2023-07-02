import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { AuthService } from "./auth.service";

@Directive({
  selector: "[auth]"
})
export class AuthDirective {
  public status: string = "Exit"

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  @Input()
  set auth(authParams: unknown[]) {
    if (Array.isArray(authParams) && authParams.length) {
      this.status = 'Pending'
      this.authService.fetchAuthProfile().subscribe((ret) => {
        this.status = 'Resolved'
        if (ret) {
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear()
        }
        console.log('fetchAuthProfile', ret);
      }, (err) => {
        this.status = 'Rejected'
        this.viewContainerRef.clear()
        console.error('err', err);
      })
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}

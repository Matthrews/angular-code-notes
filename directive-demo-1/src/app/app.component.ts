import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'directive-demo-1';
  authProfile = [ { r: 'admin_config', a: ['view'] } ]
  highlighted = true;
  ngxUnlessCond = false;

  @ViewChild(HighlightDirective)
  highlighter: HighlightDirective | undefined;

  ngAfterViewInit(): void {
    // AfterViewInit function
    console.log('AfterViewInit', typeof this.highlighter?.toggle);
  }

  public onToggleHighlight(isHighlight: boolean) {
    console.log('onToggleHighlight', isHighlight);
  }
}

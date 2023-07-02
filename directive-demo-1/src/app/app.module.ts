import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AuthDirective } from './auth.directive';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { NgxUnlessDirective } from './ngx-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthDirective,
    HighlightDirective,
    NgxUnlessDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

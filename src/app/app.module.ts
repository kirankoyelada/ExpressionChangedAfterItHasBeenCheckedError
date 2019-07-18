import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    RxjsExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

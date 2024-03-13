import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./post/index/index.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      AppComponent,
      IndexComponent
    ],
    imports: [
      BrowserModule,
      CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent, TodoAppComponent, TodoComponent, TodoInputComponent, FooterComponent, TodoList } from './app';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TodoComponent,
    TodoInputComponent,
    TodoAppComponent!,
    FooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


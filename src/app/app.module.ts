import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

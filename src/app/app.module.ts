import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { ListviewComponent } from './listview/listview.component';
import { SignviewComponent } from './signview/signview.component';
import { SigninformComponent } from './signinform/signinform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { ChirpformComponent } from './chirpform/chirpform.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeviewComponent,
    ListviewComponent,
    SignviewComponent,
    SigninformComponent,
    SignupformComponent,
    ChirpformComponent,
    ListComponent,
    SingleComponent,
    NavbarComponent,
    FooterComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

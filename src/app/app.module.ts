import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';




import { HomeviewComponent } from './views/homeview/homeview.component';
import { ListviewComponent } from './views/listview/listview.component';
import { SignviewComponent } from './views/signview/signview.component';
import { SigninformComponent } from './forms/signinform/signinform.component';
import { SignupformComponent } from './forms/signupform/signupform.component';
import { ChirpformComponent } from './forms/chirpform/chirpform.component';
import { ListComponent } from './items/list/list.component';
import { SingleComponent } from './items/single/single.component';
import { NavbarComponent } from './items/navbar/navbar.component';
import { FooterComponent } from './items/footer/footer.component';
import { UserinfoComponent } from './items/userinfo/userinfo.component';


const routes: Routes = [
{ path: 'signinform', component: SigninformComponent},
{ path: ' ', component: AppComponent},
{ path: 'signupform', component: SignupformComponent},
{ path: 'chirpform', component: ChirpformComponent}
];




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
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

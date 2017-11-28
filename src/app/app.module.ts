import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule, MatIconModule, MatDialog, MatSidenav } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';

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
import { UsersService } from './services/users/users.service';
import { ChirpsService } from './services/chirps/chirps.service';
import { DialogComponent } from './dialog/dialog.component';
import { SidenavComponent } from './items/sidenav/sidenav.component';
import { LoginService } from './services/login/login.service';
import { UserviewComponent } from './views/userview/userview.component';
import { SubsService } from './services/subs/subs.service';



const routes: Routes = [
  { 
    path: '',
    redirectTo: 'homeview',
    pathMatch: 'full',
  },
  { 
    path: 'signview',
    component: SignviewComponent
  },
  {
    path: 'homeview',
    component: HomeviewComponent
  },
  { 
    path: 'listview', 
    component: ListviewComponent
  },
  {
    path: 'userview',
    component: UserviewComponent
  }
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
    UserinfoComponent,
    DialogComponent,
    SidenavComponent,
    UserviewComponent
  ],

  entryComponents: [ 
    SigninformComponent,
    DialogComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatToolbarModule, 
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [
    UsersService,
    ChirpsService,
    LoginService,
    SubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

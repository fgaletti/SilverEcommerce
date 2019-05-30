import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { ValueComponent } from './value/value.component';
import { AlertifyService } from './services/alertify.service';
import { UserService } from './services/user.service';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptorProvider } from './services/error.interceptor';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { Nav_testComponent } from './nav_test/nav_test.component';

export function tokenGetter() {
   return localStorage.getItem('token');
 }

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      ValueComponent,
      HomeComponent,
      ProductListComponent,
      LoginComponent,
      ProductCreateComponent, Nav_testComponent
   ],
   imports: [
      NgbModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
          }
         }) // token
   ],
   providers: [
      AlertifyService,
      UserService,
      ErrorInterceptorProvider,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

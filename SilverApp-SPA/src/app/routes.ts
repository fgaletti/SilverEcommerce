import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ValueComponent } from './value/value.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product-create', component: ProductCreateComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'values', component: ValueComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

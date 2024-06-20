import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/home/register.component';
import { LoginComponent } from './components/login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {path:'register', component: RegisterComponent},
    {path:'login',component: LoginComponent},
    {path:'landingpage',component:LandingpageComponent},
    {path:'register',redirectTo:'/login',pathMatch:'full'}
    

];

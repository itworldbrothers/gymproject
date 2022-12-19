import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaterialModule } from "../material/material.module";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    InputTextModule,
    ButtonModule
  ]
})
export class HomeModule { }

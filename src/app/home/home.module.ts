import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaterialModule } from "../material/material.module";
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgOptimizedImage } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { CardsliderComponent } from './cardslider/cardslider.component';
import { CardtilesComponent } from './cardtiles/cardtiles.component';
import { SocialnotificationComponent } from './socialnotification/socialnotification.component';


@NgModule({
  declarations: [
    HomeComponent,
    SearchbarComponent,
    UserProfileComponent,
    CardsliderComponent,
    CardtilesComponent,
    SocialnotificationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    InputTextModule,
    ButtonModule,
    NgOptimizedImage,
    FormsModule
  ]
})
export class HomeModule { }

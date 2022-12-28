import { Component } from '@angular/core';

@Component({
  selector: 'app-cardtiles',
  templateUrl: './cardtiles.component.html',
  styleUrls: ['./cardtiles.component.css']
})
export class CardtilesComponent {

  wish:string = (new Date().getHours() > 3 && new Date().getHours() < 12) ? "Good Morning" : (new Date().getHours() > 12 && new Date().getHours() <= 19) ? "Good AfterNoon" : "Good Night";

}

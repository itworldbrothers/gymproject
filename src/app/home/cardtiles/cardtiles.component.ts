import { Component, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-cardtiles',
  templateUrl: './cardtiles.component.html',
  styleUrls: ['./cardtiles.component.css']
})
export class CardtilesComponent implements OnInit {


  wish: string = (new Date().getHours() > 3 && new Date().getHours() < 12) ? "Good Morning" :
    (new Date().getHours() >= 12 && new Date().getHours() <= 16) ? "Good AfterNoon" :
      (new Date().getHours() > 16 && new Date().getHours() <= 19) ? "Good Evening" :
        "Good Night";



  ngOnInit(): void {
    this.displayOpenClose();
  }

  displayOpenClose() {

    const openclose: Observable<string> = of(new Date().getHours() > 4 && new Date().getHours() < 20 ? "Gym is Open" : "Gym is Close")

    openclose.pipe(delay(3000)).subscribe(data => {
      this.wish = data;
    })


  }



}

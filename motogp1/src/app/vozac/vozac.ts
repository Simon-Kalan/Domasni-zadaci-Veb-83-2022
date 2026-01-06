import { Component, Input } from '@angular/core';




@Component({
  selector: 'app-vozac',
  imports: [],
  templateUrl: './vozac.html',
  styleUrl: './vozac.css',
})

export class Vozac {

 @Input()
  ime:String="";

  @Input()
  motordzija:Vozac | undefined;

  @Input()
  indeks:Number=0;

  funk(){
    console.log("ME STISNA");
  }
}

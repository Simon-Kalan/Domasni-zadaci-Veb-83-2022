import { Component, Input } from '@angular/core';
import { Shofer } from '../shofer';

@Component({
  selector: 'app-vozac',
  imports: [],
  templateUrl: './vozac.component.html',
  styleUrl: './vozac.component.css'
})
export class VozacComponent {

  @Input()
  ime:String="";

  @Input()
  motordzija:Shofer | undefined;

  @Input()
  indeks:Number=0;

  funk(){
    console.log("ME STISNA");
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VozacComponent } from "./vozac/vozac.component";
import { DRIVERS } from '../db-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VozacComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motogp';

  Shoferi = DRIVERS;

  soul() {
    console.log("APP COMP TRIGGER");
  }
}

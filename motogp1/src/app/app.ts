import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vozac } from './vozac/vozac';
import { DRIVERS } from '../db-data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Vozac, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'motogp1';

  prvVozac = DRIVERS[0];

  vtorVozac = DRIVERS[1];

  tretVozac = DRIVERS[2];

  Shoferi = DRIVERS;

  soul(){
    console.log("APP COMP TRIGGER");
  }
}

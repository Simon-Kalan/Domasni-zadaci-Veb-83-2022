import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 back: string = 'assets/Sliki/BlueCard.jpg';
sliki: string[] = [
  'assets/Sliki/Jugg.jpg',
  'assets/Sliki/Sven.jpeg',
  'assets/Sliki/Void.jpeg',
  'assets/Sliki/Axe.jpg',
  'assets/Sliki/Ursa.jpg',
  'assets/Sliki/Knight.avif'
];


  cards: any[] = [];
  obidi: number = 0;
  firstCard: any = null;
  lockBoard: boolean = false;

  constructor() {
    this.restartGame(); 
  }

  flipCard(card: any) {
    if (this.lockBoard || card.flipped) return;
    card.flipped = true;

    if (!this.firstCard) {
      this.firstCard = card;
      return;
    }

    this.lockBoard = true;
    this.obidi++;

    if (this.firstCard.front === card.front) {
      this.firstCard.matched = true;
      card.matched = true;
      this.resetBoard();
      this.checkWin();
    } else {
      setTimeout(() => {
        this.firstCard.flipped = false;
        card.flipped = false;
        this.resetBoard();
      }, 1000);
    }
  }

  resetBoard() {
    this.firstCard = null;
    this.lockBoard = false;
  }

  checkWin() {
    if (this.cards.every(c => c.matched)) {
      setTimeout(() => {
        alert(`Браво! Ги најде сите парови за ${this.obidi} обиди.`);
        this.restartGame();
      }, 200);
    }
  }

  restartGame() {
    this.obidi = 0;
    this.firstCard = null;
    this.lockBoard = false;
    this.cards = [...this.sliki, ...this.sliki]
  .map(img => ({ front: img, flipped: false, matched: false }))
  .sort(() => 0.5 - Math.random());

  }
}

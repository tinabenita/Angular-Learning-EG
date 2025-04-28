import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-input.component.html',
  styleUrl: './rating-input.component.scss'
})
export class RatingInputComponent {
  stars: boolean[] = Array(5).fill(false);

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
  }
}

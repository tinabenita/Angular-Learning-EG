import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-counter-component',
  standalone: true,
  imports: [
    MatIconModule
],
  templateUrl: './custom-counter-component.component.html',
  styleUrl: './custom-counter-component.component.scss'
})
export class CustomCounterComponentComponent {
  counter = 0;

  @Input() increment : number = 1;

  onAdd() {
    this.counter += this.increment;
  }

  onRemove() {
    this.counter -= this.increment;
  }
}

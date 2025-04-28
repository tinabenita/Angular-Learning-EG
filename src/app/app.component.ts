import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { TableCellChangeComponent } from './table-cell-change/table-cell-change.component';
import { PlayersTableComponent } from './players-table/players-table.component';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { CustomCounterComponentComponent } from './custom-counter-component/custom-counter-component.component';
import { QuantityFormComponent } from "./quantity-form/quantity-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    QuizFormComponent,
    TableCellChangeComponent,
    PlayersTableComponent,
    RatingInputComponent,
    CustomCounterComponentComponent,
    QuantityFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular-Learning-EG';
}

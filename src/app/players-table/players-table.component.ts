import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShowcardDirective } from '../showcard.directive';

@Component({
  selector: 'app-players-table',
  standalone: true,
  imports: [CommonModule, ShowcardDirective],
  templateUrl: './players-table.component.html',
  styleUrl: './players-table.component.scss'
})
export class PlayersTableComponent {
  players = [
    {
      name: 'Ullas',
      age: 29,
      team: 'Team A',
    },
    {
      name: 'Shodhan',
      age: 23,
      team: 'Team B',
    },
    {
      name: 'Aravind',
      age: 26,
      team: 'Team C',
    },
    {
      name: 'Beena',
      age: 25,
      team: 'Team D',
    },
    {
      name: 'Nipun',
      age: 27,
      team: 'Team E',
    },
  ];


}

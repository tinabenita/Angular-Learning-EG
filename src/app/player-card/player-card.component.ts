import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent implements OnInit {
  tooltip = '';
  left = 0;
  top = 0;

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { ColorchangingcellDirective } from '../colorchangingcell.directive';

@Component({
  selector: 'app-table-cell-change',
  standalone: true,
  imports: [ColorchangingcellDirective],
  templateUrl: './table-cell-change.component.html',
  styleUrl: './table-cell-change.component.scss'
})
export class TableCellChangeComponent {

}

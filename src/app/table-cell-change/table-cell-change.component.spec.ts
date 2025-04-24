import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellChangeComponent } from './table-cell-change.component';

describe('TableCellChangeComponent', () => {
  let component: TableCellChangeComponent;
  let fixture: ComponentFixture<TableCellChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCellChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCellChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

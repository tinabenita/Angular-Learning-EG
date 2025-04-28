import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-counter-component',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-counter-component.component.html',
  styleUrl: './custom-counter-component.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomCounterComponentComponent,
      multi: true
    }
  ]
})
export class CustomCounterComponentComponent implements ControlValueAccessor {
  counter = 0;
  touched = false;
  disabled = false;

  @Input() increment: number = 1;

  onChange = (counter: number) => {};
  onTouched = () => {};

  onAdd() {
    this.markAsTouched();
    this.counter += this.increment;
    this.onChange(this.counter);
  }

  onRemove() {
    this.markAsTouched();
    this.counter -= this.increment;
    this.onChange(this.counter);
  }

  writeValue(counter: number) {
    this.counter = counter;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}

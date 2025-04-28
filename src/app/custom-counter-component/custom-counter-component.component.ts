import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-custom-counter-component',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-counter-component.component.html',
  styleUrl: './custom-counter-component.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // Registers this component as a custom form control
      useExisting: CustomCounterComponentComponent,
      multi: true, // Allows multiple providers for NG_VALUE_ACCESSOR
    },
  ],
})
export class CustomCounterComponentComponent implements ControlValueAccessor {
  counter = 0; // Internal value of the custom control
  touched = false; // Tracks whether the control has been touched
  disabled = false; // Tracks whether the control is disabled

  @Input() increment: number = 1; // Input property to control the increment value

  // Callback function to notify Angular when the value changes
  onChange = (counter: number) => {};

  // Callback function to notify Angular when the control is touched
  onTouched = () => {};

  /**
   * Called when the user clicks the "Add" button.
   * Increments the counter and notifies Angular of the new value.
   */
  onAdd() {
    this.markAsTouched(); // Marks the control as touched
    this.counter += this.increment; // Increment the counter
    this.onChange(this.counter); // Notify Angular of the new value
  }

  /**
   * Called when the user clicks the "Remove" button.
   * Decrements the counter and notifies Angular of the new value.
   */
  onRemove() {
    this.markAsTouched(); // Marks the control as touched
    this.counter -= this.increment; // Decrement the counter
    this.onChange(this.counter); // Notify Angular of the new value
  }

  /**
   * Called by Angular to set the value of the control.
   * Updates the internal counter value.
   * @param counter The new value to set
   */
  writeValue(counter: number) {
    this.counter = counter;
  }

  /**
   * Called by Angular to register a callback function that will be called
   * when the control's value changes.
   * @param onChange The callback function to register
   */
  registerOnChange(onChange: (counter: number) => void) {
    this.onChange = onChange;
  }

  /**
   * Called by Angular to register a callback function that will be called
   * when the control is touched.
   * @param onTouched The callback function to register
   */
  registerOnTouched(onTouched: () => void) {
    this.onTouched = onTouched;
  }

  /**
   * Marks the control as touched and calls the registered `onTouched` callback.
   */
  markAsTouched() {
    if (!this.touched) {
      this.onTouched(); // Notify Angular that the control has been touched
      this.touched = true; // Update the touched state
    }
  }

  /**
   * Called by Angular to enable or disable the control.
   * Updates the `disabled` state of the control.
   * @param disabled Whether the control should be disabled
   */
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}

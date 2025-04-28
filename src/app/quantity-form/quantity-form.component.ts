import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomCounterComponentComponent } from '../custom-counter-component/custom-counter-component.component';

@Component({
  selector: 'app-quantity-form',
  standalone: true,
  imports: [CustomCounterComponentComponent, ReactiveFormsModule],
  templateUrl: './quantity-form.component.html',
  styleUrl: './quantity-form.component.scss'
})
export class QuantityFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      quantity: [60, [Validators.required, Validators.max(100), Validators.min(0)]]
    });  
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cm-add-order-field',
  templateUrl: './add-order-field.component.html',
  styleUrls: ['./add-order-field.component.css']
})
export class AddOrderFieldComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  @Output()
  saveOrder = new EventEmitter();
  @Input()
  id: number;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  get formControls() { return this.form.controls; }

  createFormGroup() {
    this.form = this.formBuilder.group({
      id: [this.id],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1), Validators.max(99999), Validators.pattern("^[0-9]+(.[0-9]{0,5})?$")]]
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    this.saveOrder.emit(this.form.value);
    this.form.controls["name"].reset();
    this.form.controls["price"].reset();
    this.isSubmitted = false;
  }
}

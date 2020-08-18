import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderFieldComponent } from './add-order-field.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AddOrderFieldComponent', () => {
  let component: AddOrderFieldComponent;
  let fixture: ComponentFixture<AddOrderFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AddOrderFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("form invalid when empty", ()=> { 
    component.form.controls.name.setValue('');
    component.form.controls.price.setValue('');
    expect(component.form.valid).toBeFalsy();
 });

 it("form invalid when price input is not numeric", ()=> { 
  component.form.controls.name.setValue('product1');
  component.form.controls.price.setValue('NAN');
  expect(component.form.valid).toBeFalsy();
});

it("form invalid when price input is equal or lower than zero", ()=> { 
  component.form.controls.name.setValue('product1');
  component.form.controls.price.setValue(-1);
  expect(component.form.valid).toBeFalsy();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

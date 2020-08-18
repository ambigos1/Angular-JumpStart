import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { AddOrderFieldComponent } from './components/add-order-field/add-order-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [SharedModule, OrdersRoutingModule, FormsModule,
    ReactiveFormsModule],
  declarations: [OrdersRoutingModule.components, AddOrderFieldComponent]
})
export class OrdersModule { }

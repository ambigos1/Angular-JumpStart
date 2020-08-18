import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults, IOrder } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';

@Component({
    selector: 'cm-customers-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['orders.component.css']
})
export class OrdersComponent implements OnInit {

    customers: ICustomer[];
    totalRecords = 0;
    pageSize = 5;
    isAddOrderOpen = false;
    currentPage: number = 1;

    constructor(private dataService: DataService, public trackbyService: TrackByService) { }

    ngOnInit() {
        this.getCustomersPage(this.currentPage);
    }

    pageChanged(page: number) {
        this.currentPage = page;
        this.getCustomersPage(page);
    }

    getCustomersPage(page: number) {
        this.currentPage = page;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.customers = response.results;
            });
    }

    addOrder(event, id) {
        this.isAddOrderOpen = !this.isAddOrderOpen;
        let elem = document.getElementById("add-order-field-" + id)
        elem.hidden = !elem.hidden
    }

    saveOrder(obj) {
        const o: IOrder = { itemCost: obj.price, productName: obj.name };

        this.dataService.insertOrder(obj.id, o).subscribe(x => {
            this.getCustomersPage(this.currentPage);
        });
    }

}

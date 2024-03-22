import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.scss']
})
export class InvoiceItemsComponent implements OnInit {
  @Input()invoice_items: any;
  @Input()items: any;
  constructor(){
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Invoice } from 'src/ models/invoice.model';
import { Status } from 'src/ models/status.model';
import { AccountService } from 'src/services/account.service';
import {MatDialog} from '@angular/material/dialog';
import { NewInvoiceDialogComponent } from 'src/app/shared/new-invoice-dialog/new-invoice-dialog.component';
@Component({
  selector: 'app-global-filter',
  templateUrl: './global-filter.component.html',
  styleUrls: ['./global-filter.component.scss']
})
export class GlobalFilterComponent {
  invoices: Invoice[]=[];
  statuses: Status[]=[];
  showLoader: Boolean = false;
  constructor(private account:AccountService, public dialog: MatDialog) {

  }

  ngOnInit(){
    this.showLoader = true;
    this.account.getInvoices().subscribe((value:any) => {
      this.invoices = value;
      this.showLoader = false;
    });
    this.account.getStatuses().subscribe((value:any) => {
      this.statuses = value;
    });
  }

  toggleNewInvoice():void {
    const dialogRef = this.dialog.open(NewInvoiceDialogComponent,{
      width:'410px',
      height:'100vh',
      id:'new-invoice-dialog'
    });
  }

  checkStatusId(id:number){
    return this.statuses.filter(value => value?.id === id)[0]?.status;
  }
}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-invoice-dialog',
  templateUrl: './new-invoice-dialog.component.html',
  styleUrls: ['./new-invoice-dialog.component.scss']
})
export class NewInvoiceDialogComponent {
    itemList: any[] = [];
    constructor(public dialogRef: MatDialogRef<NewInvoiceDialogComponent>){

    }

    noClick(){
      this.dialogRef.close();
    }

    addItem():void {
      let obj = {
        name:"",
        qty: null,
        price: null
      }
      this.itemList.push(obj);
    }

    removeItem(i:number):void {
      this.itemList.splice(i, 1);
    }

    saveDialog(){
      this.dialogRef.close();
    }
}

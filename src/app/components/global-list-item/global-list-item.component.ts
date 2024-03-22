import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/ models/invoice.model';
import { Status } from 'src/ models/status.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-global-list-item',
  templateUrl: './global-list-item.component.html',
  styleUrls: ['./global-list-item.component.scss']
})
export class GlobalListItemComponent implements OnInit, AfterViewInit {
  invoice: any;
  items: any;
  statuses: Status[]=[];
  constructor(private route:ActivatedRoute, private account:AccountService){
  }

  checkStatusId(id:number) {
    // return this.statuses.filter(value => value?.id === id)[0]?.status;
  }

  ngOnInit() {
    this.account.getInvoices().subscribe((value:any) => {
      this.route.params.subscribe((params:any) => {
        value.forEach((element:any) => {
            if(element.id === params.id){
              this.invoice = element;
            }
        });
    });
    });
  }
  ngAfterViewInit() {
    
  }
}

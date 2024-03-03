import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedUser } from 'src/ models/logged-user.model';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user:LoggedUser = {username:'',picture:''};
  constructor(private account: AccountService, private router: Router){
  }

  ngOnInit(){
    this.router.navigate(['/list']);
    this.account.getRandomUser().subscribe((value:any) => {
      this.user.picture = value.results[0].picture.large;
      this.user.username = value.results[0].name;
    });
  }
}

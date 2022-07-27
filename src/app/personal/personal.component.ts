import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  acno = '';
  pswd = '';
  amnt = '';

  acno1 = '';
  pswd1 = '';
  amnt1 = '';

  constructor(private ds: DataService) {}

  ngOnInit(): void {}
  deposit() {
    var acno = this.acno;
    var pswd = this.pswd;
    var amnt = this.amnt;

    const result = this.ds.deposit(acno, pswd, amnt);
    if (result) {
      alert(`${amnt}amount is credited, balence is ${result}`);
    }
  }
  withdraw() {
    var acno1 = this.acno1;
    var pswd1 = this.pswd1;
    var amnt1 = this.amnt1;
    const result = this.ds.withdraw(acno1, pswd1, amnt1);
    if (result) {
      alert(`successfully withdrawn ${amnt1}`);
    }
  }
}

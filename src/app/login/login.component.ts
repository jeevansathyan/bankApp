import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public cap='your Tech friendly bank'
public acstr='enter ypur account number here'
acno=''
pswd=''

userDetails:any={
1000:{acno:1000,userName:'jeevan',password:1000,balence:100000},
1001:{acno:1001,userName:'akhil',password:1001,balence:230000},
1002:{acno:1002,userName:'amith',password:1002,balence:340000},
}

  constructor() { }

//life cycle hook of angular
  ngOnInit(): void {
  }
//here we can define user defined functions
// login(){
// if(this.acno in this.userDetails){
// console.log(this.userDetails)
// }
// }
// pswdChange(event:any){
// this.pswd=event.target.value;
// console.log(this.pswd)
// }
// acnoChange(event:any){
// this.acno=event.target.value;
// console.log(this.acno)
// }
login(a:any,b:any){
var acno=a.value
var pswd=b.value

let userDetails=this.userDetails
  if(acno in userDetails){
  if(pswd==userDetails[acno]['password']){
        alert('login success');}
    else{alert('incorrect password')}
    }
      else{alert('user doesnot exist')
}
}

}

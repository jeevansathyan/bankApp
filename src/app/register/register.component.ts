import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public uname=""
public acno=""
public pswd=""

  constructor(private ds : DataService,private router:Router) { }

  ngOnInit(): void {
  }
register(){
var uname=this.uname
var acno=this.acno
var pswd=this.pswd


const result=this.ds.register(acno,uname,pswd)
if(result){
alert('successfully registered!!!')
this.router.navigateByUrl('');
}
else{
alert('User already exist.. please login')
this.router.navigateByUrl('')
}
}
}

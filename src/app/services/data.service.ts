import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userDetails: any = {
    1000: {
      acno: 1000,
      userName: 'jeevan',
      password: 1000,
      balence: 100000,
      transaction: [],
    },
    1001: {
      acno: 1001,
      userName: 'akhil',
      password: 1001,
      balence: 230000,
      transaction: [],
    },
    1002: {
      acno: 1002,
      userName: 'amith',
      password: 1002,
      balence: 340000,
      transaction: [],
    },
  };
  currentUser: any;
currentAcno:any;

  constructor() {}
  //register
  register(acno: any, userName: any, password: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      return false;
    } else {
      userDetails[acno] = {
        acno: acno,
        userName: userName,
        password: password,
        balence: 0,
        transaction: [],
      };
      console.log(userDetails);
      return true;
    }
  }

  login(acno: any, pswd: any) {
    let userDetails = this.userDetails;

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['userName'];
this.currentAcno=acno
        return true;
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert('user doesnot exist');
      return false;
    }
  }

  deposit(acno: any, pswd: any, amnt: any) {
    let userDetails = this.userDetails;
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balence'] += parseInt(amnt);
        userDetails[acno]['transaction'].push({type:'credit',amnt})
        return userDetails[acno]['balence'];
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert('user doesnot exist');
      return false;
    }
  }

  withdraw(acno1: any, pswd1: any, amnt: any) {
    let userDetails = this.userDetails;
    if (acno1 in userDetails) {
      if (pswd1 == userDetails[acno1]['password']) {
        userDetails[acno1]['balence'] -= parseInt(amnt);
        userDetails[acno1]['transaction'].push({type:'debit',amnt})
console.log(userDetails)
        return userDetails[acno1]['balence'];
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert('incorrect user datails');
      return false;
    }
  }
//transaction
getTransaction(acno:any){
return this.userDetails[acno]['transaction']
}
}

import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-passwordGenerator',
  templateUrl: 'passwordGenerator.html'
})
export class passwordGenerator {


public constructor(private alertCtrl: AlertController){

}

  passLength: string;

  normalLength: number;
  normalSet: string;
  normalResult: string;

  capitalsLength: string;
  capitalSet: string;
  capitalsResult: string;

  numbersLength: string;
  numberSet: string;
  numbersResult: string;

  specialsLength: string;
  specialSet: string;
  specialsResult: string;

  fullPassword: string;



  generate(){
   this.normalSet = "abcdefghijklmnopqrstuvwxyz";
   this.capitalSet = "ABCDEFGHIJSKLMNOPQRSTUVWXYZ";
   this.numberSet = "1234567890";
   this.specialSet = "!@#$%^&*()_+~`|}{[]\:;?><,./-="




if(/\D/.test(this.passLength)){
  this.passLengthAlert();
  return false;
}
if(isNaN(parseFloat(this.passLength))){
  this.passLengthAlert();
  return false;
}




if(/\D/.test(this.numbersLength)){
  this.numbersLengthAlert();
  return false;
}
if(isNaN(parseFloat(this.numbersLength))){
  this.numbersLengthAlert();
  return false;
}


if(/\D/.test(this.capitalsLength)){
  this.capitalsLengthAlert();
  return false;
}
if(isNaN(parseFloat(this.capitalsLength))){
  this.capitalsLengthAlert();
  return false;
}


if(/\D/.test(this.specialsLength)){
  this.specialsLengthAlert();
  return false;
}
if(isNaN(parseFloat(this.specialsLength))){
  this.specialsLengthAlert();
  return false;
}

if(parseFloat(this.passLength) < ((parseFloat(this.capitalsLength) + parseFloat(this.numbersLength)) + parseFloat(this.specialsLength))){
  this.lessThanAlert();
  return false;
}
   
   this.normalLength = (((parseFloat(this.passLength) - parseFloat(this.capitalsLength)) - parseFloat(this.numbersLength)) - parseFloat(this.specialsLength));
   console.log("normalLength = " + this.normalLength)
   console.log("capitalsLength = " + this.capitalsLength)
   console.log("numbersLength = " + this.numbersLength)
   console.log("specialsLength = " + this.specialsLength)

   this.normalResult = "";
   this.capitalsResult = "";
   this.numbersResult = "";
   this.specialsResult = "";

    for (var i = 0, n = this.normalSet.length; i < this.normalLength; ++i) {
        this.normalResult += this.normalSet.charAt(Math.floor(Math.random() * n));
        console.log("Normals = " + this.normalResult)
    }

    for (var i = 0, n = this.capitalSet.length; i < parseFloat(this.capitalsLength); ++i) {
        this.capitalsResult += this.capitalSet.charAt(Math.floor(Math.random() * n));
        console.log("Capitals = " + this.capitalsResult)
    }

    for (var i = 0, n = this.numberSet.length; i < parseFloat(this.numbersLength); ++i) {
        this.numbersResult += this.numberSet.charAt(Math.floor(Math.random() * n));
        console.log("Numbers = " + this.numbersResult)
    }

    for (var i = 0, n = this.specialSet.length; i < parseFloat(this.specialsLength); ++i) {
        this.specialsResult += this.specialSet.charAt(Math.floor(Math.random() * n));
        console.log("Specials = " + this.specialsResult)
    }

    this.fullPassword = this.capitalsResult + this.normalResult + this.numbersResult + this.specialsResult;
    console.log("full Password = " + this.fullPassword)


  }



  passLengthAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter a number for the full password length',
      buttons: ['OK']
    });
    alert.present()
  };

    capitalsLengthAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter a number for the amount of required capital letters',
      buttons: ['OK']
    });
    alert.present()
  };

    numbersLengthAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter a number for the amount of required numbers',
      buttons: ['OK']
    });
    alert.present()
  };

    specialsLengthAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Please enter a number for the amount of required special characters',
      buttons: ['OK']
    });
    alert.present()
  };

    lessThanAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: 'Total password length must be greater than or equal to the combined sum of capitals, numbers, and special characters',
      buttons: ['OK']
    });
    alert.present()
  };

}

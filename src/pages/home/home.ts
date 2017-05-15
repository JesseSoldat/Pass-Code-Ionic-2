import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	tapped = 0;
	pressed = 0;


  onTap(){
  	this.tapped++;
  }

  onPress() {
  	this.pressed++
  }

  didWin() {
  	return false;
  }

}

import { Component } from '@angular/core';
declare var $ : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  open:Boolean=false;
  constructor() {

  }
  closeModal(){
     $('.overlay').removeClass('open');
      this.open = false;
  }
  openModal(){
    $('.overlay').addClass('open');
    this.open = true;
  }
}


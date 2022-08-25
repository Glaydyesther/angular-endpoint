import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
  displayStyle = "block";
  
  ngAfterViewInit(){
    this.sidenav.mode= 'over';
    this.sidenav.close();
 }
 clickMenu(){
  if(this.sidenav.mode=='over'){
    this.sidenav.mode= 'side';
    this.sidenav.open();
  }
  else{
    this.sidenav.mode = 'over';
    this.sidenav.close();
  }  
}
closePopup() {
  this.displayStyle = "none";
}
}
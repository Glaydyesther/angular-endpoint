import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserListServiceService } from 'src/app/services/user-list-service.service';

@Component({
  selector: 'app-data-user',
  templateUrl: './data-user.component.html',
  styleUrls: ['./data-user.component.css']
})
export class DataUserComponent implements OnInit {
  id: any;
  listUser: any;
  position: any;
  lat: any;
  lng: any;
  infoLat: number = 0;
  infoLng: number = 0;
  displayStyle = "block";
  constructor(
    private route: ActivatedRoute,
    public userList: UserListServiceService,
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserById();   
  }
     
  closePopup() {
    this.displayStyle = "none";
  }

  getUserById(){
    this.userList.getUserById(this.id).subscribe((res)=>{ 
      this.listUser = res;
      this.infoLat = Number(res.address.geo.lat) ;
      this.infoLng = Number(res.address.geo.lng);
      this.position = {
       lat: this.infoLat,
       lng:this.infoLng
      };         
    }, 
  
    (e) => {console.error(e)})
    
 
  }
 
}
import { Component, OnInit } from '@angular/core';
import { UserListServiceService } from 'src/app/services/user-list-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-view-users',
  templateUrl: './card-view-users.component.html',
  styleUrls: ['./card-view-users.component.css']
})
export class CardViewUsersComponent implements OnInit {
  listUser : any;
  id: any;
  constructor( public userList: UserListServiceService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllUsers(); 
  }
  getAllUsers(){
    this.userList.getUserList().subscribe((res) => { this.listUser = res; console.log(res)},
    (e) => {console.error(e)}
    )
  }    
}

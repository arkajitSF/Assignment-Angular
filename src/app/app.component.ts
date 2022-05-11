import { Component, OnInit } from '@angular/core';
import  userdata  from '../assets/user.json';  
import { User, Role } from './user.model';
import { plainToClass } from "class-transformer";
import { UserService } from './service/user.service';
import { RoleService } from './service/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assigntment-angular';
  buttonname = 'Load Data';
  users: User[] = []
  roles = Object.values(Role)

  loadTable: boolean = false
  userData: any;
  isDataNotLoaded :boolean = true;
  roleData: any;

  constructor(private userservice: UserService, private roleservice: RoleService){

  }

  ngOnInit(): void {

    // this.getAllUsers();
    this.getAllRoles();

    console.log(typeof this.roles);
    
  }

  populateUser() {
    // for ( let user of userdata) {
    //   const realUser = plainToClass(User, user)!;
    //   this.users.push(realUser);
    // }

    this.users.push(...this.userData)
    console.log(this.users);
    

  }
  loadData(){
    this.getAllUsers();
    this.loadTable = true
    this.users = []
    // this.populateUser()
    this.buttonname = 'Refresh Data';
    console.log()  
  }

  delete(element){
    //finding object index
    const removeIndex = this.users.findIndex( u => u.email === element);
    // removing object
    this.users.splice( removeIndex, 1 );
  }

  edit(element){
    element.modifiable = true
  }

  getAllUsers(){
    this.userservice.getUsers().subscribe(
      res =>{
        console.log(res);
        this.userData = res; 
        // this.isDataNotLoaded = false;
        this.populateUser()
      }
    )
  }

  getAllRoles(){
    this.roleservice.getRoles().subscribe(
      res =>{
        console.log(res);
        this.roleData = res; 
      }
    )
  }
  updateUser(i:any){
    let data = delete this.users[i].modifiable
    console.log(this.users[i]);
    
    this.userservice.updateUser(this.users[i]).subscribe(
      res =>{
        console.log(res);
      }
    )
  }
  deleteUser(i:any){
    
    this.userservice.deleteUser(this.users[i]).subscribe(
      res =>{
        console.log(res);
        // this.getAllUsers();
        // this.loadData();
        this.users.splice(i,1);
        this.userData.splice(i,1);
      }
    )
  }
}

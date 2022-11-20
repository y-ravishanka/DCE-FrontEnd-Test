import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { AllUser } from 'src/app/AllUser';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent {

  txtArea?: string;

  getUser(): void {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users", true);
    xhr.onload = function(){
      console.log(xhr.response);
      //alluser: AllUser = xhr.response;
    };
    xhr.send();
    
  }
}

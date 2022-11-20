import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  deleteUser(): void{
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "https://reqres.in/api/users/2", true);
    xhr.onload = function(){
      console.log(xhr.response);
      //alluser: AllUser = xhr.response;
    };
    xhr.send();
  }
}

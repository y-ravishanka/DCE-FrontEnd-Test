import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  txtName?: string;
  txtJob?: string;

  createUser(): void{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/users");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }};
      
      let data = {
        "name" : this.txtName,
        "job": this.txtJob
      };

      xhr.send(JSON.stringify(data));
  }
}

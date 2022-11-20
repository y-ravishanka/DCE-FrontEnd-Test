import { Component } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  txtName?: string;
  txtJob?: string;

  updateUser(): void{
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://reqres.in/api/users/2");
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

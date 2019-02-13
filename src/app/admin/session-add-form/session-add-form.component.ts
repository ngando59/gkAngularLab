import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-add-form',
  templateUrl: './session-add-form.component.html',
  styleUrls: ['./session-add-form.component.css']
})
export class SessionAddFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addSession(sessionItem) {
    console.log(sessionItem);
  }

}

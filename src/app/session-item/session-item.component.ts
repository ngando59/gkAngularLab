import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  inscrire() {
  this.session.name = 'Formation Web avançé';
  this.session.participants++;
  this.participantsChange.exit({
    value: this.session.participants
  });
  }
}

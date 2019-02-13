import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session: any;
  @Output() participantsChange = new EventEmitter<any>();
  isCompleted = false;
  constructor() { }

  ngOnInit() {
  }

  inscrire() {
    this.session.participants++;
    this.participantsChange.emit({
      value: this.session.participants
    });
    if (this.session.participants >= 20) {
      this.session.isCompleted = true;
    }
  }
}

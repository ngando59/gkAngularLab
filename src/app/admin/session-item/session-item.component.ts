import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FakeSessionItemService} from '../../fake-session-item.service';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session;
  @Output() participantsChange = new EventEmitter<any>();
  isCompleted = false;
  constructor(private sessionItemService: FakeSessionItemService) { }

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
  onDelete() {
    console.log(this.session);
    this.sessionItemService.delete(this.session);
  }
}

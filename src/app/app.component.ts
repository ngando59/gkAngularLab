import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GKAngular Lab';
  nbPart = 0;

  firstSession = {
    id: 1,
    name: 'Formation Web',
    track: 'MEAN Strack',
    date: 'Prévue du 11/06/2018 au 15/06/2018',
    local: 'Lyon',
    participants: 0
  };

  nbParticipantsChange(event) {
    this.nbPart = event.value;
  }
}

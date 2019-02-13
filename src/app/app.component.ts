import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GKAngular Lab';
  nbPart = 0;

  sessionItems = [
    {
      id: 1,
      name: 'Web',
      track: 'MEAN Strack',
      date: new Date('2018-06-13'),
      duree: 3,
      local: 'Lyon',
      participants: 0
    },
    {
      id: 2,
      name: 'Mobile',
      track: 'Angular',
      date: new Date('2018-09-10'),
      duree: 5,
      local: 'Paris',
      participants: 0
    },
    {
      id: 3,
      name: 'Web',
      track: 'NodeJS',
      date: new Date('2018-06-20'),
      duree: 5,
      local: 'Lyon',
      participants: 0
    }
  ];


  nbParticipantsChange(event) {
    this.nbPart++;
  }
}

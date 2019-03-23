import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Observable } from 'rxjs';

class Session{
  constructor(public session){

  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sessions = [];
  players = []
  constructor(db: AngularFireDatabase) {
    db.list('sessions').query.once('value').then(value => {
      this.sessions.push(value.val());
      for(var item in this.sessions[0]){
        this.players.push(this.sessions[0][item].players);
      }
    });
    
  }
}

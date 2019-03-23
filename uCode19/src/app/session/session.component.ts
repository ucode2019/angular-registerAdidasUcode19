import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import { Session } from './session';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  public sessions = [];
  public sessionData = [];
  public playersData = [];
  objectKeys = Object.keys;
  objectValues = Object.values;
  constructor(private sessionService: SessionService){
  }
  ngOnInit() {
    this.sessionService.getHeroes().then(value => {
      this.sessions.push(value.val());
      this.setValuesSession(this.sessions[0]);
      //parse players
      this.getPlayers(this.sessionData);
    });
    
  }

  setValuesSession(data) {
    for(var id in data){ 
      this.sessionData.push(data[id]);
    }  
  }

  getPlayers(parsedData){
    for( var elem in parsedData){
      var session = parsedData[elem];
      for(var val in session){
        if(val == "players"){
            this.playersData.push(session[val]);
        }
      }
    }
  }
}

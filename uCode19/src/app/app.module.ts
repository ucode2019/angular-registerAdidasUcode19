import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import { SessionComponent } from './session/session.component';
import { PlayerComponent } from './player/player.component';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'ucode2019'),
    AngularFireDatabaseModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent, SessionComponent, PlayerComponent]
})
export class AppModule { }

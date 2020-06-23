import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

// Core imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'; // Firestore database
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFirestoreModule,
    MaterialModule,
    AppRoutingModule,

    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

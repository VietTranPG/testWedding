import { appRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PendingComponent } from './pending/pending.component';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingComponent,
    CardComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

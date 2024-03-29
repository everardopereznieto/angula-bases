import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/components/heroes.module';


//import { AppRoutingModule } from './app-routing.module';
//import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
  //  CounterComponent,
    //HeroComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

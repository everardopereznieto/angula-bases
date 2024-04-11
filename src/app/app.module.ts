import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/components/heroes.module';
//import { MainPageComponent } from './dbz/pages/main-page.component';


//import { AppRoutingModule } from './app-routing.module';
//import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
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
    DbzModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

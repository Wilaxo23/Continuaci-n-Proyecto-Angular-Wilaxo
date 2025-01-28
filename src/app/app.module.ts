import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/hero/heroes.module';
import { CounterModule } from './counter/counter.module';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],

  imports: [BrowserModule, CounterModule, HeroesModule, DbzModule],

  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { DbzAddCharacterComponent } from './components/add-character/add-character.component';
import { MainPageComponent } from './components/add-character/pages/main-page.component';

import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPageComponent, ListComponent, DbzAddCharacterComponent],
  imports: [BrowserModule, FormsModule],
  exports: [MainPageComponent],
})
export class DbzModule {}

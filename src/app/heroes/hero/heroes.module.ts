import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero.component';

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}

import { NgModule } from '@angular/core';
import { FrComponent } from './fr.component';
import { BrowserModule } from '@angular/platform-browser';
import { FrRoutingModule } from './fr-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [FrComponent],
  imports: [BrowserModule, FrRoutingModule, SharedModule],
  providers: [],
  bootstrap: [FrComponent],
})
export class FrModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { ResponsiveScrollModule } from 'p-table-responsive-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TableModule, ResponsiveScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

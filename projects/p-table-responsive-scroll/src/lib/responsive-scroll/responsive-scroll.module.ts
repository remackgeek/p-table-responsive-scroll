import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveScrollDirective } from './responsive-scroll.directive';

@NgModule({
  declarations: [ResponsiveScrollDirective],
  imports: [CommonModule],
  exports: [ResponsiveScrollDirective]
})
export class ResponsiveScrollModule {}

import { Directive, AfterViewInit, NgZone } from '@angular/core';
import { Table } from 'primeng/table';
import ResizeObserver from 'resize-observer-polyfill';

// tslint:disable-next-line: max-line-length
// based on: https://stackoverflow.com/questions/54200024/primeng-turbotable-p-table-does-not-work-properly-with-scrollheight-100/54218853#54218853

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[responsive-scrolling]'
})
export class ResponsiveScrollDirective implements AfterViewInit {
  constructor(private table: Table, private readonly zone: NgZone) {}

  ngAfterViewInit() {
    // avoid "expression changed after check issue"
    setTimeout(() => {
      new ResizeObserver(() => this.zone.run(() => this.resize())).observe(this.table.el.nativeElement.parentElement);
    }, 10);
  }

  resize() {
    // HACK: mark "scrollHeight" dirty, so it's re-evaluated.
    if (this.table.scrollHeight.endsWith(' ')) {
      this.table.scrollHeight = this.table.scrollHeight.slice(0, -1);
    } else {
      this.table.scrollHeight += ' ';
    }
    // HACK: force scrollbar show/hide recalc
    setTimeout(() => {
      this.table.tableService.onValueChange(this.table._value);
    }, 1);
  }
}

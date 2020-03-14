import { Directive, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Table } from 'primeng/table';

// tslint:disable-next-line: max-line-length
// based on: https://stackoverflow.com/questions/54200024/primeng-turbotable-p-table-does-not-work-properly-with-scrollheight-100/54218853#54218853

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[responsive-scrolling]'
})
export class ResponsiveScrollDirective implements OnInit, AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  constructor(private table: Table) {}

  ngOnInit() {
    console.log('here I am!!!', this.table);
  }

  ngAfterViewInit() {
    // avoid "expression changed after check issue"
    setTimeout(() => {
      this.resize();
    }, 100);
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

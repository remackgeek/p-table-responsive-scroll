import { ResponsiveScrollDirective } from './responsive-scroll.directive';
import { fakeAsync, tick } from '@angular/core/testing';
import ResizeObserver from 'resize-observer-polyfill';
const table = {
  scrollHeight: 0,
  tableService: {
    onValueChange: value => {}
  },
  el: {
    nativeElement: {
      parentElement: {}
    }
  }
};
const zone = { run: () => {} };

describe('ResponsiveScrollDirective', () => {
  let directive;
  let changeSpy;

  beforeEach(() => {
    directive = new ResponsiveScrollDirective(table as any, zone as any);
    changeSpy = spyOn(directive.table.tableService, 'onValueChange').and.stub();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should resize with scrollHeight "100%"', fakeAsync(() => {
    directive.table.scrollHeight = '100%';
    directive.resize();
    tick(10);
    expect(directive.table.scrollHeight).toEqual('100% ');
    expect(changeSpy).toHaveBeenCalled();
  }));

  it('should resize with scrollHeight "100% "', fakeAsync(() => {
    directive.table.scrollHeight = '100% ';
    directive.resize();
    tick(10);
    expect(directive.table.scrollHeight).toEqual('100%');
    expect(changeSpy).toHaveBeenCalled();
    console.log(ResizeObserver);
  }));

  it('should initialize ResizeObserver in ngAfterViewInit', fakeAsync(() => {
    const observerStub = spyOn(ResizeObserver.prototype, 'observe').and.stub();
    directive.ngAfterViewInit();
    tick(10);
    expect(observerStub).toHaveBeenCalled();
  }));
});

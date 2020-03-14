import { ResponsiveScrollDirective } from './responsive-scroll.directive';
const table = { scrollHeight: 0 };
const zone = { run: () => {} };

describe('ResponsiveScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new ResponsiveScrollDirective(table as any, zone as any);
    expect(directive).toBeTruthy();
  });
});

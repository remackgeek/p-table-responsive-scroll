import { ResponsiveScrollDirective } from './responsive-scroll.directive';

describe('ResponsiveScrollDirective', () => {
  it('should create an instance', () => {
    const directive = new ResponsiveScrollDirective({ scrollHeight: 0 } as any);
    expect(directive).toBeTruthy();
  });
});

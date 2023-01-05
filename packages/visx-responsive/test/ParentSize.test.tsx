import React from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import { render } from '@testing-library/react';
import { ParentSize } from '../src';
import { setResizeObserverPolyfill } from '../src/utils/resizeObserverPolyfill';

describe('<ParentSize />', () => {
  it('should be defined', () => {
    expect(ParentSize).toBeDefined();
  });
  it('does not throw', () => {
    const wrapper = render(
      <ParentSize resizeObserverPolyfill={ResizeObserver}>
        {() => <div data-testid="test" />}
      </ParentSize>,
    );
    expect(wrapper.findByTestId('test')).not.toBeNull();
  });
  it('references ResizeObserver set by setResizeObserver(ro)', () => {
    setResizeObserverPolyfill(ResizeObserver);
    const wrapper = render(<ParentSize>{() => <div data-testid="test" />}</ParentSize>);
    expect(wrapper.findByTestId('test')).not.toBeNull();
    setResizeObserverPolyfill(undefined);
  });
});

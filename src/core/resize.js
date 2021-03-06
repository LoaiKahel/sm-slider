// @flow
import Store from '../utils/Store';
import type { SliderState } from '../types/SliderState';
import slide from './slide';

export default (
    $ref: HTMLElement,
    $slides: HTMLElement,
    store: Store<SliderState>
) => {
    const { innerSize, visibleSlides, isVertical } = store.getState();
    const sizeAttribute = isVertical ? 'height' : 'width';

    slide($ref, $slides, store, true);

    Array.prototype.forEach.call($slides.children, ($slide) => {
        $slide.style[sizeAttribute] = `${Math.round(innerSize / visibleSlides)}px`;
    });
};

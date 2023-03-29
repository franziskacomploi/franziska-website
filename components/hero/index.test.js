import { mount } from '@vue/test-utils';
import { it, expect, describe } from 'vitest';
import Hero from './index.vue';

describe('Hero', () => {
  it('should mount', () => {
    const wrapper = mount(Hero, { shallow: true });
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly', () => {
    const wrapper = mount(Hero, { shallow: true });
    expect(wrapper.element).toMatchSnapshot();
  });
});

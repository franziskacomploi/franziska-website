import { mount } from '@vue/test-utils';
import { it, expect, describe } from 'vitest';
import About from './index.vue';

describe('About', () => {
  it('should mount', () => {
    const wrapper = mount(About, { shallow: true });
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly', () => {
    const wrapper = mount(About, { shallow: true });
    expect(wrapper.element).toMatchSnapshot();
  });
});

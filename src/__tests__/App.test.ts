import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App.vue', () => {
  it('renders header and footer', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterView', 'Header'],
      },
    });
    expect(wrapper.html()).toContain('footer');
    expect(wrapper.html()).toContain('Created 2025');
  });
});

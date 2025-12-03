import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ListView from '../components/molecules/ListView.vue';

describe('ListView.vue', () => {
  it('renders a list of items', () => {
    const items = [
      { name: 'Apple', amount: 5, isAvailable: true },
      { name: 'Banana', amount: 3, isAvailable: false },
    ];
    const onAddToCart = () => {};
    const wrapper = mount(ListView, {
    props: { items, onAddToCart },
    // Do not stub ListItem so it renders as real DOM elements
    });
    
    // Each ListItem should render as a child of ul
    expect(wrapper.findAllComponents({ name: 'ListItem' }).length).toBe(2);
    expect(wrapper.find('ul').exists()).toBe(true);
  });
});

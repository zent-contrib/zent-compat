import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MonthPicker from 'datetimepicker/MonthPicker';
import formatDate from 'zent/es/utils/date/formatDate';

Enzyme.configure({ adapter: new Adapter() });

describe('MonthPicker', () => {
  it('MonthPicker not show footer ', () => {
    let pop;
    const wrapper = mount(<MonthPicker />);
    wrapper.find('.picker-input').simulate('click');

    pop = wrapper.find('.zent-popover');

    expect(pop.find('MonthPanel').length).toBe(1);
    pop
      .find('.panel__cell')
      .at(1)
      .simulate('click');

    expect(wrapper.state('openPanel')).toBe(false);
    wrapper.unmount();
  });

  it('MonthPicker has 2 level panel', () => {
    let pop;
    const wrapper = mount(<MonthPicker isFooterVisible />);
    const inst = wrapper.instance();
    expect(inst.state.openPanel).toBe(false);
    expect(inst.state.showPlaceholder).toBe(true);
    wrapper.find('.picker-input').simulate('click');
    expect(inst.state.openPanel).toBe(true);

    pop = wrapper.find('.zent-popover');
    expect(pop.find('MonthPanel').length).toBe(1);
    expect(pop.find('.grid-cell').length).toBe(12);

    pop.find('.panel__title').simulate('click');
    pop = wrapper.find('.zent-popover');
    expect(pop.find('YearPanel').length).toBe(1);
    expect(pop.find('YearPanel .grid-cell').length).toBe(12);

    pop
      .find('YearPanel .panel__cell')
      .at(1)
      .simulate('click');
    pop = wrapper.find('.zent-popover');
    expect(pop.find('YearPanel').length).toBe(0);

    pop
      .find('MonthPanel .panel__cell')
      .at(1)
      .simulate('click');
    pop.find('.zent-btn').simulate('click');

    wrapper.find('.picker-input').simulate('click');
    pop.find('.link--current').simulate('click');
    pop.find('.zent-btn').simulate('click');
    expect(inst.state.selected.getMonth()).toBe(new Date().getMonth());
    wrapper.unmount();
  });

  it('MonthPicker return empty string when click clear icon', () => {
    let wrapper;
    const onChangeMock = jest.fn();
    wrapper = mount(
      <MonthPicker value="2010-01" onChange={onChangeMock} isFooterVisible />
    );
    wrapper
      .find('.zenticon-close-circle')
      .at(0)
      .simulate('click');
    expect(onChangeMock.mock.calls[0][0].length).toBe(0);
    wrapper.unmount();
  });

  it('MonthPicker support default value', () => {
    let wrapper;
    wrapper = mount(<MonthPicker defaultValue="2010-01" isFooterVisible />);
    expect(wrapper.instance().state.actived).toBeInstanceOf(Date);

    wrapper = mount(<MonthPicker vaule="xxxx-xx" isFooterVisible />);
    expect(wrapper.instance().state.showPlaceholder).toBe(true);
  });

  it('MonthPicker is a controlled component', () => {
    let wrapper;
    let pop;
    const onChangeMock = jest.fn().mockImplementation(value => {
      wrapper.setProps({ value });
    });
    wrapper = mount(
      <MonthPicker value="2010-01" onChange={onChangeMock} isFooterVisible />
    );

    const inst = wrapper.instance();
    expect(inst.state.showPlaceholder).toBe(false);
    wrapper.find('.picker-input').simulate('click');
    pop = wrapper.find('.zent-popover');

    expect(inst.state.actived.getFullYear()).toBe(2010);
    expect(inst.state.actived.getMonth()).toBe(0);

    pop.find('.link--current').simulate('click');
    expect(inst.state.actived.getMonth()).toBe(new Date().getMonth());

    pop.find('.zent-btn').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(
      formatDate(new Date(), 'YYYY-MM')
    );
    wrapper.unmount();
  });
});

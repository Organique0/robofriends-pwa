import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("corretly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });

  expect(wrapper.props().color).toEqual("red");
});

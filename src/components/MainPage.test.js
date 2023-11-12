import { shallow } from "enzyme";
import MainPage from "./MainPage";
import React from "react";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage component", () => {
  expect(wrapper).toMatchSnapshot();
});

it(
  ("filters the robots correctly",
  () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "XXXXXXXXXXXXXX",
        },
      ],
      searchField: "a",
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 3,
        name: "John",
        email: "XXXXXXXXXXXXXX",
      },
    ]);
  })
);

it(
  ("filters the robots correctly 2",
  () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "XXXXXXXXXXXXXX",
        },
      ],
      searchField: "a",
      isPending: false,
    };

    const filteredRobots = [];

    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual([]);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
  })
);

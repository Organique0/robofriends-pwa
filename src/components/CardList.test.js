import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";

it("expect to render CardList component", () => {
  const mockRobot = [
    {
      id: 1,
      name: "john snow",
      username: "johnSnow",
      email: "johnSnow@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobot} />)).toMatchSnapshot();
});

import React from "react";
import LaunchCard from "./index";

import { shallow } from "enzyme";
describe("App Component", () => {
  it("Should Passes UI Test", () => {
    const wrapper = shallow(<LaunchCard data="" />);
    expect(wrapper).toMatchSnapshot();
  });
});

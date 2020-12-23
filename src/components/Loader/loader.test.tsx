import React from "react";
import { shallow } from "enzyme";
import Loader from ".";

describe("Upcoming Missions", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Loader />)));

  it("should render   1 h1", () => {
    expect(container.find("h1").length).toEqual(1);
  });
  it("should render   value of 1 h1", () => {
    expect(container.find('h1').text()).toMatch(' App is Loading');
  });
});

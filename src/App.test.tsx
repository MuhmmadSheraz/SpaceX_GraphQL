import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App />)));

  it("should render   1 div", () => {
    expect(container.find("div").length).toEqual(1);
  });
});

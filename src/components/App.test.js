import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("should renders property", () => {
    expect(app).toMatchSnapshot();
  });

  it("should contains a connected Wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });

  it("should contains a connected Loot component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });

  it("should contains a link to the coindesk price page", () => {
    expect(app.find("a").props().href).toBe("https://www.coindesk.com/price");
  });
});

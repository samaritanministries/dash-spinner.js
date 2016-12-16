import {} from "dash_spinner/load.js";
import Spinner from "dash_spinner/spinner.js"
import Configuration from "dash_spinner/configuration.js"

describe("Importing the 'load' file", () => {

  it("sets the global DashSpinner.Spinner", () => {
    expect(DashSpinner.Spinner).toBeDefined()
  });

  it("loads the small configuration", () => {
    expect(DashSpinner.Configuration.small).toEqual({className: "small"})
  });

  it("loads the large configuration", () => {
    expect(DashSpinner.Configuration.large).toEqual({})
  });

});

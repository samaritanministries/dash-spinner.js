import SpinnerControlsView from "sample_app/spinner_controls_view.js"

describe("Showing the spinner", () => {

  it("starts and stops a spinner", () => {
    var spinnerControls = new SpinnerControlsView({
      spinnerTarget: $("<div>")
    })
    var spinner = spinnerControls.spinner
    spinnerControls.render()

    expect(spinner.isSpinning()).toBeFalsy()

    spinnerControls.startSpinner()

    expect(spinner.isSpinning()).toBeTruthy()

    spinnerControls.stopSpinner()

    expect(spinner.isSpinning()).toBeFalsy()
  })

  it("starts and stops a spinner on a button", () => {
    var spinnerControls = new SpinnerControlsView({
      buttonSpinnerTarget: $("<button>")
    })
    var spinner = spinnerControls.buttonSpinner
    spinnerControls.render()

    expect(spinner.isSpinning()).toBeFalsy()

    spinnerControls.$("[data-action=start-button-spinner]").click()

    expect(spinner.isSpinning()).toBeTruthy()

    spinnerControls.$("[data-action=stop-button-spinner]").click()

    expect(spinner.isSpinning()).toBeFalsy()
  })

})

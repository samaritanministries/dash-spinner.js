describe "Showing the spinner", ->

  it "starts and stops a spinner", ->
    setFixtures('<div data-id="spinner-controls"></div><div data-id="spinner-target"></div>')
    spinnerControls = new SampleApp.SpinnerControlsView
      spinnerTarget: $("[data-id=spinner-target]")
    spinner = spinnerControls.spinner
    spinnerControls.render()

    $("[data-id=spinner-controls]").html(spinnerControls.el)

    expect(spinner.isSpinning()).toBeFalsy()

    spinnerControls.startSpinner()

    expect(spinner.isSpinning()).toBeTruthy()

    spinnerControls.stopSpinner()

    expect(spinner.isSpinning()).toBeFalsy()

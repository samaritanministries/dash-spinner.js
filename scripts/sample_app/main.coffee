namespace("DashSpinner")

$ ->
  spinnerControls = new SampleApp.SpinnerControlsView
    buttonSpinnerTarget: $("[data-id=button-spinner-target]")
    spinnerTarget: $("[data-id=spinner-target]")
    spinnerConfiguration: DashSpinner.Configuration.large
  spinnerControls.render()

  $("[data-id=spinner-controls]").html(spinnerControls.el)

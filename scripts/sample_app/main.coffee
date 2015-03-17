namespace("DashSpinner")

$ ->
  spinnerControls = new SampleApp.SpinnerControlsView
    spinnerTarget: $("[data-id=spinner-target]")
    spinnerConfiguration: DashSpinner.Configuration.large
  spinnerControls.render()

  $("[data-id=spinner-controls]").html(spinnerControls.el)

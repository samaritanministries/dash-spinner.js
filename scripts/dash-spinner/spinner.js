namespace("DashSpinner")

class Spinner {

  constructor(options) {
    this.configuration = options.spinnerConfiguration
    this.target = options.target
  }

  isSpinning() {
    return this.target.hasClass("dash-spinner") || this.target.hasClass("has-spinner")
  }

  spin() {
    this.target.addClass(this.className())
    if (this.isButton())
      this.target.addClass("has-spinner")
    else
      this.target.addClass("dash-spinner")
    return this
  }

  stop() {
    this.target.removeClass(this.className())
      .removeClass("dash-spinner")
      .removeClass("has-spinner")
    return this
  }

  isButton() {
    return this.target.is("button, input[type=button]")
  }

  className() {
    if (this.configuration) {
      return this.configuration.className
    }
  }

}
DashSpinner.Spinner = Spinner

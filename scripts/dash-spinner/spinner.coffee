namespace("DashSpinner")

class DashSpinner.Spinner

  constructor: (options) ->
    @configuration = options.spinnerConfiguration
    @target = options.target

  isSpinning: ->
    @target.hasClass("dash-spinner") || @target.hasClass("has-spinner")

  spin: ->
    @target.addClass(@className())
    if @isButton()
      @target.addClass("has-spinner")
    else
      @target.addClass("dash-spinner")
    @

  stop: ->
    @target.removeClass(@className())
      .removeClass("dash-spinner")
      .removeClass("has-spinner")
    @

  isButton: ->
    @target.is("button, input[type=button]")

  className: ->
    @configuration?.className

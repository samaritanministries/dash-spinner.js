namespace("DashSpinner")

class DashSpinner.Spinner

  constructor: (options) ->
    @target = options.target
    @spinner = new window.Spinner(options.spinnerConfiguration)

  isSpinning: ->
    @target.children().length > 0

  spin: () ->
    @spinner.spin()
    if @target.is("button, input[type=button]")
      @target.css("color", "transparent")
    @target.append(@spinner.el)

  stop: ->
    @target.html("")

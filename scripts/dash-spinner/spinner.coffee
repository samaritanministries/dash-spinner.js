namespace("DashSpinner")

class DashSpinner.Spinner

  constructor: (options) ->
    @target = options.target
    @spinner = new window.Spinner(options.spinnerConfiguration)

  isSpinning: ->
    @target.children().length > 0

  spin: () ->
    @spinner.spin()
    if @isButton()
      @target.css("color", "transparent")
    @target.append(@spinner.el)

  isButton: ->
    @target.is("button, input[type=button]")

  stop: ->
    if @isButton()
      @target.css("color", "")
    @target.find(".spinner").remove()

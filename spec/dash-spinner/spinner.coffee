describe "DashSpinner.Spinner", ->

  beforeEach ->
    @target = $("<div></div>")

  buildSpinner = (options) ->
    new DashSpinner.Spinner
      target: options.target
      spinnerConfiguration: options.spinnerConfiguration

  describe "The initial state of the state", ->

    it "is not spinning", ->
      spinner = buildSpinner(target: @target)

      expect(spinner.isSpinning()).toBe(false)

  describe "Starting the spinner", ->

    it "adds a class to the given target", ->
      spinner = buildSpinner(target: @target)

      spinner.spin()

      expect(@target).toHaveClass("dash-spinner")

    it "adds the spinner size", ->
      spinner = buildSpinner
        spinnerConfiguration:
          className: "some-size"
        target: @target

      spinner.spin()

      expect(@target).toHaveClass("some-size")

    it "is spinning", ->
      spinner = buildSpinner(target: @target)

      spinner.spin()

      expect(spinner.isSpinning()).toBe(true)

    it "uses a different class for buttons", ->
      button = $("<button>")
      spinner = buildSpinner(target: button)

      spinner.spin()

      expect(button).toHaveClass("has-spinner")
      expect(spinner.isSpinning()).toBe(true)

    it "uses a different class for input[type=button]s", ->
      button = $("<input type=button>")
      spinner = buildSpinner(target: button)

      spinner.spin()

      expect(button).toHaveClass("has-spinner")
      expect(spinner.isSpinning()).toBe(true)

  describe "Stopping the spinner", ->

    it "stops spinning", ->
      spinner = buildSpinner(target: @target).spin()

      spinner.stop()

      expect(spinner.isSpinning()).toBe(false)

    it "stops spinning - button", ->
      spinner = buildSpinner(target: $("<button>")).spin()

      spinner.stop()

      expect(spinner.isSpinning()).toBe(false)

    it "removes the spinner size", ->
      spinner = buildSpinner
        spinnerConfiguration:
          className: "some-size"
        target: @target
      spinner.spin()

      spinner.stop()

      expect(@target).not.toHaveClass("some-size")

    it "does not remove preexisting classes when no class name is given", ->
      @target.addClass("my-original-class")
      spinner = buildSpinner(target: @target).spin()

      spinner.stop()

      expect(@target).toHaveClass("my-original-class")

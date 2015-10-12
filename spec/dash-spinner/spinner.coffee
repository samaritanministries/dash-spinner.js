describe "DashSpinner.Spinner", ->

  beforeEach ->
    setFixtures('<div data-id="spin-target" style="color:rgb(0, 0, 0);">Original Content</div>')
    @target = $("[data-id=spin-target]")

  buildSpinner = (options) ->
    new DashSpinner.Spinner
      target: options.target
      spinnerConfiguration: options.spinnerConfiguration

  describe "Starting the spinner", ->

    it "starts not spinning", ->
      spinner = buildSpinner(target: @target)

      expect(spinner.isSpinning()).toBeFalsy()

    it "starts the spinner", ->
      mockSpinner = new Mocks.Spinner()
      spyOn(window, "Spinner").and.returnValue(mockSpinner)

      spinner = buildSpinner(target: @target)

      spinner.spin()

      expect(@target.text()).toContain(mockSpinner.renderedContent)

    it "is spinning", ->
      spinner = buildSpinner(target: @target)

      spinner.spin()

      expect(spinner.isSpinning()).toBeTruthy()

    it "initializes the spinner with the given configuration", ->
      sampleConfiguration = foo: "bar"

      createSpinnerSpy = spyOn(window, "Spinner")

      spinner = buildSpinner
        spinnerConfiguration: sampleConfiguration

      expect(createSpinnerSpy).toHaveBeenCalledWith(sampleConfiguration)

    it "does not clear the original contents", ->
      spinner = new DashSpinner.Spinner
        target: @target
      spinner.spin()
      expect(@target.text()).toContain("Original Content")

    it "sets the color of the object to transparent for buttons and input[type=button]'s", ->
      setFixtures('<button style="color:rgba(10, 33, 100, .5);">Original Content</button>')
      button = $("button")
      spinner = buildSpinner
        target: button
      spinner.spin()
      expect(button.css("color")).toBe("rgba(0, 0, 0, 0)")

    it "does not modify the color for objects that aren't buttons", ->
      spinner = buildSpinner
        target: @target
      spinner.spin()
      expect(@target.css("color")).toBe("rgb(0, 0, 0)")

  describe "Stopping the spinner", ->

    it "stops spinning", ->
      spinner = buildSpinner(target: @target)

      spinner.spin()
      spinner.stop()

      expect(spinner.isSpinning()).toBeFalsy()

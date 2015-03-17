describe "DashSpinner.Spinner", ->

  beforeEach ->
    setFixtures('<div data-id="spin-target">Original Content</div>')
    @target = $("[data-id=spin-target]")

  spinner = (options) ->
    _spinner = new DashSpinner.Spinner
      target: options.target
      spinnerConfiguration: options.spinnerConfiguration

  describe "Starting the spinner", ->

    it "starts not spinning", ->
      _spinner = spinner(target: @target)

      expect(_spinner.isSpinning()).toBeFalsy()

    it "starts the spinner", ->
      mockSpinner = new Mocks.Spinner()
      spyOn(window, "Spinner").and.returnValue(mockSpinner)

      _spinner = spinner(target: @target)

      _spinner.spin()

      expect(@target.text()).toEqual(mockSpinner.renderedContent)

    it "is spinning", ->
      _spinner = spinner(target: @target)

      _spinner.spin()

      expect(_spinner.isSpinning()).toBeTruthy()

    it "initializes the spinner with the given configuration", ->
      sampleConfiguration = foo: "bar"

      createSpinnerSpy = spyOn(window, "Spinner")

      _spinner = spinner
        spinnerConfiguration: sampleConfiguration

      expect(createSpinnerSpy).toHaveBeenCalledWith(sampleConfiguration)


  describe "Stopping the spinner", ->

    it "stops spinning", ->
      _spinner = spinner(target: @target)

      _spinner.spin()
      _spinner.stop()

      expect(_spinner.isSpinning()).toBeFalsy()

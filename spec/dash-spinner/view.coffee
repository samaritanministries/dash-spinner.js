describe "DashSpinner.View", ->

  it "works", ->
    view = new DashSpinner.View()

    view.render()

    expect(view.$el).toContainText("Hello World")

namespace("DashSpinner")

class DashSpinner.View extends Backbone.View

  template: DashSpinnerJST['scripts/dash-spinner/template.ejs']

  render: ->
    @$el.html(@template())

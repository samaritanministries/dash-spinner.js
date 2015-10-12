namespace("Mocks")

class Mocks.Spinner

  el: "Don't forget to spin!"

  renderedContent: '<div class="spinner">Some data</div>'

  spin: (options) ->
    @el = @renderedContent
    @

namespace("Mocks")

class Mocks.Spinner

  el: "Don't forget to spin!"

  renderedContent: "Some data"

  spin: (options) ->
    @el = @renderedContent
    @

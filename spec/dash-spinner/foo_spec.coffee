import Baz from "dash_spinner/baz.js"

describe "Foo", ->
  it "imports Baz", ->
    expect(Baz).toEqual(baz: "123")

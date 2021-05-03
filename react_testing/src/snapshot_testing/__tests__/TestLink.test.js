import React from "react"
import renderer from "react-test-renderer"
import TestLink from "../TestLink"

test("Change className value on hover", () => {
    const componenent = renderer.create(<TestLink url={"https://google.com"}>Google</TestLink>)
    let tree = componenent.toJSON()
    expect(tree).toMatchSnapshot()

    tree.props.onMouseEnter()
    tree = componenent.toJSON()
    expect(tree).toMatchSnapshot()

    tree.props.onMouseLeave()
    tree = componenent.toJSON()
    expect(tree).toMatchSnapshot()
})
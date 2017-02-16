/* global describe, beforeEach, it */
import { renderComponent, expect } from '../test_helper'
import App from '../../app/containers/App'

describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('renders something', () => {
    expect(component).to.exist
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import About from './About'

describe('About', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<About />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Home from './Home'

describe('Home', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<Home />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

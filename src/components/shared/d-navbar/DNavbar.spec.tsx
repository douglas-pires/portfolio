import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import DNavbar from './DNavbar'

describe('DNavbar', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<DNavbar />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

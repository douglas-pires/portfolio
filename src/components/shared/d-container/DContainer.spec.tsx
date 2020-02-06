import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import DContainer from './DContainer'

describe('DContainer', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<DContainer />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

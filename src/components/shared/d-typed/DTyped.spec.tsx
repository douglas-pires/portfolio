import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import DTyped from './DTyped'

describe('DTyped', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<DTyped />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

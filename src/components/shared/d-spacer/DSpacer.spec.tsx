import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import DSpacer from './DSpacer'

describe('DSpacer', () => {
  let wrapper: ShallowWrapper
  beforeAll(() => {
    wrapper = shallow(<DSpacer />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import HomeHeader from './HomeHeader'

describe('HomeHeader', () => {
  let wrapper: ShallowWrapper
  beforeAll(async () => {
    wrapper = shallow(<HomeHeader />)
  })

  it('should render DTyped', () => {
    expect(wrapper.exists()).toBe(true)
  })
})

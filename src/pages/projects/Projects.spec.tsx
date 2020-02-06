import React from 'react'
import { mount, CommonWrapper } from 'enzyme'
import Projects from './Projects'

describe('Projects', () => {
  let wrapper: CommonWrapper
  beforeAll(() => {
    wrapper = mount(<Projects />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})

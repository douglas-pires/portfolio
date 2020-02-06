import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import DPortrait from './DPortrait'

describe('DPortrait', () => {
  let wrapper: ShallowWrapper
  const src = 'some-src'
  const title = 'some-title'

  beforeAll(() => {
    wrapper = shallow(<DPortrait src={src} title={title} />)
  })
  it('should render properly', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
  it('test properties', () => {
    expect(wrapper.find('.d-portrait__image').prop('src')).toBe(src)
    expect(wrapper.find('.d-portrait__overlay').html()).toContain(title)
  })
})

import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import HomeBody, { skills, contacts } from './HomeBody'

describe('HomeBody', () => {
  let wrapper: ShallowWrapper
  beforeAll(async () => {
    wrapper = shallow(<HomeBody />)
  })
  it('should list skills', () => {
    expect(wrapper.find('.home-body__skills').length).toBe(skills.length)
  })

  it('should list contacts', () => {
    expect(wrapper.find('.home-body__contacts').length).toBe(contacts.length)
  })
})

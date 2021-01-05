import { mount } from '@vue/test-utils'
import Hero from '~/components/Hero'

describe('Hero component', () => {
  const SLOT_COMPONENT = '<p>Título de pruebas</p>'

  const wrapper = mount(Hero, {
    slots: {
        header: SLOT_COMPONENT
      }
  })
  
  test('is render inside slot', () => {
    expect(wrapper.html()).toContain(SLOT_COMPONENT)
  })
})
import React from 'react'
import { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'

export default {
  title: 'Example/Button',
  component: Button,
} as Meta

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
)

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

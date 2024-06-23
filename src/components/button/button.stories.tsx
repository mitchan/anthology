import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
    },
    variant: {
      control: 'select',
    },
  },
  component: Button,
  title: 'Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
};

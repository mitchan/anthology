import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { TaskListProvider } from './task-list-context';

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  decorators: [
    (Story, context) => {
      return (
        <TaskListProvider tasks={context.loaded.tasks}>
          <Story />;
        </TaskListProvider>
      );
    },
  ],
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      );
      return { tasks };
    },
  ],
  title: 'Components/TaskList',
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {},
};

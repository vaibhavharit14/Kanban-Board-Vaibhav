import type { Meta, StoryObj } from '@storybook/react';
import KanbanColumn from './KanbanColumn';
import { sampleColumns, sampleTasks } from './sampleData';

const column = sampleColumns[0];
const tasks = column.taskIds.map((id) => sampleTasks[id]).filter(Boolean);

const meta: Meta<typeof KanbanColumn> = {
  title: 'Components/Column', // ✅ Clean sidebar name
  component: KanbanColumn,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KanbanColumn>;

export const Todo: Story = {
  args: {
    column,
    tasks,
    onTaskMove: () => console.log('Task moved'),
    onTaskCreate: () => console.log('Task created'),
    onTaskUpdate: () => console.log('Task updated'),
    onTaskDelete: () => console.log('Task deleted'),
  },
};
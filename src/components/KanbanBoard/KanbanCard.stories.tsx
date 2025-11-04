import type { Meta, StoryObj } from '@storybook/react';
import KanbanCard from './KanbanCard';
import { sampleTasks } from './sampleData';

const meta: Meta<typeof KanbanCard> = {
  title: 'Components/Card', // ✅ Clean sidebar name
  component: KanbanCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof KanbanCard>;

export const Default: Story = {
  args: {
    task: sampleTasks['t1'],
    onEdit: () => console.log('Edit clicked'),
    onDelete: () => console.log('Delete clicked'),
  },
};
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Meta, StoryObj } from '@storybook/react';
import KanbanCard from './KanbanCard';
import { sampleTasks } from './sampleData';

const meta: Meta<typeof KanbanCard> = {
  title: 'Components/Card',
  component: KanbanCard,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <div style={{ padding: '1rem', maxWidth: 320 }}>
          <Story />
        </div>
      </DndProvider>
    ),
  ],
  parameters: {
    docs: {
      disable: true, // Prevents Docs tab from rendering without DndProvider
    },
  },
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
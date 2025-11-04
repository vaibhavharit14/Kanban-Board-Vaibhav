import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Meta, StoryObj } from '@storybook/react';
import KanbanBoard from './KanbanBoard';
import { sampleColumns, sampleTasks } from './sampleData';

const meta: Meta<typeof KanbanBoard> = {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KanbanBoard>;

export const Default: Story = {
  render: () => (
    <KanbanBoard
      columns={sampleColumns}
      tasks={sampleTasks}
      onTaskMove={() => {}}
      onTaskCreate={() => {}}
      onTaskUpdate={() => {}}
      onTaskDelete={() => {}}
    />
  ),
};
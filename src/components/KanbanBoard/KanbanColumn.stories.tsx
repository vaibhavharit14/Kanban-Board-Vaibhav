import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import type { Meta, StoryObj } from '@storybook/react';
import KanbanColumn from './KanbanColumn';
import { sampleColumns, sampleTasks } from './sampleData';

const meta: Meta<typeof KanbanColumn> = {
  title: 'Components/KanbanColumn',
  component: KanbanColumn,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KanbanColumn>;

export const Default: Story = {
  render: () => (
    <KanbanColumn
      column={sampleColumns[0]}
      tasks={Object.values(sampleTasks).filter((t) => t.status === sampleColumns[0].id)}
      onTaskMove={() => {}}
      onTaskCreate={() => {}}
      onTaskUpdate={() => {}}
      onTaskDelete={() => {}}
    />
  ),
};
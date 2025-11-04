import React from 'react';
import KanbanColumn from './KanbanColumn';
import type { KanbanViewProps } from './KanbanBoard.types';

const KanbanBoard: React.FC<KanbanViewProps> = ({
  columns,
  tasks,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
}) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 py-2">
      {columns.map((column) => {
        const columnTasks = column.taskIds
          .map((taskId) => tasks[taskId])
          .filter(Boolean);

        return (
          <KanbanColumn
            key={column.id}
            column={column}
            tasks={columnTasks}
            onTaskMove={onTaskMove}
            onTaskCreate={onTaskCreate}
            onTaskUpdate={onTaskUpdate}
            onTaskDelete={onTaskDelete}
          />
        );
      })}
    </div>
  );
};

export default KanbanBoard;
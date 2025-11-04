import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import KanbanCard from './KanbanCard';
import type { KanbanColumn, KanbanTask, KanbanViewProps } from './KanbanBoard.types';

interface Props {
  column: KanbanColumn;
  tasks: KanbanTask[];
  onTaskMove: KanbanViewProps['onTaskMove'];
  onTaskCreate: KanbanViewProps['onTaskCreate'];
  onTaskUpdate: KanbanViewProps['onTaskUpdate'];
  onTaskDelete: KanbanViewProps['onTaskDelete'];
}

const KanbanColumn: React.FC<Props> = ({
  column,
  tasks,
  onTaskMove,
  onTaskCreate,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop<{ id: string; status: string }, void, unknown>({
    accept: 'KANBAN_TASK',
    drop: (item) => {
      if (item.status !== column.id) {
        onTaskMove(item.id, item.status, column.id, tasks.length);
      }
    },
  });

  drop(ref); // Attach drop behavior to the ref

  return (
    <div
      ref={ref}
      className="min-w-[280px] max-w-[320px] bg-neutral-50 rounded-xl p-4 shadow-sm"
    >
      <div className="font-semibold text-neutral-900 mb-2">
        {column.title} ({tasks.length})
      </div>
      <div className="flex flex-col gap-2">
        {tasks.length === 0 ? (
          <div className="text-sm text-neutral-500 italic">No tasks</div>
        ) : (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              onEdit={(t) => onTaskUpdate(t.id, t)}
              onDelete={() => onTaskDelete(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
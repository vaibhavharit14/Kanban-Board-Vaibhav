import React, { useRef } from 'react';
import type { KanbanTask } from './KanbanBoard.types';
import { useDrag } from 'react-dnd';

interface Props {
  task: KanbanTask;
  onEdit: (task: KanbanTask) => void;
  onDelete: (taskId: string) => void;
}

const KanbanCard: React.FC<Props> = ({ task, onEdit, onDelete }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'KANBAN_TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref); // Attach drag behavior to the ref

  return (
    <div
      ref={ref}
      className={`bg-white border rounded-lg p-3 shadow-sm cursor-grab ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="flex justify-between mb-2">
        <h4 className="font-medium text-sm">{task.title}</h4>
        {task.priority && (
          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700">
            {task.priority}
          </span>
        )}
      </div>
      {task.description && (
        <p className="text-xs text-neutral-600 mb-2">{task.description}</p>
      )}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onEdit(task)}
          className="text-xs text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-xs text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;
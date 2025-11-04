import React, { useState } from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import { sampleColumns, sampleTasks } from './components/KanbanBoard/sampleData';
import type { KanbanColumn, KanbanTask } from './components/KanbanBoard/KanbanBoard.types';

const App: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumn[]>(sampleColumns);
  const [tasks, setTasks] = useState<Record<string, KanbanTask>>(sampleTasks);

  const handleTaskMove = (
    taskId: string,
    fromColumn: string,
    toColumn: string,
    newIndex: number
  ) => {
    const updatedTask = { ...tasks[taskId], status: toColumn };
    const updatedTasks = { ...tasks, [taskId]: updatedTask };

    const newColumns = columns.map((col) => {
      if (col.id === fromColumn) {
        return { ...col, taskIds: col.taskIds.filter((id) => id !== taskId) };
      }
      if (col.id === toColumn) {
        const newTaskIds = [...col.taskIds];
        newTaskIds.splice(newIndex, 0, taskId);
        return { ...col, taskIds: newTaskIds };
      }
      return col;
    });

    setTasks(updatedTasks);
    setColumns(newColumns);
  };

  const handleTaskCreate = (columnId: string, task: KanbanTask) => {
    setTasks((prev) => ({ ...prev, [task.id]: task }));
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, taskIds: [...col.taskIds, task.id] } : col
      )
    );
  };

  const handleTaskUpdate = (taskId: string, updates: Partial<KanbanTask>) => {
    setTasks((prev) => ({
      ...prev,
      [taskId]: { ...prev[taskId], ...updates },
    }));
  };

  const handleTaskDelete = (taskId: string) => {
    const updatedTasks = { ...tasks };
    delete updatedTasks[taskId];

    const updatedColumns = columns.map((col) => ({
      ...col,
      taskIds: col.taskIds.filter((id) => id !== taskId),
    }));

    setTasks(updatedTasks);
    setColumns(updatedColumns);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <KanbanBoard
        columns={columns}
        tasks={tasks}
        onTaskMove={handleTaskMove}
        onTaskCreate={handleTaskCreate}
        onTaskUpdate={handleTaskUpdate}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
import type { KanbanColumn, KanbanTask } from './KanbanBoard.types';

export const sampleTasks: Record<string, KanbanTask> = {
  t1: {
    id: 't1',
    title: 'Design login page',
    description: 'Create responsive login UI',
    status: 'todo',
    priority: 'high',
    assignee: 'Vaibhav',
    tags: ['UI', 'auth'],
    createdAt: new Date(),
  },
  t2: {
    id: 't2',
    title: 'Setup Firebase',
    status: 'inprogress',
    priority: 'medium',
    assignee: 'Amit',
    tags: ['backend'],
    createdAt: new Date(),
  },
};

export const sampleColumns: KanbanColumn[] = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#fef3c7',
    taskIds: ['t1'],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    color: '#bfdbfe',
    taskIds: ['t2'],
  },
  {
    id: 'done',
    title: 'Done',
    color: '#d1fae5',
    taskIds: [],
  },
];
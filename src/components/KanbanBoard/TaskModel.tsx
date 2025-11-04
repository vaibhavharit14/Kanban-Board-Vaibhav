import React, { useState } from 'react';
import { KanbanTask } from './KanbanBoard.types';

interface TaskModalProps {
  task: KanbanTask;
  onClose: () => void;
  onUpdate: (updates: Partial<KanbanTask>) => void;
  onDelete: () => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ task, onClose, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || '');
  const [priority, setPriority] = useState(task.priority || 'medium');
  const [assignee, setAssignee] = useState(task.assignee || '');
  const [tags, setTags] = useState(task.tags?.join(', ') || '');
  const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.toISOString().split('T')[0] : '');

  const handleSave = () => {
    onUpdate({
      title,
      description,
      priority,
      assignee,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        <h2 id="modal-title" className="text-lg font-semibold mb-2">Edit Task</h2>
        <div id="modal-description" className="text-sm text-neutral-600 mb-4">
          Update task details below
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          />

          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          />

          <select
            value={priority}
            onChange={e => setPriority(e.target.value as KanbanTask['priority'])}
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="urgent">Urgent</option>
          </select>

          <input
            type="text"
            value={assignee}
            onChange={e => setAssignee(e.target.value)}
            placeholder="Assignee"
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          />

          <input
            type="text"
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          />

          <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
            className="w-full border border-neutral-300 rounded px-3 py-2 text-sm"
          />
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button onClick={onDelete} className="text-red-600 text-sm">Delete</button>
          <button onClick={onClose} className="text-neutral-600 text-sm">Cancel</button>
          <button onClick={handleSave} className="bg-primary-500 text-white px-4 py-2 rounded text-sm">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
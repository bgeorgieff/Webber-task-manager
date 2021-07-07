const initialData = {
  tasks: {
    'task-1': { id: 'task_1', content: 'random 1'},
    'task-2': { id: 'task_2', content: 'random 2'},
    'task-3': { id: 'task_3', content: 'random 3'},
    'task-4': { id: 'task_4', content: 'random 4'},
  },
  columns: {
    'column-1': {
      id: 'column_1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
}

export default initialData
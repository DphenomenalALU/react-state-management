export interface Task {
  id: number
  text: string
}

export type TaskState = Task[]

export type TaskAction =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }

let nextTaskId = 1

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'add':
      return [...state, { id: nextTaskId++, text: action.payload }]
    case 'remove':
      return state.filter((task) => task.id !== action.payload)
    default:
      return state
  }
}

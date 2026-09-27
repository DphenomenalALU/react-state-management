import { FormEvent, useReducer, useState } from 'react'
import { taskReducer } from '../reducers/taskReducer'
import styles from './TaskManager.module.css'

export function TaskManager() {
  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [draft, setDraft] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()

    if (!text) return

    dispatch({ type: 'add', payload: text })
    setDraft('')
  }

  return (
    <section className={styles.card} aria-labelledby="task-heading">
      <div className={styles.headingRow}>
        <div>
          <p className={styles.kicker}>useReducer example</p>
          <h2 id="task-heading">Today&apos;s tasks</h2>
        </div>
        <span className={styles.count} aria-label={`${tasks.length} tasks`}>
          {tasks.length}
        </span>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="task-input">Add a task</label>
        <div className={styles.inputRow}>
          <input
            id="task-input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="e.g. Review React hooks"
            type="text"
          />
          <button type="submit" disabled={!draft.trim()}>
            Add task
          </button>
        </div>
      </form>

      {tasks.length === 0 ? (
        <p className={styles.emptyState}>Your task list is clear. Add your first task above.</p>
      ) : (
        <ul className={styles.taskList} aria-label="Task list">
          {tasks.map((task) => (
            <li className={styles.taskItem} key={task.id}>
              <span>{task.text}</span>
              <button
                className={styles.removeButton}
                type="button"
                onClick={() => dispatch({ type: 'remove', payload: task.id })}
                aria-label={`Remove ${task.text}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

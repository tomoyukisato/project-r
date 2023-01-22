import React from 'react';
import PropTypes from 'prop-types';

interface Task {
  id: number;
  title: string;
  state: string;
  updatedAt: Date;
  onArchiveTask(id:number): () => void;
  onPinTask(id:number): () => void;
}
export default function Task( {id, title, state, onArchiveTask, onPinTask}: Task) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input type="text"
        disabled={true}
        name="checked"
        id={`archiveTask-${id}`}
        checked={`${state}` === "TASK_ARCHIVED"} 
        />
        <span 
          className='checkbox-custom'
          onClick={()=> onArchiveTask(id)}
        />
      </label>
      <label htmlFor="title" aria-label={title}>
        <input type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder='Input title' 
          />
      </label>
      {`${state}` !== "TASK_ARCHIVED" && (
        <button
          className='pin-button'
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTaid}`}
        >
          <span className={`icon-star`}/>
        </button>
      )}
    </div>
  );
}

Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};

import { useState } from 'react';
import { format } from 'date-fns';

export default function TaskField({ tasks, selectedDateRange }) {
  // TODO: handleOnChange実装
  const handleOnChange = () => {};
  const targetTasks = tasks.filter(
    (task) =>
      (format(task.start_date, 'yyyy-MM-dd') === selectedDateRange.start) &
      (format(task.end_date, 'yyyy-MM-dd') === selectedDateRange.end)
  );

  return (
    <>
      <div className="task-field">
        {targetTasks.length ? <p className="task_header">tasks</p> : ''}
        {targetTasks.length
          ? targetTasks.map((targetTask) => (
              <form key={targetTask.task_id}>
                <input
                  className="task_textbox"
                  type="text"
                  value={targetTask.task_name}
                  onChange={handleOnChange}
                />
                <button className="task_apply_btn">apply</button>
              </form>
            ))
          : ''}
      </div>
    </>
  );
}

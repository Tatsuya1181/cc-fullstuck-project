import { useState } from 'react';

export default function TaskField() {
  return (
    <div className="task-field">
      <p>tasks</p>
      <form>
        <input className="task_textbox" type="text" />
        <button className="task_apply_btn">apply</button>
      </form>
    </div>
  );
}

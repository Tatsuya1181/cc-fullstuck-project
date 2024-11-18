import { useState } from 'react';

export default function GoalField() {
  const [isGoalSettingMode, setGoalSettingMode] = useState(false);

  const handleOnClick = (bool) => {
    setGoalSettingMode(bool);
  };

  return (
    <div className="goal-field">
      {isGoalSettingMode ? (
        <form>
          <input className="goal_textbox" />
          <button
            className="goal_save_btn"
            onClick={() => handleOnClick(false)}
          >
            save
          </button>
        </form>
      ) : (
        <>
          <ul className="goal-list">
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
          <button className="add-goal" onClick={() => handleOnClick(true)}>
            +
          </button>
        </>
      )}
    </div>
  );
}

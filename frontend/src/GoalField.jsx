import { useState } from 'react';
import { format } from 'date-fns';

export default function GoalField({
  fields,
  goals,
  currentView,
  selectedDateRange,
}) {
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
          <ul className="goal_list">
            {goals.length
              ? goals
                  .filter(
                    (goal) =>
                      (goal.goal_type === currentView) &
                      (format(goal.start_date, 'yyyy-MM-dd') ===
                        selectedDateRange.start) &
                      (format(goal.end_date, 'yyyy-MM-dd') ===
                        selectedDateRange.end)
                  )
                  .map((goal) => {
                    const field = fields.find(
                      (f) => f.field_id === goal.field_id
                    );
                    return (
                      <li key={goal.goal_id}>
                        {' '}
                        {field ? ` 【${field.field_name}】` : ''}{' '}
                        {goal.goal_name}
                      </li>
                    );
                  })
              : ''}
          </ul>
          <button className="add-goal" onClick={() => handleOnClick(true)}>
            +
          </button>
        </>
      )}
    </div>
  );
}

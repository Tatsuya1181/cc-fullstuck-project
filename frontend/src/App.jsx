import { useEffect, useState } from 'react';
import axios from 'axios';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ja } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import GoalField from './GoalField';
import TaskField from './TaskField';
import NoteField from './NoteField';
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.

const baseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState();
  const [selectedDateRange, setSelectedDateRange] = useState({});
  const [currentView, setCurrentView] = useState('week');

  // 接続確認
  const [fields, setFields] = useState([]);
  useEffect(() => {
    try {
      const fetchFields = async () => {
        const res = await axios.get(`${baseUrl}/field`);
        setFields(res.data);
      };
      fetchFields();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     const fetchGoals = async () => {
  //       const res = await axios.get(`${baseUrl}/goal`);
  //       setFields(res.data);
  //       // console.log(res.data);
  //     };
  //     fetchGoals();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   try {
  //     const fetchTasks = async () => {
  //       const res = await axios.get(`${baseUrl}/task`);
  //       setFields(res.data);
  //       // console.log(res.data);
  //     };
  //     fetchTasks();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  // useEffect(() => {
  //   try {
  //     const fetchTasks = async () => {
  //       const res = await axios.get(`${baseUrl}/note`);
  //       setFields(res.data);
  //       // console.log(res.data);
  //     };
  //     fetchTasks();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  useEffect(() => {
    console.log(selectedDateRange);
  }, [selectedDateRange]);

  //FIXME: monthタブで特定日付を選択したときに、想定挙動にならない。一回前に指定したdate→遷移前のmonthという状態遷移になってしまう。
  const handleRangeChange = (range) => {
    if (Array.isArray(range) && range.length === 1) {
      // console.log('day');
      setSelectedDateRange({ start: range[0], end: range[0] });
    } else if (Array.isArray(range) && range.length !== 1) {
      // console.log('week');
      setSelectedDateRange({ start: range[0], end: range[range.length - 1] });
    } else if (range && range.start && range.end) {
      // console.log('month');
      setSelectedDateRange({ start: range.start, end: range.end });
    }
  };

  const locales = {
    ja: ja,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: '会議',
      start: new Date(2024, 10, 14, 10, 0), // 年, 月(0-based), 日, 時, 分
      end: new Date(2024, 10, 14, 12, 0),
    },
    {
      title: 'ランチミーティング',
      start: new Date(2024, 10, 15, 13, 0),
      end: new Date(2024, 10, 15, 14, 0),
    },
  ];

  return (
    <>
      <div className="App">
        <GoalField></GoalField>
        <Calendar
          date={date}
          view={currentView}
          localizer={localizer}
          defaultView="week"
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onNavigate={setDate}
          onView={setCurrentView}
          onRangeChange={handleRangeChange}
          style={{ height: 500, margin: '50px' }}
        />
        {(currentView === 'week') | (currentView === 'day') ? (
          <TaskField></TaskField>
        ) : (
          <></>
        )}
        {currentView === 'day' ? <NoteField></NoteField> : <></>}
      </div>
    </>
  );
}

export default App;

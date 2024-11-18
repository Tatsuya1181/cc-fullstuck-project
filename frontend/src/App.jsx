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
  const [selectedDateRange, setSelectedDateRange] = useState({
    start: null,
    end: null,
  });
  const [currentView, setCurrentView] = useState('week');

  // 接続確認
  const [fields, setFields] = useState([]);
  useEffect(() => {
    try {
      const fetchFields = async () => {
        const res = await axios.get(`${baseUrl}/field`);
        setFields(res.data);
        // console.log(res.data);
      };
      fetchFields();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchGoals = async () => {
        const res = await axios.get(`${baseUrl}/goal`);
        setGoals(res.data);
        // console.log(res.data);
      };
      fetchGoals();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchTasks = async () => {
        const res = await axios.get(`${baseUrl}/task`);
        setTasks(res.data);
        console.log(res.data);
      };
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchNotes = async () => {
        const res = await axios.get(`${baseUrl}/note`);
        setNotes(res.data);
        // console.log(res.data);
      };
      fetchNotes();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // useEffect(() => {
  //   console.log(selectedDateRange);
  // }, [selectedDateRange]);

  // FIXME: 初期表示時に呼び出されない。。。
  const handleRangeChange = (range) => {
    if (Array.isArray(range) && range.length === 1) {
      // console.log('day');
      setSelectedDateRange({
        start: format(range[0], 'yyyy-MM-dd'), // TODO: formatが繰り返し出現しているので要リファクタリング
        end: format(range[0], 'yyyy-MM-dd'),
      });
    } else if (Array.isArray(range) && range.length !== 1) {
      // console.log('week');
      setSelectedDateRange({
        start: format(range[0], 'yyyy-MM-dd'),
        end: format(range[range.length - 1], 'yyyy-MM-dd'),
      });
    } else if (range && range.start && range.end) {
      // console.log('month');
      setSelectedDateRange({
        start: format(range.start, 'yyyy-MM-dd'),
        end: format(range.end, 'yyyy-MM-dd'),
      });
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

  const events = [];

  // const events = [
  //   {
  //     title: '会議',
  //     start: new Date(2024, 10, 14, 10, 0), // 年, 月(0-based), 日, 時, 分
  //     end: new Date(2024, 10, 14, 12, 0),
  //   },
  //   {
  //     title: 'ランチミーティング',
  //     start: new Date(2024, 10, 15, 13, 0),
  //     end: new Date(2024, 10, 15, 14, 0),
  //   },
  // ];

  return (
    <>
      <div className="App">
        <GoalField
          fields={fields}
          goals={goals}
          currentView={currentView}
          selectedDateRange={selectedDateRange}
        ></GoalField>
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
          <TaskField
            tasks={tasks}
            selectedDateRange={selectedDateRange}
          ></TaskField>
        ) : (
          <></>
        )}
        {currentView === 'day' ? (
          <NoteField
            notes={notes}
            selectedDateRange={selectedDateRange}
          ></NoteField>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;

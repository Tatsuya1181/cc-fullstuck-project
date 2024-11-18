import { useState } from 'react';
import { format } from 'date-fns';

export default function NoteField({ notes, selectedDateRange }) {
  // TODO: handleOnChange実装
  const handleOnChange = () => {};
  const targetNote = notes.filter(
    (note) =>
      (format(note.date, 'yyyy-MM-dd') === selectedDateRange.start) &
      (format(note.date, 'yyyy-MM-dd') === selectedDateRange.end)
  );

  return (
    <div className="note-field">
      {targetNote.length ? <p className="note_header">note</p> : ''}
      {targetNote.length ? (
        <form key={targetNote[0].date}>
          <input
            className="note_textbox"
            type="text"
            value={targetNote[0].note_text}
            onChange={handleOnChange}
          />
          <button className="note_save_btn">save</button>
        </form>
      ) : (
        ''
      )}
    </div>
  );
}

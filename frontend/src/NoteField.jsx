import { useState } from 'react';

export default function NoteField() {
  return (
    <div className="note-field">
      <p>note</p>
      <form>
        <input className="note_textbox" type="text" />
        <button className="note_save_btn">save</button>
      </form>
    </div>
  );
}

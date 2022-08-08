export interface NoteList {
  id: string;
  title: string;
  date: string;
  body: string;
}

export const noteList = JSON.parse(localStorage.getItem('notes')) || [];

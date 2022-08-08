import { Component, OnInit } from '@angular/core';

import { NoteList, noteList } from '../note-list';

@Component({
  selector: 'note-search',
  templateUrl: './note-search.component.html',
  styleUrls: ['./note-search.component.css'],
})
export class NoteSearchComponent implements OnInit {
  constructor() {}

  noteList = noteList;
  searchTerm = '';

  delete(id) {
    const note = this.noteList.find((note) => note.id === id);
    let index = this.noteList.indexOf(note);
    if (
      confirm(
        'Are you sure you want to delete your note, "' + note.title + '"?'
      )
    ) {
      this.noteList.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(this.noteList));
    }
  }

  search() {
    let value = (document.getElementById('searchTerm') as HTMLInputElement)
      .value;
    this.noteList = noteList.filter((note) =>
      note.title
        .toLowerCase()
        .split(' ')
        .join('')
        .includes(value.toLowerCase().split(' ').join(''))
    );
  }

  sort() {
    let dropdownValue = (
      document.getElementById('sort-notes') as HTMLSelectElement
    ).value;

    if (dropdownValue === 'date-new') {
      this.noteList.sort((a, b) => b.date.localeCompare(a.date));
    }
    if (dropdownValue === 'date-old') {
      this.noteList.sort((a, b) => a.date.localeCompare(b.date));
    }
    if (dropdownValue === 'aToZ') {
      this.noteList.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (dropdownValue === 'zToA') {
      this.noteList.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  ngOnInit() {
    console.log(this.noteList);
  }
}

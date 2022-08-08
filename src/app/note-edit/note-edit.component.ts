import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NoteList, noteList } from '../note-list';

@Component({
  selector: 'note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css'],
})
export class NoteEditComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  note: NoteList | undefined;

  noteList = noteList;

  editForm = this.formBuilder.group({
    id: '',
    title: '',
    date: '',
    body: '',
  });

  editNote() {
    let index = noteList.indexOf(this.note);
    noteList[index].title = this.editForm.value.title;
    noteList[index].date = this.editForm.value.date;
    noteList[index].body = this.editForm.value.body;
    localStorage.setItem('notes', JSON.stringify(noteList));

    document.getElementById('save-check-mark').className += ' save-clicked';
    console.warn('Your note has been saved', this.editForm.value.title);
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const noteIdFromRoute = routeParams.get('noteId');

    this.note = noteList.find((note) => note.id === noteIdFromRoute);
    this.editForm = this.formBuilder.group({
      id: this.note.id,
      title: this.note.title,
      date: this.note.date,
      body: this.note.body,
    });
  }
  SendDataonChange(event: any) {
    console.log(event.target.value);
  }
}

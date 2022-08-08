import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { noteList } from '../note-list';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
})
export class NoteCreateComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  noteForm = this.formBuilder.group({
    id: '',
    title: '',
    date: '',
    body: '',
  });

  addNote(): void {
    // Process checkout data here
    this.noteForm.value.id =
      this.noteForm.value.title + Math.floor(Math.random() * 1000).toString(10);
    if (this.noteForm.value.title) {
      noteList.push(this.noteForm.value);
    }

    localStorage.setItem('notes', JSON.stringify(noteList));
    document.getElementById('save-check-mark').className += ' save-clicked';
    console.warn('Your note has been saved', this.noteForm.value.title);
  }

  ngOnInit() {}
  SendDataonChange(event: any) {
    console.log(event.target.value);
  }
}

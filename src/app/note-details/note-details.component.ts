import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NoteList, noteList } from '../note-list';

@Component({
  selector: 'note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css'],
})
export class NoteDetailsComponent implements OnInit {
  note: NoteList | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const noteIdFromRoute = routeParams.get('noteId');

    this.note = noteList.find((note) => note.id === noteIdFromRoute);
  }
}

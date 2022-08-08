import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteSearchComponent } from './note-search/note-search.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: NoteCreateComponent },
      { path: 'notes', component: NoteSearchComponent },
      { path: 'notes/:noteId', component: NoteDetailsComponent },
      { path: 'notes/:noteId/edit', component: NoteEditComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    NoteCreateComponent,
    NoteSearchComponent,
    NoteDetailsComponent,
    NoteEditComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos:[];

  receiveTodos($event) {
    this.todos = $event;
  }

  deleteAll() {
    delete(this.todos);
    localStorage.removeItem('todos');
  }

  ngOnInit() {
    const localStorageItems = JSON.parse(localStorage.getItem('todos')) || null;
    this.todos = localStorageItems;
  }
}

import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/_services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private todosService: TodosService) {}


  todos:[];

  receiveTodos($event) {
    this.todos = $event;
  }

  ngOnInit() {
    const localStorageItems = JSON.parse(localStorage.getItem('todos')) || null;
    this.todos = localStorageItems;
  }
}

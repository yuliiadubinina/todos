import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  todos: string[] = [];
  todo: string;
  name: '';

  constructor() { }  

  @Output() messageEvent = new EventEmitter<any>();

  @ViewChild('text') text: ElementRef;

  sendMessage() {
    this.todo = this.text.nativeElement.value;
    this.todos.push(this.todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.messageEvent.emit(this.todos);
    this.text.nativeElement.value = '';
  }

  ngOnInit() {
  }

}

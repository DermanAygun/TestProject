import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
      .subscribe(item => {
        this.toDoListArray = [];
        item.forEach(element => {
          var x = element.payload.toJSON();
          x["$key"] = element.key;
          this.toDoListArray.push(x);
        })

        this.user_data = new FormGroup({
          title: new FormControl('itemTitle', Validators.required)
        });

        //sort array isChecked -> true
        this.toDoListArray.sort((a,b) => {
          return a.isChecked - b.isChecked;
        })

      });
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string,isChecked) {
    this.toDoService.checkOrUncheckTitle($key,!isChecked);
  }

  onDelete($key : string) {
    this.toDoService.removeTitle($key);
  }

  enterKey(event, itemTitle) {
    if(event.keyCode == 13) {
      this.toDoService.addTitle(itemTitle.value);
      itemTitle.value = null;
    }
  }

}

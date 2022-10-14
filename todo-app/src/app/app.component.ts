import { Component } from '@angular/core';

class todoTask{
  constructor(
    public description: string,
    public assignedTo: string,
    public done = false,
  ){}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public persons = ['All', 'Luca', 'Lotta', 'Florian', 'Elias'];

  public selectedState = 'All';
  public selectedPerson = 'All';

  public updateListState(): void {
    this.returnListState = this.todoList.filter(
      (task) => task.done == this.toBool(this.selectedState)
    );
  }

  public updateListPerson(): void {
    this.returnListName = this.todoList.filter(
      (task) => task.assignedTo == this.selectedPerson
    );
  }

  public listToReturn(): todoTask[] {
    if (this.selectedState === 'All' && this.selectedPerson === 'All') {
      return this.todoList;
    } else if (this.selectedState === 'All') {
      return this.returnListName;
    } else if(this.selectedPerson === 'All'){
      return this.returnListState;
    }else{
      return this.returnListState.filter(
        (task) => task.assignedTo == this.selectedPerson
      );;
    }
  }

  public todoList: todoTask[] = [
    new todoTask('Undone Assignment', 'Luca'),
    new todoTask('Undone Assignment', 'Lotta'),
    new todoTask('Undone Assignment', 'Florian'),
    new todoTask('Undone Assignment', 'Elias'),
    new todoTask('Finish Assignment', 'Elias', true),
    new todoTask('Finish Assignment', 'Luca', true),
    new todoTask('Finish Assignment', 'Florian', true),
    new todoTask('Finish Assignment', 'Lotta', true),
  ];

  public returnListState: todoTask[] = this.todoList.filter(
    (task) => task.done == this.toBool(this.selectedState)
  );

  public returnListName: todoTask[] = this.todoList.filter(
    (task) => task.assignedTo == this.selectedPerson
  );

  private toBool(value: string): boolean {
    if (value === 'Done') {
      return true;
    } else {
      return false;
    }
  }
}

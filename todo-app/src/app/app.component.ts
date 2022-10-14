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
  public persons = ['All', 'Luca', 'Lotta'];

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
    } else if (this.selectedPerson === 'All') {
      return this.returnListState;
    } else {
      return this.returnListState.filter(
        (task) => task.assignedTo == this.selectedPerson
      );
    }
  }

  public todoList: todoTask[] = [
    new todoTask('Angular Assignment', 'Luca'),
    new todoTask('Kotlin Assignment', 'Luca'),
    new todoTask('Java Assignment', 'Luca'),
    new todoTask('C# Assignment', 'Luca'),
    new todoTask('Angular Assignment', 'Lotta'),
    new todoTask('Kotlin Assignment', 'Lotta'),
    new todoTask('Java Assignment', 'Lotta'),
    new todoTask('C# Assignment', 'Lotta'),
    new todoTask('German Assignment', 'Luca', true),
    new todoTask('Enlgish Assignment', 'Luca', true),
    new todoTask('BOBW Assignment', 'Luca', true),
    new todoTask('RW Assignment', 'Luca', true),
    new todoTask('German Assignment', 'Lotta', true),
    new todoTask('Enlgish Assignment', 'Lotta', true),
    new todoTask('BOBW Assignment', 'Lotta', true),
    new todoTask('RW Assignment', 'Lotta', true),
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

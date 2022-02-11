import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.scss']
})
export class CreateSchoolComponent implements OnInit {
  @Output() createSchoolEvent = new EventEmitter<School>();

  public displayStyle = "none";
  public newSchool : School = {studentsCount: 0};

  constructor() { }

  ngOnInit(): void {
  }

  public submitCreate(newSchool : School) : void {
    this.createSchoolEvent.emit(newSchool);
    this.newSchool = {studentsCount: 0};
    this.closePopup();
  }

  public cancelCreate() : void {
    this.newSchool = {studentsCount: 0};
    this.closePopup();
  }

  public openPopup() {
    this.displayStyle = "block";
  }

  private closePopup() {
    this.displayStyle = "none";
  }
}

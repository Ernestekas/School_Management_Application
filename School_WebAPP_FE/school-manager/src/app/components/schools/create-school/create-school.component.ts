import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import School from 'src/app/models/school.model';
import { DataContainerService } from 'src/app/services/data-container.service';
import { SchoolsService } from 'src/app/services/schools.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.scss']
})
export class CreateSchoolComponent implements OnInit {
  public displayStyle = "none";

  public newSchool: School = { studentsCount: 0 };

  constructor(
    private _dataContainerService: DataContainerService,
    private _schoolsService: SchoolsService
  ) { }

  ngOnInit(): void {
  }

  public submitCreate(newSchool: School): void {
    this._schoolsService.create(newSchool).subscribe({
      next: (school) => {
        this._schoolsService.getAll().subscribe({
          next: (schools) => {
            this._dataContainerService.clearSchools();
            this._dataContainerService.sendSchools(schools);
          },
          error: (response) => this.setError(response.error),
          complete: () => console.log("API receive OK.")
        });
        this.hideError();
        newSchool.name = "";
        this.closePopup();
      },
      error: (response) => {
        this.setError(response.error);
      },
      complete: () => console.log("API post request OK")
    });
  }

  public cancelCreate(): void {
    this.hideError();
    this.newSchool.name = "";
    let nameInput = document.getElementById("newName");
    nameInput!.style.border = ""
    this.closePopup();
  }

  public openPopup() {
    this.displayStyle = "block";
  }

  private closePopup() {
    this.displayStyle = "none";
  }

  private setError(message: string) {
    let errorElement = document.getElementById("errorMessage");
    errorElement!.innerHTML = 'Dabar';
    errorElement!.removeAttribute("hidden");
  }

  private hideError() {
    let errorElement = document.getElementById("errorMessage");
    errorElement!.innerHTML = '';
    errorElement!.setAttribute("hidden", "hidden");
  }
}

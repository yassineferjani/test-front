import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Job } from 'src/app/model/job';
import { Person } from 'src/app/model/person';
import { JobService } from 'src/app/services/job.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  personForm!: FormGroup;
  jobForm!: FormGroup;

  constructor(
    private jobService: JobService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      birthDate: ['']
    });
    this.jobForm = this.formBuilder.group({
      CompanyName: [''],
      positionHeld: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  onSubmit() {
    // Check if the personForm and jobForm properties are not undefined.
    if (this.personForm === undefined || this.jobForm === undefined) {
      return;
    }

    const person: Person = {
      firstname: this.personForm!.value.firstname,
      lastname: this.personForm!.value.lastname,
      birthDate: this.personForm!.value.birthDate,
      id: ''
    };

    const job: Job = {
      CompanyName: this.jobForm!.value.CompanyName,
      positionHeld: this.jobForm!.value.positionHeld,
      startDate: this.jobForm!.value.startDate,
      endDate: this.jobForm!.value.endDate,
      person: person
    };

    this.jobService.addperson(job).subscribe(() => {
      // Job added successfully
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  personForm!: FormGroup;

  constructor(
    private personService: PersonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      birthDate: ['']
    });
  }

  onSubmit() {
    const person: Person = {
      firstname: this.personForm.value.firstname,
      lastname: this.personForm.value.lastname,
      birthDate: this.personForm.value.birthDate,
      id: ''
    };

    this.personService.addPerson(person).subscribe(() => {
    });
  }
}
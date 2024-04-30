import { Component, OnInit } from '@angular/core';
import { CustomErrorStateMatcher } from './custom-error-state-matcher';
import { PersonService } from './person.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor(private personService: PersonService) {} 
  ngOnInit() {
  } 
  esMatcher = new CustomErrorStateMatcher();  
  onFormSubmit(form) {
    this.personService.savePerson(form.value);
  } 
}
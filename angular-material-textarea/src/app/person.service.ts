import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  savePerson(person: Person) {
     console.log(person);  
  }
}
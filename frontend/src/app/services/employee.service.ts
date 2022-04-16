import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';	
import { Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>(this.URL_API);
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee-service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  //providers:[EmployeeService]
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  empdetail:Employee;
  constructor(private employeService: EmployeeService) { }


  ngOnInit() {
    
    this.employees = this.employeService.getEmployees();
    
  }

}

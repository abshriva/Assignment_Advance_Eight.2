import { Employee } from '../models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';




@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
 
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee = new Employee();


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  onSave()
  {
    let newEmp= new Employee();
    newEmp.id = this.employee.id;
    newEmp.name = this.employee.name;
    newEmp.age = this.employee.age;
    newEmp.gender =this.employee.gender



    //this.products.unshift(newProduct);

    //this.productCreated.emit(newProduct);

    this.employeeService.createEmployee(newEmp);
    this.employee = new Employee();

  }

}

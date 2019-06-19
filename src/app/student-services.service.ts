import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/HTTP';
import { Student } from './Student.model';
import { TestComponent } from './test/test.component';
import {FormGroup ,FormControl, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  Url="http://localhost:10000/GetAllStudents";
  
  constructor(private http:HttpClient) { }
  public  studd1=new Student;
  form : FormGroup =new FormGroup({
    Id:new FormControl(0),
    Name:new FormControl(''),
    Age:new FormControl(''),
    Country:new FormControl(''),
    Email:new FormControl('',)
  });
  initializeFormGroup(){
    this.form.setValue({
      Id:0,
      Name:'',
      Age:'',
      Country:'',
      Email:''
    });
  }
  getStudents(){
    return this.http.get<Student[]>(this.Url); 
  }
  getStudentById(sid){
  //console.log(this.http.get<Student>("http://localhost:10000/GetStudentById/"+sid).subscribe);
    return this.http.get<Student>("http://localhost:10000/GetStudentById/"+sid);
  }
  deleteStudentById(sid){
    
    console.log(sid);
    return this.http.delete("http://localhost:10000/DeleteStudent/"+sid);
  }
   httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };
  
  addStudent(studd1){
    // studd1.Id=this.form.get("StudentId").value;
    // studd1.Name=this.form.get("StudentName").value;
    // studd1.Age=this.form.get("StudentAge").value;
    // studd1.Country=this.form.get("StudentCountry").value;
    // studd1.Email=this.form.get("StudentEmail").value;
    //console.log("2nd");

    console.log(studd1);
    return this.http.post<any>('http://localhost:10000/AddStudent',JSON.stringify(studd1));
  }
  updateStudent(studd){
    // console.log(studd.id);
    // console.log(studd.name);
    return this.http.put<any>('http://localhost:10000/UpdateStudent',JSON.stringify(studd));
  }
}

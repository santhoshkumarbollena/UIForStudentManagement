import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/HTTP';
import { Student } from './Student.model';
import { TestComponent } from './test/test.component';
import {FormGroup ,FormControl, Validators } from "@angular/forms"

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  Url="http://localhost:8884/getAllStudents";
  
  constructor(private http:HttpClient) { }
  public  studd1=new Student;
  form : FormGroup =new FormGroup({
    $key:new FormControl(null),
    StudentName:new FormControl('',Validators.required),
    StudentAge:new FormControl(''),
    StudentCountry:new FormControl(0),
    StudentEmail:new FormControl('',Validators.email)
  });
  initializeFormGroup(){
    this.form.setValue({
      $key:null,
      StudentName:'',
      StudentAge:'',
      StudentCountry:0,
      StudentEmail:''
    });
  }
  getStudents(){
    return this.http.get<Student[]>(this.Url); 
  }
  getStudentById(sid){
    return this.http.get<Student>("http://localhost:8884/getStudentById/"+sid);
  }
  deleteStudentById(sid){
    sid=this.form.get("$key").value;
    console.log(sid);
    return this.http.delete("http://localhost:8884/deletingStudent/"+sid);
  }
   httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };
  
  addStudent(studd1){
    studd1.name=this.form.get("StudentName").value;
    studd1.age=this.form.get("StudentAge").value;
    studd1.country=this.form.get("StudentCountry").value;
    studd1.email=this.form.get("StudentEmail").value;
    console.log(studd1.country);
    console.log(studd1.name);
    return this.http.post<any>('http://localhost:8884/AddStudent',JSON.stringify(studd1),this.httpOptions);
  }
  updateStudent(studd){
    console.log(studd.id);
    console.log(studd.name);
    return this.http.put<any>('http://localhost:8884/UpdateStudent/'+studd.id,JSON.stringify(studd),this.httpOptions);
  }
}

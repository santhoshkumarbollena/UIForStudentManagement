import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/HTTP';
import { Student } from './Student.model';
import { TestComponent } from './test/test.component';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  Url="http://localhost:8884/getAllStudents";
  
  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get<Student[]>(this.Url); 
  }
  getStudentById(sid){
    return this.http.get<Student>("http://localhost:8884/getStudentById/"+sid);
  }
  deleteStudentById(sid){
    
    return this.http.delete("http://localhost:8884/deletingStudent/"+sid);
  }
   httpOptions={
    headers :new HttpHeaders({'Content-Type':'application/json'})
  };
  
  addStudent(studd){
    console.log(studd.id);
    console.log(studd.name);
    return this.http.post<any>('http://localhost:8884/AddStudent',JSON.stringify(studd),this.httpOptions);
  }
  updateStudent(studd){
    console.log(studd.id);
    console.log(studd.name);
    return this.http.put<any>('http://localhost:8884/UpdateStudent/'+studd.id,JSON.stringify(studd),this.httpOptions);
  }
}

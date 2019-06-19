import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { StudentServicesService } from '../student-services.service';
import { Student } from '../Student.model';
import { HttpClient } from '@angular/common/HTTP';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // displayname=false;
  public  studd=new Student;
  public Allstudents$:Student[];
  public stud$:Student;
  public sid=1;
  Countries =[
    {id :1,value:'India'},
    {id:2,value:'United States'},
    {id :3,value:'Canada'}
  ];
  constructor(private StudentSer:StudentServicesService) { }
  // public colors=["red","blue","yello"];
  // @Input('parentData') public ParentName;

  // @Output() public childE=new EventEmitter();
  GetStud(){
    
    return this.StudentSer.getStudents().subscribe(StudentSer => this.Allstudents$=StudentSer);
  }
  GetStudbyId(sid){
    //console.log(this.StudentSer.getStudentById(this.sid).subscribe(StudentSer => this.stud$=StudentSer));
    //console.log(this.stud$);
    return this.StudentSer.getStudentById(this.sid).subscribe(StudentSer => this.stud$=StudentSer);
  }
  DeleteStudbyId(sid){
    this.stud$=null;
    return this.StudentSer.deleteStudentById(this.sid).subscribe();
  }
  AddStudent(studd){
    console.log(this.studd);
    return this.StudentSer.addStudent(this.studd).subscribe();
  }
  UpdateStudent(studd){
    console.log(this.studd);
    return this.StudentSer.updateStudent(this.studd).subscribe();
  }
  ngOnInit() {
   
    //let obs= this.http.get("http://localhost:8884/getAllStudents");obs.subscribe(()=> console.log("got resp"));
  }
  // fireIt(){
  //   this.childE.emit("hey santhosh hi");
  // }
}

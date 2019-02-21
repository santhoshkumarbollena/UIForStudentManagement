import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../student-services.service';
import { Student } from '../Student.model';
import {NotificationServiceService} from '../notification-service.service'
@Component({
  selector: 'app-adding-student',
  templateUrl: './adding-student.component.html',
  styleUrls: ['./adding-student.component.css']
})
export class AddingStudentComponent implements OnInit {
  countries =[
    {id :1,value:'India'},
    {id:2,value:'United States'},
    {id :3,value:'Canada'}
  ];
  public  studd=new Student;
  
  constructor(private StudentSer:StudentServicesService,private notificationobj:NotificationServiceService) { }
  onClear(){
    this.StudentSer.form.reset();
    this.StudentSer.initializeFormGroup();
  }
  AddStudent(){
    //console.log(this.studd.name);
    if(this.StudentSer.form.valid){
      this.StudentSer.addStudent(this.studd).subscribe();
      this.onClear();
      this.notificationobj.success('Student Added Succesfully');
    }
    
  }
  ngOnInit() {
  }

}

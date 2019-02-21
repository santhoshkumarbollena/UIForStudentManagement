import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../student-services.service';
import { Student } from '../Student.model';
import { NotificationServiceService } from '../notification-service.service';

@Component({
  selector: 'app-deleting-student',
  templateUrl: './deleting-student.component.html',
  styleUrls: ['./deleting-student.component.css']
})
export class DeletingStudentComponent implements OnInit {

  public stud$:Student;
  public sid=1;
  constructor(private StudentSer:StudentServicesService,private notificationobj:NotificationServiceService)  { }
  DeleteStudbyId(sid){
    
    this.stud$=null;
     this.StudentSer.deleteStudentById(this.sid).subscribe();
     this.notificationobj.success('Student Deleted Succesfully');
  }
  ngOnInit() {
  }

}

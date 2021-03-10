import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl, Form } from '@angular/forms';
@Component({
  selector: 'app-identity-details',
  templateUrl: './identity-details.component.html',
  styleUrls: ['./identity-details.component.scss']
})
export class IdentityDetailsComponent implements OnInit {
  userIdentiForm: FormGroup;
  docName:any =['Aadhar Card','Voter ID','PAN Card']
  constructor(private fb: FormBuilder)
   {
    this.userIdentiForm = this.fb.group({
      userDetails:this.fb.array([])
    });
   }
  ngOnInit(){
    this.userDetails().push(this.newDetails());
  }  
   userDetails():FormArray{
     return this.userIdentiForm.get("userDetails") as FormArray
   }
   newDetails():FormGroup{
     return this.fb.group({
       document:[''],
       docNum:'',
       issueDate:'',
       expDate:'',
       issuePlace:''
     })
   }
   addRow(){
     this.userDetails().push(this.newDetails())
   }
   removeRow(i:number){
     this.userDetails().removeAt(i)
   }
   onsubmit(){
     console.log(this.userIdentiForm.value)
   }
}

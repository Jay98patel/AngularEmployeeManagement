import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../../shared/passCnPass';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  authform:FormGroup;
  Role:any=['Company Administrator','CEO','Manager']
  
  constructor(private fb:FormBuilder) {
    
    this.authform=fb.group({
      uname:[''],
      password:['',[Validators.required]],
      cnpassword:['',[Validators.required]],
      role:['',[Validators.required]]

    },{
      validator:ConfirmedValidator('password','cnpassword')
 })}
  ngOnInit(): void {

  }
 
  submit(){
      console.log(this.authform.value);
  }
    

  

}

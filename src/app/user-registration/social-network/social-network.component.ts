import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-social-network',
  templateUrl: './social-network.component.html',
  styleUrls: ['./social-network.component.scss']
})
export class SocialNetworkComponent implements OnInit {
  allNetwork:any;
  socialNetwork:FormGroup;
  other:FormArray;
  constructor(private fb:FormBuilder) { 
    this.socialNetwork=this.fb.group({
      linkedin:[''],
      facebook:[''],
      twitter:[''],
      socialTab:this.fb.array([])
    })
  }

  ngOnInit() {
    this.userSocial().push(this.newSocialTab());
  }
  
  userSocial():FormArray{
    return this.socialNetwork.get("socialTab") as FormArray
  }
  newSocialTab():FormGroup
  {
    return this.fb.group({
      addSocial:''
    })
  }
  addRow(){
    this.userSocial().push(this.newSocialTab())
  }
  removeRow(i:number){
    this.userSocial().removeAt(i)
  }
  
  onsubmit(){
    
    console.log(this.socialNetwork.value)
    
  }
  

}

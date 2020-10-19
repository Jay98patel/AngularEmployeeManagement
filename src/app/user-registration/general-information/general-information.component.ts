import { Component,OnInit,ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {

  organizatinName: any = [
    'Human Relation Organization',
    'Peoples Cooperation Organization',
    'Women Empowermen'
  ]
  selectedOrganiz:string[]=this.organizatinName;
  customerName: any = [
    'Human Relation Organization',
    'Mr Harish Shah',
    'Mr Rakesh Patel'
  ]
  vendorName:any=[
    'vendor 1',
    'vendor 2',
    'vendor 3',
  ]
  namePrefix:any=[
    'Mr.',
    'Mrs.',
    'other'
  ]
  organizationIndustry:any=[
    'Alok Industry',
    'Welspan',
    'Wallmart'
  ]

  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png";
  editFile: boolean = true;
  removeUpload: boolean = false;
  
  constructor(public fb: FormBuilder,private cd: ChangeDetectorRef) { }
  
  
  ngOnInit(): void {}
  registrationForm = this.fb.group({
      file: [null]
  }) 

  uploadFile(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.registrationForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      this.cd.markForCheck();        
    }
  }

}

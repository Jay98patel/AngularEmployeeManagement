import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CascadDropDataService } from 'src/app/services/cascad-drop-data.service';
import { Country,State,City } from '../../shared/cascadedrop'
@Component({ 
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {
  addressDetails:FormGroup;
  addresstype:any=['Permanant','Temparary']
  
  countries: Country[];
  states: State[];
  cities:City[];
 
  constructor(private _cascadedrop:CascadDropDataService,private fb:FormBuilder) {
    this.addressDetails=this.fb.group({
      addr:this.fb.array([])
    });
    this.countries = this._cascadedrop.getCountries();
   }

  ngOnInit() {
   this.userAddress().push(this.newAddrDetails())
   
  } 
  userAddress():FormArray{
    return this.addressDetails.get("addr") as FormArray
  }
  newAddrDetails():FormGroup{
    return this.fb.group({
      orname:'',
      addline1:'',
      addline2:'',
      country:'',
      state:'',
      city:'',
      zip:''
    })
  }
  addRow(){
    this.userAddress().push(this.newAddrDetails())
  }
  removeRow(i:number){
    this.userAddress().removeAt(i)
  }
  onsubmit(){
    console.log(this.addressDetails.value)
  }

  //for country state dropdown
  onSelect(countryid) {
    this.states = this._cascadedrop.getStates().filter((item)=> item.countryid === Number(countryid));
    // this.states=this.countries.find(cntry=>cntry.name===countryid).states
    
  }
  select(stateid){
    this.cities = this._cascadedrop.getCities().filter((item)=> item.stateid === Number(stateid));
  }
  

}

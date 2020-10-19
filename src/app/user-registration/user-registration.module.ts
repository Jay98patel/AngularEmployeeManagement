import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { UserRegistrationComponent } from './user-registration.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserFormServiceService } from '../services/user-form-service.service';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { IdentityDetailsComponent } from './identity-details/identity-details.component';
import { AddressDetailsComponent } from './address-details/address-details.component';
import { CascadDropDataService } from '../services/cascad-drop-data.service';
import { SocialNetworkComponent } from './social-network/social-network.component';
@NgModule({
  declarations: [
    UserRegistrationComponent,
    GeneralInformationComponent,
    ContactDetailsComponent,
    IdentityDetailsComponent,
    AddressDetailsComponent,
    SocialNetworkComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule
  ],
  providers:[UserFormServiceService,CascadDropDataService]

})
export class UserRegistrationModule { }

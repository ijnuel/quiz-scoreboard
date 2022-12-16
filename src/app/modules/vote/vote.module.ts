import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteComponent } from './vote.component';
import { ApiModule, BASE_PATH } from '../../services/vote-service';
import { environment } from '../../../environments/environment';
import { VoteRoutingModule } from './vote-routing.module';
import { ResultComponent } from './result/result.component';
import {MatIconModule} from '@angular/material/icon';
import { UpdatePollingUnitResultComponent } from './update-polling-unit-result/update-polling-unit-result.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VoteComponent,
    ResultComponent,
    UpdatePollingUnitResultComponent
  ],
  imports: [
    CommonModule,
    ApiModule,
    VoteRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.voteServiceUrl }
  ]
})
export class VoteModule { }

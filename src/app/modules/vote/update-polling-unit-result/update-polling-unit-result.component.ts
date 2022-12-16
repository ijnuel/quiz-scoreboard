import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PartyVotesDto, VoteResult, VotesService } from 'src/app/services/vote-service';

@Component({
  selector: 'app-update-polling-unit-result',
  templateUrl: './update-polling-unit-result.component.html',
  styleUrls: ['./update-polling-unit-result.component.css']
})
export class UpdatePollingUnitResultComponent implements OnInit {
  @Input() public voteResult!: VoteResult;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _voteService: VotesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.getRawValue();
  }

  initForm() {
    this.form = this.fb.group({
      apc: [
        this.voteResult.partyVotes.apc,
        Validators.compose([
          Validators.required,
          Validators.min(0)
        ]),
      ],
      lp: [
        this.voteResult.partyVotes.lp,
        Validators.compose([
          Validators.required,
          Validators.min(0)
        ]),
      ],
      nnpp: [
        this.voteResult.partyVotes.nnpp,
        Validators.compose([
          Validators.required,
          Validators.min(0)
        ]),
      ],
      pdp: [
        this.voteResult.partyVotes.pdp,
        Validators.compose([
          Validators.required,
          Validators.min(0)
        ]),
      ]
    });

    this.form.addControl('total', this.fb.control(this.voteResult.partyVotes.total,
      [
        Validators.required,
        Validators.min(this.getMinTotal()),
      ]));
    
  }

  getMinTotal(): number {
    return this.f.apc+this.f.lp+this.f.nnpp+this.f.pdp;
  }

  submit() {
    let partyVotesDto: PartyVotesDto = {
      pollingUnitId: this.voteResult.id,
      apc: this.f.apc,
      lp: this.f.lp,
      nnpp: this.f.nnpp,
      pdp: this.f.pdp,
      total: this.f.total
    }
    this._voteService.apiVotesUpdatePollingUnitVotesPost(partyVotesDto).subscribe(result => {
      this.closeModal(result);
    });
  }

  closeModal(saved: boolean = false) {
    this.activeModal.close(saved);

  }
  
  updateTotalValidator(event: any): void {
    let currentTotal = this.f.total;
    this.form.setControl('total', this.fb.control(currentTotal,
      [
        Validators.required,
        Validators.min(this.getMinTotal()),
      ]));

  }

  resetForm() {
    this.initForm();
  }
}

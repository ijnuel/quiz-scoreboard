import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Level } from 'src/app/enums/level';
import { VoteResult, VotesService } from 'src/app/services/vote-service';
import { AlertService } from 'src/app/utilities/alert.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  data$: Observable<VoteResult[]> = of([]);
  country$: Observable<VoteResult[]> = of([]);
  state$: Observable<VoteResult[]> = of([]);
  lga$: Observable<VoteResult[]> = of([]);
  ward$: Observable<VoteResult[]> = of([]);
  pollingUnit$: Observable<VoteResult[]> = of([]);

  selectedState: number = 0;
  selectedLga: number = 0;
  selectedWard: number = 0;

  constructor(
    private _voteService: VotesService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.getFullData()
  }

  getFullData() {
    this.spinner.show();
    this._voteService.apiVotesGetPartyVotesGet().subscribe(result => {
      this.spinner.hide();
      this.state$ = of(result.filter(x => x.id != undefined && x.id > 0));
      this.country$ = of(result.filter(x => x.id != undefined && x.id < 0));
    });
    this.fetchRoots();
  }

  fetchRoots() {
    this.lga$ = this._voteService.apiVotesGetPartyVotesByStateGet(this.selectedState);
    this.ward$ = this._voteService.apiVotesGetPartyVotesByLgaGet(this.selectedLga);
    this.pollingUnit$ = this._voteService.apiVotesGetPartyVotesByWardGet(this.selectedWard);
  }

  fetch(id: number, level: Level): void {
    if (level == Level.National && id == 0) {
      this.getFullData();
    }
    if (level == Level.State) {
      this.selectedState = id;
      this.selectedLga = 0;
      this.selectedWard = 0;
      this.lga$ = this._voteService.apiVotesGetPartyVotesByStateGet(this.selectedState);
      this.ward$ = this._voteService.apiVotesGetPartyVotesByLgaGet(this.selectedLga);
      this.pollingUnit$ = this._voteService.apiVotesGetPartyVotesByWardGet(this.selectedWard);
    }
    if (level == Level.LGA) {
      this.selectedLga = id;
      this.selectedWard = 0;
      this.ward$ = this._voteService.apiVotesGetPartyVotesByLgaGet(this.selectedLga);
      this.pollingUnit$ = this._voteService.apiVotesGetPartyVotesByWardGet(this.selectedWard);
    }
    if (level == Level.Ward) {
      this.selectedWard = id;
      this.pollingUnit$ = this._voteService.apiVotesGetPartyVotesByWardGet(this.selectedWard);
    }
  }

}


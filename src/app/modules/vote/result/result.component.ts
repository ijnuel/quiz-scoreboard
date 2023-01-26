import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Level } from 'src/app/enums/level';
import { PartyVotes, VoteResult } from 'src/app/services/vote-service';
import { UpdatePollingUnitResultComponent } from '../update-polling-unit-result/update-polling-unit-result.component';
import { VoteComponent } from '../vote.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() data$: Observable<VoteResult[]> = of([]);
  // @Input() editable: boolean = false;
  // @Input() total: boolean = false;
  @Input() level: Level = Level.National;
  @Input() selected: number = 0;
  originalData: VoteResult[] = [];

  constructor(
    private _dialog: NgbModal,
    private voteComponent: VoteComponent
  ) { 
  }

  ngOnInit(): void {
  }

  GetPercentage(party: number | undefined, total: number | undefined): number {
    if (party == undefined || total == undefined) return 0;
    if (total <= 0) return 0;
    return parseFloat((party*100/total).toFixed(2));
  }

  isPartyFirst(party: number | undefined, partyVotes: PartyVotes): boolean {
    if (party == undefined || party == 0 || partyVotes == undefined || partyVotes.total == undefined || partyVotes.total <= 0) return false;
    
    return party == Math.max(partyVotes.apc??0, partyVotes.lp??0, partyVotes.nnpp??0, partyVotes.pdp??0);
  }

  getPartyStatus(party: number | undefined, partyVotes: PartyVotes): string {
    if (this.GetPercentage(party, partyVotes.total) >= 25) {
      if (party != undefined && this.isPartyFirst(party, partyVotes)) {
        return " bg-success bg-gradient" 
      }
      return " bg-primary bg-gradient"
    } 
    return "";
  }

  getSelectClass(voteResult: VoteResult): string {
    if (voteResult.id == this.selected) {
      return " bg-secondary"
    }
    if (voteResult.partyVotes.total != undefined && voteResult.partyVotes.total > 0) {
    // if (voteResult.percentageComplete > 99) {
      return " bg-info bg-gradient"
    }
    return ""
  }
  fetch(id: number): void {
    this.voteComponent.fetch(id, this.level)
  }

  getLevel() : string {
    return Level[this.level];
  }
  onSearchChange(event: any): void {  
    let searchWord = event.target.value;
    if (this.originalData.length == 0) {
      this.data$.subscribe(result => {
        this.originalData = result;
      })
    }
    if (searchWord != undefined && searchWord != '') {

      this.data$ = of(this.originalData.filter(x => x.name.toLowerCase().includes(searchWord.toLowerCase())))
    }
    else {
      this.data$ = of(this.originalData);
    }
  }


  updatePollingUnitResult(voteResult: VoteResult) {
    const dialogRef = this._dialog.open(UpdatePollingUnitResultComponent, {
      windowClass: 'myCustomModalClass',
      size: 'l',
      backdrop: 'static',
      keyboard: false,
      scrollable: true,
      centered: true
    });
    dialogRef.componentInstance.voteResult = voteResult;

    dialogRef.result.then(async (result) => {
      if (result) {
        this.voteComponent.fetch(0, Level.National)
      }
    }, (reason) => {
    });
  }
}

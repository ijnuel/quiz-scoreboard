import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  prizes: number[] = [20,50,100,200,300,450,600,800,1000].sort((a,b) => b-a);
  currentStage: number = 0;
  currentBalance: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  updateStage() {
    if (this.currentStage < this.prizes.length) {
      this.currentStage += 1;
    }
    if (this.currentStage == this.prizes.length) {
      this.saveInBank();
    }
  }

  resetStage() {
    this.currentStage = 0;
  }

  saveInBank() {
    this.currentBalance += this.currentStage == 0 ? 0 : this.prizes[this.prizes.length-this.currentStage];
    this.resetStage();
  }
}

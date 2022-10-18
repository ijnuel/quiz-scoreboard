import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cylinder-counter',
  templateUrl: './cylinder-counter.component.html',
  styleUrls: ['./cylinder-counter.component.css']
})
export class CylinderCounterComponent implements OnInit {
  @Input() cylinderClass: string = "";
  @Input() prize: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

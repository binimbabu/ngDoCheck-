import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() users:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    console.log("CHANGES")
  }
  ngDoCheck(){
    console.log("DO CHECK")
  }
}

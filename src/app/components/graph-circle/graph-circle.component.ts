import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-graph-circle',
  templateUrl: './graph-circle.component.html'
})
export class GraphCircleComponent implements OnInit {
  @ViewChild('chart') chart: ElementRef;

  @Input() charLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() charData: number[] = [350, 450, 100];
  @Input() charType: string = 'doughnut';
  @Input() charTitle: string = 'title';

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onHover: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    this.onClick.emit(e);
  }

  public chartHovered(e: any): void {
    this.onHover.emit(e);
  }
}

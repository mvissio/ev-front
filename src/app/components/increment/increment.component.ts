import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('txtPercent') txtPercent: ElementRef;

  @Input() title: string = 'Barra de progreso';
  @Input() percent: number = 50;

  @Output() changeVal: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onChangeVal(val: number) {
    if (this.percent >= 100 && val > 0) {
      this.percent = 100;
      return;
    }
    if (this.percent <= 0 && val < 0) {
      this.percent = 0;
      return;
    } else {
      this.percent += val;
    }
    this.changeVal.emit(this.percent);
    this.txtPercent.nativeElement.focus();
  }

  onChanges(newVal: number) {
    if (newVal < 0) {
      this.percent = 0;
    } else if (newVal > 100) {
      this.percent = 100;
    } else {
      this.percent = newVal;
    }
    this.txtPercent.nativeElement.value = this.percent;
    this.changeVal.emit(this.percent);
  }
}

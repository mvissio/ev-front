import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  percent1: number = 50;
  percent2: number = 20;
  title1: string = 'Progreso 1';
  title2: string = 'Progreso 2';

  constructor() {
  }

  ngOnInit() {
  }
}

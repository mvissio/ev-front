import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.onCountTres().then(
      () => console.log('Termino')
    ).catch(error => console.error('ERROR en la promesa: ', error));
  }

  ngOnInit() {
  }

  onCountTres() {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let interval = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve();
          clearInterval(interval);
        }
      }, 1000);
    });


    return promesa;
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {filter, map, retry, subscribeOn} from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {

  }

  ngOnInit() {
    this.subscription = this.onReturnObservable()
      .subscribe(
        number => console.log('Subs', number),
        error => console.log('ERROR en obserbable', error),
        () => console.warn('El obserbable termino!')
      );
  }

  ngOnDestroy() {
    console.log('la pagina se cierra');
    this.subscription.unsubscribe();
  }

  onReturnObservable(): Observable<any> {
    return new Observable((observaer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        };
        observaer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observaer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observaer.error('ERROR');
        // }
      }, 1000);
    }).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        } else {
          return false;
        }
      })
    );

  }
}

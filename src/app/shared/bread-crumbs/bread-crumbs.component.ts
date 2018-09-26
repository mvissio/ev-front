import {Component, OnInit} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styles: []
})
export class BreadCrumbsComponent implements OnInit {
  title: string;

  constructor(private router: Router,
              private titleApp: Title,
              private meta: Meta) {

    this.onGetDataRoute().subscribe(data => {
      this.title = data.title;
      titleApp.setTitle(this.title);
      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
      };
      meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  onGetDataRoute(): Observable<any> {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }

}

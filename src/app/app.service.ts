/*import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search() {
    return this.http
               .get(`https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4d60cbe4bd014f84bbb26f999f115b8d`)
               .map(response => response.json());
  }
}*/

/*import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'https://newsapi.org/v1/articles?source='+this.searchEntries+'&sortBy=top&apiKey=4d60cbe4bd014f84bbb26f999f115b8d';
  queryUrl: string = '?search=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
  }
}*/

import { Injectable } from '@angular/core';
import { Http, Response }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class SearchService {

  constructor(private http: Http) {}

  search(searchTerm$:HTMLInputElement) {
    return this.http
   .get('https://newsapi.org/v1/articles?source='+searchTerm$.value+'&sortBy=top&apiKey=4d60cbe4bd014f84bbb26f999f115b8d')
   .map(response => response.json());
  }
}


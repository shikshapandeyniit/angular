import { Http, Response } from '@angular/http'; 
import { Component } from '@angular/core';
//import { ActivatedRoute, ParamMap } from '@angular/router';
import {SearchService} from './app.service';
//import {RouterModule,Routes} from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({ 
  selector: 'app-root', 
	templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers:[SearchService]
})
export class AppComponent{ 
 //results: Object;
 results:any=[];
  //searchTerm$ : any=[]; 
 constructor(private searchService: SearchService){}
   search(searchTerm$){
  this.searchService.search(searchTerm$)
      .subscribe(results => {
        console.log(results)
        this.results = results.articles;
      });
    }
}
 




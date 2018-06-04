import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
// import {Search} from '../user';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
    public resultCount = 15;




    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    seeMore() {
        this.resultCount = 9;
        this.getDataFunction();
    }


    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo, this.resultCount);
  }


      getDataFunction() {
          this.gitRepoRequest.gitRepos(this.searchRepo, this.resultCount);

      }


}

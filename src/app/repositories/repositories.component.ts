import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [SearchRequestService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
    public resultCount = 12;




    searchRepos() {
        this.searchRepo = '';
        this.resultCount = 10;
        this.getDataFunction();

    }

    seeMore(){
        this.getDataFunction();
    }


    constructor(public gitRepoRequest: SearchRequestService ) { }

  ngOnInit() {
        this.resultCount = 5;
      this.gitRepoRequest.gitRepos(this.searchRepo,this.resultCount);
          this.repoError=true;
  }


      getDataFunction(){
          this.gitRepoRequest.gitRepos(this.searchRepo,this.resultCount);
          if(this.gitRepoRequest.searchRepo==="error"){
              this.repoError=true;
          }
          else{
              this.repoError=false;
          }
      }


}

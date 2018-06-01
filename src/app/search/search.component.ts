import { Component, OnInit } from '@angular/core';
import {SearchRequestService} from '../search-request.service';
import {Repository} from '../repository';
import {Search} from '../search';
import {User} from '../user';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    providers:[SearchRequestService];
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public searchMe:string = "wanjiiru";
    public githubUser :string;

    users:User;
    repository :any;


    searchUser(name){
        this.githubUser = '';
        this.searchMe  = 'wanjiiru';
        this.githubUser = this.githubUser;
        this.ngOnInit()
    }


  constructor(public githubUserRequest:SearchRequestService, public userRepos:SearchRequestService) { }

  ngOnInit() {
      this.githubUserRequest.githubUser(this.searchMe);
      this.users = this.githubUserRequest.users;
      this.userRepos.getUserRepos(this.searchMe);
      console.log(this.userRepos.newRepository);
  }

  findUsers(){
        this.githubUserRequest.githubUser(this.searchMe);
        this.users = this.githubUserRequest.users;
        this.userRepos.getUserRepos(this.searchMe);
  }

}

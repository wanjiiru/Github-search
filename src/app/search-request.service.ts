import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {Repository} from './repository';
import {User} from './user';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchRequestService {
    repository: Repository ;
    users: User ;
    newRepository: any ;
    searchRepo:any;
    newRepo:any;




  constructor(private http: HttpClient ) {
      this.repository = new Repository('', ''  , '' , new Date() );
      this.users = new User('','','','','','','');
  }
  githubUser(searchName) {
      interface ApiResponse {
          name: string;
          // html_url: string;
          description: string;
          created_at: Date;
          login: string;
          avatar_url: string;
          public_repos: number;
          followers: number;
          following: number;
      }

      let promise = new Promise((resolve,reject)=>{
          this.http.get<ApiResponse>("https://api.github.com/users/"+searchName+"?access_token="+environment.myApi).toPromise().then(getResponse=>{
              this.users.name = getResponse.name;
              this.users.login = getResponse.login;
              this.users.avatar_url = getResponse.avatar_url;
              this.users.html_url = getResponse.html_url;
              this.users.public_repos = getResponse.public_repos;
              this.users.created_at = getResponse.created_at;
              this.users.followers = getResponse.followers;
              this.users.following = getResponse.following;
              this.gitUserError=false;
              resolve();
          },error=>{
              reject(error);
          });
      });
      return promise;



      let promise = new Promise((resolve, reject ) => {
          this.http.get<ApiResponse>('https://api.github.com/search/repositories?q=' + searchName + environment.myApi).toPromise().then(response => {

                    this.repository.name = response.name;
                    this.repository.html_url = response.html_url;
                    this.repository.description = response.description;
                    this.repository.created_at = response.created_at;
                    resolve();
                },
                error => {
                    reject(error);
                }
            );
        });

        return promise;
    }


    gitRepos(searchMe){
        interface ApiResponse{
            name:string;
            // html_url:string;
            description:string;
            created_at:Date;
        }
        let myPromise = new Promise((resolve,reject)=>{
            this.http.get<ApiResponse>("https://api.github.com/users/"+searchMe+"/repos?order=created&sort=asc?access_token="+environment.myApi).toPromise().then(getRepoResponse=>{
                this.newRepo = getRepoResponse;
                resolve();
            },error=>{
                reject(error);
            })
        })
        return myPromise;
    }




gitRepos(searchName,toShow){
    interface ApiResponse{
        items:any;
    }
    let promise = new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>("https://api.github.com/search/repositories?q="+searchName+"&per_page="+toShow+"&sort=forks&order=asc?access_token="+environment.myApi).toPromise().then(getRepoResponse=>{
            // console.log("success")
            this.searchRepo = getRepoResponse.items;
            resolve();
        },error=>{
            this.searchRepo = "error"
            reject(error);
        })
    })
    return promise;
}
}

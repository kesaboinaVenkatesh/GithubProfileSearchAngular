import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GitHubService {
    private userName : string;
    private clientId: string ='c91bc36eb32c008980b2';
    private clientSecret: string ='a5b4592bca22af899331ec598a53a6fc04cbe585';

    constructor(private _http:HttpClient){
        let options =  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.userName = '';
    }

    getUser(){
        if(this.userName){
            return this._http.get('http://api.github.com/users/' + this.userName
        + '?client_id=' + this.clientId 
        + ' &client_secret=' + this.clientSecret)
        }
       
    }

    getRepos(){
        if(this.userName){
            return this._http.get('http://api.github.com/users/' + this.userName
        +'/repos?client_id=' + this.clientId
        + '&client_secret=' + this.clientSecret)
       
        }
    }

    updateUser(userName:string){
           this.userName = userName
    }

    private handleError(error:any){
        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}

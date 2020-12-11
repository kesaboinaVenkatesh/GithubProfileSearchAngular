import { Component } from '@angular/core';
import { GitHubUser } from './model/git-hub-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public GitHubUser1:any = GitHubUser
  constructor(){
    this.GitHubUser1 = new GitHubUser(false,null,'')
  }
}

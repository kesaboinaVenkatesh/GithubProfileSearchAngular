import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GitHubUser } from '../../model/git-hub-user';
import { GitHubService } from '../../services/git-hub.service';

@Component({
   
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
 
})
export class SearchFormComponent implements OnInit {
  
  @Input() githubUser: GitHubUser
  @Output() userUpdated: EventEmitter<GitHubUser> = new EventEmitter<GitHubUser>();

  constructor(private _githubService: GitHubService) { }

  ngOnInit() {
    if (this.githubUser) {
      this.githubUser.user = false;
      this.getUserInformation();
    }
  }

  searchUser() {
    if (this.githubUser.userName && this.githubUser.userName.length > 0) {
        this._githubService.updateUser(this.githubUser.userName);
        this.getUserInformation();
    } else {
        this.githubUser.user = false;
    }
}
getUserInformation() {
  if (this.githubUser.userName && this.githubUser.userName.length > 0) {

      this._githubService.getUser().subscribe(user => {
          this.githubUser.user = user;
          this.userUpdated.emit(this.githubUser);
      },
          (err) => {
              console.log('err:' + err);
              this.githubUser.user = false;
          },
          () => console.log('Done')
      );

      this._githubService.getRepos().subscribe(repos => {
          // console.log(repos);
          this.githubUser.repos = repos;
          this.userUpdated.emit(this.githubUser);
      },
          (err) => {
              console.log('err:' + err);
              this.githubUser.user = false;
          },
          () => console.log('Done')
      );

  }
}


}

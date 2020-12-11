import { Component, OnInit, Input } from '@angular/core';
import { GitHubUser } from '../../model/git-hub-user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() githubUser: GitHubUser;
  constructor() { }

  ngOnInit() { }

}

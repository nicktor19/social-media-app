import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friends: String[] = [ "Jeffery Saelee","Nicholas Torres","Alejandro Zubillaga" ];
  

  showFiller = false;

  constructor() { }

  ngOnInit(): void {
  }
}

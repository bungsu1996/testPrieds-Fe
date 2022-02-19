import { Component, OnInit } from '@angular/core';
import { faBug, faEllipsis, faEllipsisH, faEllipsisVertical, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  iconUser = faUser;
  iconQuestion = faQuestionCircle;
  iconBug = faBug;
  currentDate: number = Date.now();
  menuLeft = '../../assets/img/1855701.png';

  constructor() { 
  }

  ngOnInit(): void {

  }

}

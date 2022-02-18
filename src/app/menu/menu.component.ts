import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RequestQueueNumberComponent } from '../request-queue-number/request-queue-number.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  // changePage(path) {
  //   this.router.navigate(['/' + path]);
  // }

  toPrintQeueNumber() {
    this.dialog.open(RequestQueueNumberComponent, {
      width: "500px",
      height: "550px",
    });
  }
  toInputVisitorsDetails() {
    this.router.navigate(['/input-visitor-details']);
  }
  toListVisitors() {
    this.router.navigate(['/visitor-list']);
  }
}

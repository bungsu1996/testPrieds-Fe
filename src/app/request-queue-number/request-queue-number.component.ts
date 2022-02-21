import { Component, OnInit } from '@angular/core';
import ITicket from '../interface/ITicket';
import { TicketService } from '../services/ticket.service';
import * as moment from 'moment';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css'],
})
export class RequestQueueNumberComponent implements OnInit {
  elementType = 'svg';
  value = '';
  format = 'CODE128';
  lineColor = '#000000';
  width = 1.1;
  height = 70;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 15;
  background = '#ffffff';
  margin = 5;
  marginTop = 10;
  marginBottom = 5;
  marginLeft = 5;
  marginRight = 5;
  ticket: ITicket;

  constructor(
    private ticketService: TicketService,
    private dialogRef: MatDialogRef<RequestQueueNumberComponent>
  ) {}

  ngOnInit(): void {
    this.ticketService.getTicket().subscribe((res: any) => {
      this.ticket = res;
      this.value = moment(res.createdAt).format('LLLL');
      console.log(moment(res.createdAt).format('LLLL'));
    });
    this.dialogRef.disableClose = true;
  }

  get values(): string[] {
    return this.value.split('\n');
  }

  OnGetTicket() {
    Swal.fire({
      icon: 'success',
      title: 'Thanks',
      width: '20rem',
      showConfirmButton: true,
      timer: 2000,
    });
    this.dialogRef.close();
  }
}

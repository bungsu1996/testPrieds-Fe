import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
  elementType = 'svg';
  value = '22/02/2022, 22:16:20 PM';
  format = 'CODE128';
  lineColor = '#000000';
  width = 1.5;
  height = 80;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 1;
  marginLeft = 10;
  marginRight = 10;

  constructor() { }

  ngOnInit(): void {
  }

  get values(): string[] {
    return this.value.split('\n');
  }

}

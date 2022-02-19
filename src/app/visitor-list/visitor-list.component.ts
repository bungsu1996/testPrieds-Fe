import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVisitor } from './IVisitor';
import {
  faBug,
  faCloudArrowDown,
  faQuestionCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { map, Observable, startWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  iconUser = faUser;
  iconQuestion = faQuestionCircle;
  iconBug = faBug;
  iconCloudArrow = faCloudArrowDown;
  currentDate: number = Date.now();
  iconMenuLeft = '../../assets/img/1855701.ico';
  nameVisitor = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  searchingForm: FormGroup;

  displayedColumns: string[] = ['noIndex', 'id', 'name', 'visit', 'klinik'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.hasFiltered();
    this.searchFormInit();
  }

  public hasFiltered() {
    this.filteredOptions = this.nameVisitor.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  private searchFormInit() {
    this.searchingForm = this.formBuilder.group({
      visitorToday: [''],
      cashAlready: [''],
      nameVisitor: [''],
    });
  }

  public onBack() {
    this.router.navigate(['/']);
  }
}

export interface PeriodicElement {
  id: string;
  name: string;
  visit: Number;
  klinik: string;
}

let dateNow = Date.now();
const ELEMENT_DATA: PeriodicElement[] = [
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
  { id: '0001', name: 'hamzah', visit: dateNow, klinik: 'kandungan' },
];

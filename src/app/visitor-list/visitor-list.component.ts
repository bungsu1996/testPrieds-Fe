import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IVisitor } from './IVisitor';
import {
  faBug,
  faCloudArrowDown,
  faQuestionCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { VisitorsService } from '../services/visitors.service';
import inputVisitor from '../interface/IVisitors';
import Swal from 'sweetalert2';

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
  filteredOptions: Observable<inputVisitor[]>;
  searchingForm: FormGroup;
  visitors: any;
  searchedVisitors: any;
  showSearching: Boolean = false;
  displayedColumns: string[] = [
    'noIndex',
    'visitorId',
    'visitorName',
    'createdAt',
    'clinic',
  ];
  searchVisitors: inputVisitor[] = [];
  errorSearch: Boolean = false;
  errorNoData: Boolean = false;
  spinner: Boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private visitorService: VisitorsService
  ) {}

  ngOnInit(): void {
    this._spinner();
    this.searchFormInit();
    this.getVisitor();
  }

  public _spinner() {
    setTimeout(() => {
      this.spinner = true;
    }, 2000);
  }

  private searchFormInit() {
    this.searchingForm = this.formBuilder.group({
      // visitorToday: [''],
      visitorName: ['', Validators.required],
    });
    this.filteredOptions = this.searchingForm.controls[
      'visitorName'
    ].valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.visitorName)),
      map((visitorName) =>
        visitorName ? this._filter(visitorName) : this.searchVisitors.slice()
      )
    );
  }

  get formControl() {
    return this.searchingForm.controls;
  }

  private _filter(visitorName: any): inputVisitor[] {
    const filterValue = visitorName.toLowerCase();
    this.visitorService.getVisitors().subscribe((res: any) => {
      this.searchVisitors = res;
    });
    return this.searchVisitors.filter((item) =>
      item.visitorName.toLowerCase().includes(filterValue)
    );
  }

  public getVisitor() {
    this.visitorService.getVisitors().subscribe((res: any) => {
      this.visitors = new MatTableDataSource<inputVisitor>(res);
      this.visitors.paginator = this.paginator;
    });
  }

  public onSearch() {
    if (this.formControl['visitorName'].valid === false) {
      this.errorSearch = true;
      setTimeout(() => {
        this.errorSearch = false;
      }, 2000);
    } else {
      const search: IVisitor = {
        visitorName: this.formControl['visitorName'].value,
      };
      this.visitorService.searchByName(search.visitorName).subscribe(
        (res: any) => {
          if (res.length < 1) {
            this.errorNoData = true;
          } else {
            this.showSearching = true;
            this.searchedVisitors = new MatTableDataSource<inputVisitor>(res);
            this.searchedVisitors.paginator = this.paginator;
          }
        },
        () => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Please Fill Match Form',
            showConfirmButton: false,
            timer: 2500,
          });
        }
      );
    }
  }

  public onBackList() {
    this.showSearching = false;
    this.errorNoData = false;
  }

  public onBack() {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css'],
})
export class InputVisitorDetailsComponent implements OnInit {
  visitorRegister = false;
  visitorList = false;
  visitorSetting = false;
  visitorImport = false;
  addNewVisitors: FormGroup;
  polikliniks: any[] = [
    { name: 'General practitioners' },
    { name: 'Obstetricians' },
    { name: 'Dental Specialist' },
    { name: 'Internal Medicine Specialist' },
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.formVisitorsInit();
  }

  public onVisitorRegister() {
      this.visitorRegister = false;
      this.visitorList = false;
      this.visitorSetting = false;
      this.visitorImport = false;
  }
  public onvisitorList() {
    this.visitorRegister = true;
    this.visitorList = true;
    this.visitorSetting = false;
    this.visitorImport = false;
  }
  public onvisitorSetting() {
    this.visitorRegister = true;
    this.visitorList = false;
    this.visitorSetting = true;
    this.visitorImport = false;
  }
  public onvisitorImport() {
    this.visitorRegister = true;
    this.visitorList = false;
    this.visitorSetting = false;
    this.visitorImport = true;
  }

  public formVisitorsInit() {
    this.addNewVisitors = this.formBuilder.group({
      nameVisitor: ['', Validators.required],
      birthVisitor: ['', Validators.required],
      ageVisitor: ['', Validators.required],
      contactVisitor: ['', Validators.required],
      poliklinik: ['', Validators.required],
      weightVisitor: ['', Validators.required],
      heightVisitor: ['', Validators.required],
      bloodVisitor: ['', Validators.required],
      adres1Visitor: ['', Validators.required],
      adres2Visitor: [''],
      anamnesisVisitor: ['', Validators.required],
      treatmentVisitor: [''],
    });
  }

  public onBack() {
    this.router.navigate(['/']);
  }

  public onSubmit() {
    console.log(this.addNewVisitors);
  }
}

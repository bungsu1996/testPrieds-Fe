import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import listClinic from '../interface/IClinic';
import inputVisitor from '../interface/IVisitors';
import { ClinicService } from '../services/clinic.service';
import { VisitorsService } from '../services/visitors.service';

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
  clinics: listClinic[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clinicService: ClinicService,
    private visitorService: VisitorsService
  ) {}

  ngOnInit(): void {
    this.formVisitorsInit();
    this.getClinics();
  }

  public getClinics() {
    this.clinicService.getClinic().subscribe((res: any) => {
      this.clinics = res;
    });
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
      visitorName: ['', Validators.required],
      visitorBirthDate: ['', Validators.required],
      visitorAge: ['', Validators.required],
      visitorContact: ['', Validators.required],
      clinic: ['', Validators.required],
      visitorWeight: ['', Validators.required],
      visitorHeight: ['', Validators.required],
      visitorBlood: ['', Validators.required],
      visitorAdres: ['', Validators.required],
      visitorAdres2: [''],
      visitorAnamnesis: ['', Validators.required],
      visitorTreatment: [''],
    });
  }

  get ControlForm() {
    return this.addNewVisitors.controls;
  }

  public onSubmit() {
    const visitors: inputVisitor = {
      visitorName: this.ControlForm['visitorName'].value,
      visitorBirthDate: this.ControlForm['visitorBirthDate'].value,
      visitorAge: this.ControlForm['visitorAge'].value,
      visitorContact: this.ControlForm['visitorContact'].value,
      clinic: this.ControlForm['clinic'].value,
      visitorWeight: this.ControlForm['visitorWeight'].value,
      visitorHeight: this.ControlForm['visitorHeight'].value,
      visitorBlood: this.ControlForm['visitorBlood'].value,
      visitorAdres: this.ControlForm['visitorAdres'].value,
      visitorAdres2: this.ControlForm['visitorAdres2'].value,
      visitorAnamnesis: this.ControlForm['visitorAnamnesis'].value,
      visitorTreatment: this.ControlForm['visitorTreatment'].value,
    };
    this.visitorService
      .inputNewVisitor(
        visitors.visitorName,
        visitors.visitorBirthDate,
        visitors.visitorAge,
        visitors.visitorContact,
        visitors.clinic,
        visitors.visitorWeight,
        visitors.visitorHeight,
        visitors.visitorBlood,
        visitors.visitorAdres,
        visitors.visitorAdres2,
        visitors.visitorAnamnesis,
        visitors.visitorTreatment
      )
      .subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Succes to Input New Visitor',
            width: '20rem',
            showConfirmButton: true,
            timer: 2000,
          });
          this.router.navigate(['/visitor-list']);
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Failed to Input Visitor',
            width: '20rem',
            showConfirmButton: true,
            timer: 2000,
          });
        }
      );
  }

  public onBack() {
    this.router.navigate(['/']);
  }
}

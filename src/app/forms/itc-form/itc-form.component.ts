import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import data from '../../../assets/data.json';
import { forbiddenVersionValidator } from '../validator';


@Component({
  selector: 'app-itc-form',
  templateUrl: './itc-form.component.html',
  styleUrls: ['./itc-form.component.scss']
})
export class ItcFormComponent implements OnInit {

  fields = data.forms.itc;
  itcForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    provider: new FormControl('', [Validators.required]),
    version: new FormControl('', [Validators.required, forbiddenVersionValidator()]),
    editon: new FormControl('', [Validators.required])
  });
  
  constructor() { }


  ngOnInit(): void {
  }

  createITC() {
    console.log(this.itcForm.value);
  }

}

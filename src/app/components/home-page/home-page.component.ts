import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RecoverUserInformationComponent} from "./recover-user-information/recover-user-information.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  name= 'charly';
  waifu= '';
  surname= 'vargas q';
  address= 'SAN SEBASTIAN 007';
  single= false;
  age = 31;

  formCommentator: FormGroup = new FormGroup({
    email: new FormControl(''),
    comment: new FormControl('',Validators.required),
  })

  constructor(private modalService: NgbModal) {
  }
  onSubmit() {
    console.log('sending...')
  }
  validToSend() {
    console.log('es valido? : ',this.formCommentator.valid)
    return this.formCommentator.valid
  }
  recoverPersonalInformation() {
    const modalRef = this.modalService.open(RecoverUserInformationComponent, {
      animation: true,
      scrollable: true
    })
    modalRef.componentInstance.name = this.name;
    modalRef.componentInstance.myIdolName.subscribe((value: string) => {
      console.log('valor recibido',value);
      this.waifu = value
    })
  }

  showWaifu() {

  }

}

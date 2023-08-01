import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  name= ''

  formCommentator: FormGroup = new FormGroup({
    email: new FormControl(''),
    comment: new FormControl('',Validators.required),
  })

  onSubmit() {
    console.log('sending...')
  }
  validToSend() {
    console.log('es valido? : ',this.formCommentator.valid)
    return this.formCommentator.valid
  }
}

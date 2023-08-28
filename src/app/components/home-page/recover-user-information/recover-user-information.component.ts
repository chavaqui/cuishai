import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbActiveModal, NgbModal, NgbToast} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-recover-user-information',
  templateUrl: './recover-user-information.component.html',
  styleUrls: ['./recover-user-information.component.scss']
})
export class RecoverUserInformationComponent {
  @Input() name= '';
  @Output() myIdolName: EventEmitter<any> = new EventEmitter();
  formRecoverInfo: FormGroup = new FormGroup( {
    idolName: new FormControl(''),
    proName: new FormControl('')
  })
  constructor(public activeModal: NgbActiveModal) {
  }

  // activeModal() {
  //
  // }
  saveDataCollected() {
    console.log('idol: ', this.formRecoverInfo.get('idolName')?.value)
    this.activeModal.close()
  }
  sendBackMyIdol(idol: string) {
    this.myIdolName.emit(idol)
    this.activeModal.close();
    console.log('send back your idol name bro')
  }
}

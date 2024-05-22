import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent {
  constructor(private modalservice: NgbModal){}
pic: string ="assets/kaged-whey-protein-isolate-rebrand 1.png"
pica: string ="assets/pic2.png"


open(){
  this.modalservice.open(FormComponent)
}
}

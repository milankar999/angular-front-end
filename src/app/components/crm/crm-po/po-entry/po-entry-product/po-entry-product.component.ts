import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-po-entry-product',
  templateUrl: './po-entry-product.component.html',
  styleUrls: ['./po-entry-product.component.css']
})
export class PoEntryProductComponent implements OnInit {
  display='none';
 
  constructor() { }

  ngOnInit() {
  }
 
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';

  }
}

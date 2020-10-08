import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authu.service';
import { HttpprocedService } from 'src/app/services/httpproced.service';

import { Product } from '../httpprocedure/product.model';




@Component({

  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styles: [],

})

export class PreciosComponent implements OnInit{

  showTable: boolean;

  constructor(public auth: AuthService, private httpprocd: HttpprocedService) {

  }
  getProducts(): Product[]{
    return this.httpprocd.getProducts();
  }

  imprimir() {
    this.showTable = true;
  }
 
  ngOnInit(): void {
  }


}

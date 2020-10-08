import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from 'rxjs/operators';
import { Products } from '../httpprocedure/products.model';
import { Product } from '../httpprocedure/product.model';
import { AuthService } from 'src/app/services/authu.service';
import { HttpprocedService } from 'src/app/services/httpproced.service';


export const RES_URL = new InjectionToken('rest_url');

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
})



export class ReportesComponent implements OnInit {
  product: Product = new Product();
  products: Product[] = new Array<Product>();
  constructor(public auth: AuthService, private httpproced: HttpprocedService) { }

  submitForm(form: NgForm) {
    if (form.valid) {
    this.httpproced.saveProduct(this.product);
    this.product = new Product();
    form.reset();
    }
    }
 
  resetForm() {
    this.product = new Product();
    }
  ngOnInit(): void {
  }

}

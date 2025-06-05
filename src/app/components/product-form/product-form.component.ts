import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
 product = {
    name: '',
    price: 0,
    description: ''
  };
   constructor(private productService: ProductService, private router: Router) {}


    onSubmit() {
    this.productService.createProduct(this.product).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error('Error:', err)
    });
  }
}

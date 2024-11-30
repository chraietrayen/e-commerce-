import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for directives like *ngIf and *ngFor
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for reactive forms

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule, ReactiveFormsModule]  // Add ReactiveFormsModule here for form handling
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      payment: ['credit-card', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Handle form submission
  submitOrder() {
    if (this.checkoutForm.valid) {
      console.log('Order submitted', this.checkoutForm.value);
      // Redirect to a confirmation page or show success message
      this.router.navigate(['/']);
    }
  }
}

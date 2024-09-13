// src/app/driving-license-registration/driving-license-registration.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driving-license-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './driving-license-registration.component.html',
  styleUrls: ['./driving-license-registration.component.css'],
})
export class DrivingLicenseRegistrationComponent {
  fathersName = '';
  mothersName = '';
  address = '';
  phoneNumber = '';
  email = '';
  governmentIdProof: File | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.governmentIdProof = file;
    } else {
      alert('Please upload a valid PDF file.');
    }
  }

  onSubmit() {
    if (this.governmentIdProof) {
      const formData = new FormData();
      formData.append('fathersName', this.fathersName);
      formData.append('mothersName', this.mothersName);
      formData.append('address', this.address);
      formData.append('phoneNumber', this.phoneNumber);
      formData.append('email', this.email);
      formData.append('governmentIdProof', this.governmentIdProof, this.governmentIdProof.name);

      // Handle form submission, e.g., send to a server
      console.log('Form submitted successfully!', formData);
    } else {
      alert('Please upload a government ID proof as a PDF.');
    }
  }
}

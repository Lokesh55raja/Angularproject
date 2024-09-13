// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrivingLicenseRegistrationComponent } from "./driving-license-registration/driving-license-registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrivingLicenseRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SSLCertificates';
}


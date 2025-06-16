import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [RouterLink, SecondaryButtonComponent],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css',
})
export class CertificadoComponent {}

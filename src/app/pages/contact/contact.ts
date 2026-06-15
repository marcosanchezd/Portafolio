import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private http = inject(HttpClient);

  formData = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  };

  enviando = false;
  enviado = false;
  error = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.enviando = true;
    this.enviado = false;
    this.error = false;

    this.http.post('http://localhost:3000/api/contact', this.formData).subscribe({
      next: () => {
        this.enviando = false;
        this.enviado = true;
        form.reset();
      },
      error: () => {
        this.enviando = false;
        this.error = true;
      },
    });
  }
}

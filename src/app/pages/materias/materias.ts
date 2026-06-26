import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Materia {
  id: string;
  nombre: string;
  icon: string;
  descripcion: string;
  color: string;
}

@Component({
  selector: 'app-materias',
  imports: [RouterLink],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias {
  materias: Materia[] = [
    { id: 'programacion-web', nombre: 'Programación Web', icon: 'fa-globe', descripcion: 'Desarrollo de aplicaciones web modernas con HTML, CSS, JavaScript y frameworks actuales.', color: '#2563eb' },
    { id: 'bases-de-datos', nombre: 'Bases de Datos', icon: 'fa-database', descripcion: 'Diseño, administración y optimización de bases de datos relacionales y NoSQL.', color: '#16a34a' },
    { id: 'redes', nombre: 'Redes', icon: 'fa-network-wired', descripcion: 'Fundamentos de redes de computadoras, protocolos, seguridad y administración.', color: '#9333ea' },
    { id: 'ingenieria-de-software', nombre: 'Ingeniería de Software', icon: 'fa-diagram-project', descripcion: 'Metodologías, patrones de diseño y buenas prácticas para el desarrollo de software.', color: '#ea580c' },
    { id: 'matematicas', nombre: 'Matemáticas', icon: 'fa-square-root-variable', descripcion: 'Álgebra lineal, cálculo y matemáticas discretas aplicadas a la computación.', color: '#0891b2' },
  ];
}

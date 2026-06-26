import { Component } from '@angular/core';

interface Habilidad { nombre: string; nivel: number; icon: string; categoria: string; }

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  habilidades: Habilidad[] = [
    { nombre: 'HTML / CSS',    nivel: 90, icon: 'fa-code',          categoria: 'Frontend' },
    { nombre: 'JavaScript',    nivel: 82, icon: 'fa-js',            categoria: 'Frontend' },
    { nombre: 'Angular',       nivel: 85, icon: 'fa-a',             categoria: 'Frontend' },
    { nombre: 'Node.js',       nivel: 78, icon: 'fa-server',        categoria: 'Backend'  },
    { nombre: 'Python',        nivel: 75, icon: 'fa-python',        categoria: 'Backend'  },
    { nombre: 'Java / C#',     nivel: 70, icon: 'fa-mug-hot',       categoria: 'Backend'  },
    { nombre: 'SQL',           nivel: 80, icon: 'fa-database',      categoria: 'Datos'    },
    { nombre: 'Git',           nivel: 85, icon: 'fa-code-branch',   categoria: 'Herramientas' },
    { nombre: 'Linux / Redes', nivel: 72, icon: 'fa-terminal',      categoria: 'Infraestructura' },
    { nombre: 'Cloud / Docker',nivel: 65, icon: 'fa-cloud',         categoria: 'Infraestructura' },
  ];

  categorias = [...new Set(this.habilidades.map(h => h.categoria))];

  porCategoria(cat: string) {
    return this.habilidades.filter(h => h.categoria === cat);
  }
}

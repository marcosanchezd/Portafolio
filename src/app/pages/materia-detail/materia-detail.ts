import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Tab { id: string; label: string; icon: string; }

@Component({
  selector: 'app-materia-detail',
  imports: [RouterLink],
  templateUrl: './materia-detail.html',
  styleUrl: './materia-detail.css',
})
export class MateriaDetail implements OnInit {
  materiaId = '';
  activeTab = 'descripcion';

  tabs: Tab[] = [
    { id: 'descripcion',  label: 'Descripción',        icon: 'fa-circle-info' },
    { id: 'apuntes',      label: 'Apuntes',             icon: 'fa-note-sticky' },
    { id: 'presentaciones', label: 'Presentaciones',    icon: 'fa-file-powerpoint' },
    { id: 'tareas',       label: 'Tareas',              icon: 'fa-list-check' },
    { id: 'practicas',    label: 'Prácticas',           icon: 'fa-flask' },
    { id: 'recursos',     label: 'Recursos',            icon: 'fa-link' },
    { id: 'videos',       label: 'Videos',              icon: 'fa-video' },
    { id: 'bibliografia', label: 'Bibliografía',        icon: 'fa-book-open' },
    { id: 'descargas',    label: 'Descargas',           icon: 'fa-download' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.materiaId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  get nombre(): string {
    return this.materiaId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}

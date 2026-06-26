import { Component } from '@angular/core';

interface Proyecto {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  estado: string;
  estadoColor: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  proyectos: Proyecto[] = [
    {
      nombre: 'Sistema de Monitoreo de Flota',
      descripcion: 'Plataforma web para el seguimiento en tiempo real de unidades vehiculares, con trazabilidad operativa y reportes automáticos.',
      tecnologias: ['Angular', 'Node.js', 'PostgreSQL', 'WebSocket'],
      estado: 'Completado', estadoColor: 'success',
      icon: 'fa-truck', color: '#2563eb',
    },
    {
      nombre: 'Portal de Transformación Digital',
      descripcion: 'Sistema integral para la gestión de iniciativas digitales, seguimiento de KPIs y automatización de reportes ejecutivos.',
      tecnologias: ['Angular', 'Python', 'FastAPI', 'Power BI'],
      estado: 'En progreso', estadoColor: 'warning',
      icon: 'fa-chart-line', color: '#16a34a',
    },
    {
      nombre: 'Chatbot Corporativo con IA',
      descripcion: 'Asistente virtual para consultas internas sobre políticas, procesos y base de conocimiento de la empresa.',
      tecnologias: ['Python', 'OpenAI API', 'Node.js', 'React'],
      estado: 'Completado', estadoColor: 'success',
      icon: 'fa-robot', color: '#9333ea',
    },
    {
      nombre: 'ERP Modular',
      descripcion: 'Migración y modernización de sistema ERP legado a plataforma web modular con integración de terceros.',
      tecnologias: ['C#', '.NET', 'Angular', 'SQL Server'],
      estado: 'En progreso', estadoColor: 'warning',
      icon: 'fa-cubes', color: '#ea580c',
    },
    {
      nombre: 'Dashboard de Analítica',
      descripcion: 'Panel de control ejecutivo con visualizaciones interactivas para la toma de decisiones basada en datos.',
      tecnologias: ['Python', 'Pandas', 'D3.js', 'PostgreSQL'],
      estado: 'Completado', estadoColor: 'success',
      icon: 'fa-chart-bar', color: '#0891b2',
    },
    {
      nombre: 'App de Gestión de Incidencias',
      descripcion: 'Sistema de tickets y seguimiento de incidencias de TI con niveles de prioridad, SLA y notificaciones.',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      estado: 'Planeación', estadoColor: 'info',
      icon: 'fa-bug', color: '#db2777',
    },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  imports: [],
  templateUrl: './curriculum.html',
  styleUrl: './curriculum.css',
})
export class Curriculum {
  experiencia = [
    { cargo: 'Gerente de Sistemas', empresa: 'Grupo Algebasa', periodo: 'Ene 2026 – Actual', descripcion: 'Liderazgo de estrategia tecnológica, operación, desarrollo y administración de ERP.' },
    { cargo: 'Gerente de Innovación Tecnológica', empresa: 'Transportes Castores', periodo: '2020 – 2026', descripcion: 'Transformación digital, modernización de sistemas y automatización de procesos.' },
    { cargo: 'Analista Desarrollador', empresa: 'Transportes Castores', periodo: '2017 – 2020', descripcion: 'Desarrollo de aplicaciones web con Angular, Node.js, Python, Java y C#.' },
    { cargo: 'Profesor de Asignatura', empresa: 'Universidades de Guanajuato', periodo: '2011 – 2020', descripcion: 'Impartición de programación y matemáticas en carreras de Ingeniería.' },
  ];

  formacion = [
    { titulo: 'Doctorado en Ciencias Ópticas', institucion: 'Centro de Investigación en Óptica', periodo: '2012 – 2017' },
    { titulo: 'Maestría en Ciencias Computacionales', institucion: 'CICESE Ensenada', periodo: '2008 – 2010' },
    { titulo: 'Ingeniería en Ciencias Computacionales', institucion: 'BUAP', periodo: '2001 – 2007' },
    { titulo: 'Técnico Superior en Telemática', institucion: 'Universidad Tecnológica de Puebla', periodo: '2003 – 2005' },
  ];

  logros = [
    'Senté las bases para la adopción de IA y analítica avanzada en la organización.',
    'Introduje metodologías ágiles para una ejecución más eficiente de proyectos tecnológicos.',
    'Lideré la transformación digital generando ahorros operativos significativos.',
  ];
}

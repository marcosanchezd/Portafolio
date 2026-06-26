import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Materias } from './pages/materias/materias';
import { MateriaDetail } from './pages/materia-detail/materia-detail';
import { Proyectos } from './pages/proyectos/proyectos';
import { Habilidades } from './pages/habilidades/habilidades';
import { Certificados } from './pages/certificados/certificados';
import { Curriculum } from './pages/curriculum/curriculum';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '',            component: Home },
  { path: 'about',       component: About },
  { path: 'materias',    component: Materias },
  { path: 'materias/:id', component: MateriaDetail },
  { path: 'proyectos',   component: Proyectos },
  { path: 'habilidades', component: Habilidades },
  { path: 'certificados', component: Certificados },
  { path: 'curriculum',  component: Curriculum },
  { path: 'contact',     component: Contact },
];

import { Component } from '@angular/core';

interface Certificado { nombre: string; institucion: string; fecha: string; icon: string; color: string; }

@Component({
  selector: 'app-certificados',
  imports: [],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {
  certificados: Certificado[] = [
    { nombre: 'Power Skill Manager',          institucion: 'ICAMI',                  fecha: '2025', icon: 'fa-people-group',  color: '#2563eb' },
    { nombre: 'Tec Beyond — Transformación Digital', institucion: 'Tec de Monterrey',fecha: '2023', icon: 'fa-rocket',        color: '#16a34a' },
    { nombre: 'Scrum Master Certificado',     institucion: 'Scrum Alliance',          fecha: '2022', icon: 'fa-arrows-spin',   color: '#9333ea' },
    { nombre: 'Administración de Redes Cisco',institucion: 'Cisco Networking Academy',fecha: '2021', icon: 'fa-network-wired', color: '#ea580c' },
    { nombre: 'Cloud Foundations',            institucion: 'AWS Training',            fecha: '2023', icon: 'fa-cloud',         color: '#0891b2' },
    { nombre: 'Python para Data Science',     institucion: 'Coursera / IBM',          fecha: '2022', icon: 'fa-python',        color: '#db2777' },
  ];
}

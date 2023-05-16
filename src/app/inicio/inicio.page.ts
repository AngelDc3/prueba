import { Component, OnInit } from '@angular/core';

interface note {
  Grupo: string,
  Tarea: string,
  completo: boolean
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:note[]=[
    {
      Grupo: "Para hoy",
      Tarea: "Bañar al perro",
      completo: false
    },
    {
      Grupo: "Proyecto",
      Tarea: "Terminar pruebas",
      completo: false
    },
    {
      Grupo: "Personal",
      Tarea: "Caminata diaria",
      completo: false
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

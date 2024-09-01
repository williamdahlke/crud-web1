import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrl: './editar-aluno.component.css'
})
export class EditarAlunoComponent implements OnInit {
  constructor(service : AlunoService,
              route : ActivatedRoute,
              router : Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

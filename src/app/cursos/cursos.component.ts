import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Atributos
  public vetorCursos:Curso[] = [];
  public curso:Curso= new Curso("", 0);
  private id:number = 0;


  //Construtor
  constructor(private servico:CursosService) { }

  //Inicialização
  ngOnInit(): void {
    this.curso = new Curso("", 0);
    this.listarBd();
  }
  
  cadastrar(){
    this.servico.cadastrarCurso(this.curso);
    this.curso = new Curso("", 0);
  }

  excluir(id:number){
    this.servico.excluirCurso(id);
  }

  alterar(id:number){
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
    )
    // this.servico.alterarCurso(id, this.curso)
  }

  listarBd(){
    this.servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetorCursos = res;
      }
    )
  }

}

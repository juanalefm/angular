import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './Curso';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //URL BASE
  url = 'http://localhost/api/php/listar.php'

  constructor(private http:HttpClient) { }

  // Vetor de cursos
  vetorCursos:Curso[] = []

  // Cadastrar Cursos
  public cadastrarCurso(curso: Curso){
    this.vetorCursos.push(curso);
  }

  // Listar Cursos
  public listarCursos(){
    return this.vetorCursos;
  }

  // Alteração de cursos
  public alterarCurso(id:number, curso:Curso){
    this.vetorCursos[id] = curso;
  }

  // Exclusão de cursos
  public excluirCurso(id:number){
    this.vetorCursos.splice(id, 1);
  }

  //Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url).pipe(
      map((res: any) => {
        console.log('res -> ', res);

        this.vetorCursos = res['cursos'];
        return this.vetorCursos;
      })
    )
  }
}

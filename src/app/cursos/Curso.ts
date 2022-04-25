export class Curso {

  //Atributos
  public nomeCurso:string = '';
  public valorCurso:number = 0;


  constructor(nome: string, valor: number){
    this.nomeCurso = nome;
    this.valorCurso = valor;
  }
}
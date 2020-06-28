import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmeModel } from '../models/filme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

constructor(
  private http : HttpClient
) { }


public createFilme(){
  
}

public getFilmes(){
  return this.http.get<FilmeModel[]>(environment.apiUrlFilmes);
}

public updateFilme(){

}

public deleteFilme(idFilme){
  console.log(idFilme)
  return this.http.delete(environment.apiUrlFilmes.concat('/'+idFilme));
}




}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmeModel } from '../models/filme';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(
    private http: HttpClient
  ) { }


  public createFilme(filme: FilmeModel) {
    return this.http.post<FilmeModel>(environment.apiUrlFilmes,  filme)
  }

  public getFilmes() {
    return this.http.get<FilmeModel[]>(environment.apiUrlFilmes);
  }

  public getFilmeById(filmeId) {
    return this.http.get<FilmeModel>(environment.apiUrlFilmes.concat('/'+ filmeId));
  }

  public updateFilme(filme: FilmeModel) {
    return this.http.put(environment.apiUrlFilmes.concat('/'+ Number(filme.id)), filme);
  }

  public deleteFilme(filmeId) {
    return this.http.delete(environment.apiUrlFilmes.concat('/' + filmeId));
  }

}

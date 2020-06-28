import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UtilsService{

    constructor(private http : HttpClient){

    }

    getGeneros(){
        return this.http.get<string[]>(environment.apiUrlUtilitarios.concat('generos'));
    }

    getidiomas(){
        return this.http.get<string[]>(environment.apiUrlUtilitarios.concat('idiomas'));
    }


}
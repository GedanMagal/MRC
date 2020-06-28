import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-cad-filme',
  templateUrl: './cad-filme.component.html',
  styleUrls: ['./cad-filme.component.scss']
})
export class CadFilmeComponent implements OnInit {

  formCad: FormGroup;
  generos: Observable<string[]>;
  idiomas: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private utilService : UtilsService
    
    ) {
    this.formCad = this.fb.group(
      {
        titulo: ['', Validators.compose([
          Validators.required
        ])],
        sinopse: ['', Validators.compose([
          Validators.required
        ])],
        genero: [null, Validators.compose([
          Validators.required
        ])],
        idioma: [null, Validators.compose([
          Validators.required
        ])],
        legendado: ['', Validators.compose([
          Validators.required
        ])],
        avaliacao: ['', Validators.compose([
          Validators.required,
          Validators.min(1),
          Validators.max(5)
        ])],
        diretor: [''],
        imdbLink: [''],
        dtLancamento: ['']
      });

  }

  ngOnInit() {
    this.generos = this.utilService.getGeneros();
    this.idiomas = this.utilService.getidiomas();
  }

}


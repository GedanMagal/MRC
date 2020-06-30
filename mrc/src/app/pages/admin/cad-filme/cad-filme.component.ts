import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { UtilsService } from 'src/app/services/utils.service';
import { FilmeService } from 'src/app/services/filme.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmeModel } from 'src/app/models/filme';

@Component({
  selector: 'app-cad-filme',
  templateUrl: './cad-filme.component.html',
  styleUrls: ['./cad-filme.component.scss']
})
export class CadFilmeComponent implements OnInit {

  formCad: FormGroup;
  generos: Observable<string[]>;
  idiomas: Observable<string[]>;
  inscricao: Subscription;
  filmeId;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private utilService: UtilsService,
    private filmeService: FilmeService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.formCad = this.fb.group(
      {
        titulo: ['', Validators.compose([
          Validators.required
        ])],
        sinopse: ['', Validators.compose([
          Validators.required
        ])],
        genero: ['', Validators.compose([
          Validators.required
        ])],
        idioma: ['', Validators.compose([
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

    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.filmeId = params.filmeId;
        if (this.filmeId != undefined) {
          this.getFilmeById();
        }
      });

  }

  NgOnDestroy() {
    this.inscricao.unsubscribe();
  }

  addFilme() {

    if (this.formCad.invalid) {
      this.toastr.error("Preencha todos os campos corretamente");
      return;
    }

    if (this.filmeId != undefined) {

      let filme: FilmeModel = {
        id: Number(this.filmeId),
        avaliacao: this.formCad.controls.avaliacao.value,
        genero: this.formCad.controls.genero.value,
        idioma: this.formCad.controls.idioma.value,
        legendado: this.formCad.controls.legendado.value,
        sinopse: this.formCad.controls.sinopse.value,
        titulo: this.formCad.controls.titulo.value,
        diretor: this.formCad.controls.diretor.value,
        dtLancamento: this.formCad.controls.dtLancamento.value,
        imdbLink: this.formCad.controls.imdbLink.value
      };
      this.filmeService.updateFilme(filme).subscribe(data => {
        this.toastr.success("Atualização realizada com sucesso!");
        this.router.navigateByUrl('/');
      });

    } else {
      this.filmeService.createFilme(this.formCad.value).subscribe(data => {
        this.toastr.success(this.formCad.get('titulo').value + " Adicionado com sucesso");
        this.resetForm();
      }, (err: HttpErrorResponse) => {
        this.toastr.error("Erro ao cadastrar midia");
      })
    }

  }

  resetForm() {
    this.formCad.reset();
    this.formCad.controls.genero.setValue('');
    this.formCad.controls.idioma.setValue('');
  }

  back() {
    this.location.back();
  }

  getFilmeById() {
    this.filmeService.getFilmeById(this.filmeId).subscribe(data => {
      this.formCad.controls.titulo.setValue(data.titulo);
      this.formCad.controls.sinopse.setValue(data.sinopse);
      this.formCad.controls.legendado.setValue(data.legendado);
      this.formCad.controls.imdbLink.setValue(data.imdbLink);
      this.formCad.controls.idioma.setValue(data.idioma);
      this.formCad.controls.genero.setValue(data.genero);
      this.formCad.controls.dtLancamento.setValue(data.dtLancamento);
      this.formCad.controls.diretor.setValue(data.diretor);
      this.formCad.controls.avaliacao.setValue(Number(data.avaliacao));
    });
  }



}


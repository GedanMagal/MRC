import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { FilmeModel } from 'src/app/models/filme';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  filmes: Array<FilmeModel> = [];
  filter: string;


  constructor(
    private filmeService: FilmeService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.getFilmes();
  }

  removeFilme(filme: FilmeModel) {
    this.filmeService.deleteFilme(filme.id).subscribe(data => {
      this.toastr.success(filme.titulo + " Excluido com sucesso!");
      this.getFilmes();

    }, (err) => {
      console.log(err);
    });
  }


  getFilmes() {
    this.filmeService.getFilmes().subscribe(data => {
      this.filmes = data;
    });
  }


  openAccordion(i) {
    let element: any;
    element = document.getElementById('collapse' + i);
    if (element.classList.contains('show')) {
      element.classList.remove('show');
    } else {
      element.classList.add('show');

    }
  }

  filterList() {
    let newArray = this.filmes.filter(el => {
      el.titulo === this.filter;
    });
    console.log(newArray);
  }



}

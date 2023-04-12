import { Component, OnInit } from '@angular/core';
import { RequestLoggerService } from './services/request-logger.service';
import { RequestLogger } from './models/request-logger';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'log-request-services';
  requestLoggerData: RequestLogger[] = []

  pageActual: number = 1;
  itemByPage: number = 7
  totalRegistros!: number;
  noPage: number = 1

  filtro = {
    desde: null,
    hasta: null
  };

  constructor(private requestLoggerServices: RequestLoggerService) { }


  ngOnInit(): void {

    this.requestLoggerServices.getRequestLogs(this.filtro.desde, this.filtro.hasta).subscribe({
      next: (data: RequestLogger[]) => {
        this.requestLoggerData = data
      }
    })
  }

  pageChanged(noPage: any) {
    console.log('click');
  }

  consultar(){
    this.requestLoggerServices.getRequestLogs(this.filtro.desde, this.filtro.hasta).subscribe({
      next: (data: RequestLogger[]) => {
        console.log(data);
        this.requestLoggerData = data
      }
    })
  }

  limpiarCampos(){
    this.filtro = {
      desde: null,
      hasta: null
    };
    this.consultar()
  }
}

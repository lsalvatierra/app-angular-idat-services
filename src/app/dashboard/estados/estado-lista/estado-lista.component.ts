import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from '../estado';
import { EstadoService } from '../estado.service';

@Component({
  selector: 'app-estado-lista',
  templateUrl: './estado-lista.component.html',
  styleUrls: ['./estado-lista.component.scss']
})
export class EstadoListaComponent implements OnInit {

  estados: Estado[] = [];
  displayedColumns: string[] = ['idestado', 'descestado'];

  constructor(
    private estadoService: EstadoService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.estadoService.listarEstados()
    .subscribe(
      (data) => {
        console.log('this.estados', data);
        this.estados = data;
      },
      (error) => {
        this.snackBar.open('Error al consumir API', 'OK', {duration: 5000})
      });
    
  }
  onNavigateToStateDetail(estadoId: string): void {
    this.router.navigate([estadoId], { relativeTo: this.route });
  }
}

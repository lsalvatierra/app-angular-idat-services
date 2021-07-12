import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estado-detalle',
  templateUrl: './estado-detalle.component.html',
  styleUrls: ['./estado-detalle.component.scss']
})
export class EstadoDetalleComponent implements OnInit {

  estadoId: string | null = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.estadoId = this.router.snapshot.paramMap.get('id');
  }

}

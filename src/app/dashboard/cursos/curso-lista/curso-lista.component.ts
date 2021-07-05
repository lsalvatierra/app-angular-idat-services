import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.scss']
})
export class CursoListaComponent implements OnInit {


  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onNavigateToProductDetail(productId: string): void {
    this.router.navigate([productId], { relativeTo: this.route });
  }

}

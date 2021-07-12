import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private route: ActivatedRoute, 
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onNavigateToHomePage(): void {
    this.router.navigate(['home'], { relativeTo: this.route });
  }

  onNavigateToCursoPage(): void {
    this.router.navigate(['curso'], { relativeTo: this.route });
  }
  
  onNavigateToStatePage(): void {
    this.router.navigate(['estado'], { relativeTo: this.route });
  }
  onLogout(): void{
    //sessionStorage.clear();
    this.authService.logout();
    this.router.navigate(['login']);
  }

}

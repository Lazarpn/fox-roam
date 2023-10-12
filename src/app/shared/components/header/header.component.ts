import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LS_USER_ROLES } from '../../constants';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'fr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  role: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem(LS_USER_ROLES) || null;
    this.isAuthenticated = this.authService.authenticated();

    this.authService.userRole.subscribe((userRole: string) => {
      this.isAuthenticated = this.authService.authenticated();
      this.role = userRole;
    });
  }

  onLogoClicked() {
    this.router.navigate(['/arrangements'], { relativeTo: this.route });
  }
}

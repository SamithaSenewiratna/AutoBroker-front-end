import { Component } from '@angular/core';
import { FooterComponent } from "../../../common/footer/footer.component";
import { NavbarComponent } from "../../../common/navbar/navbar.component";
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [FooterComponent, NavbarComponent, AdminSideBarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}

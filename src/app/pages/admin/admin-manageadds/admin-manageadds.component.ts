import { Component } from '@angular/core';
import { AdminSideBarComponent } from "../admin-side-bar/admin-side-bar.component";
import { FooterComponent } from "../../../common/footer/footer.component";

@Component({
  selector: 'app-admin-manageadds',
  imports: [AdminSideBarComponent, FooterComponent],
  templateUrl: './admin-manageadds.component.html',
  styleUrl: './admin-manageadds.component.css'
})
export class AdminManageaddsComponent {

}

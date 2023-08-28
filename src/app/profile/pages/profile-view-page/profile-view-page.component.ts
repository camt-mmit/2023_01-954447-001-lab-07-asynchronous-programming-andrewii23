import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataService } from '../../services/profile-data.service';
import { ProfileViewComponent } from '../../profile-view/profile-view.component';

@Component({
  selector: 'app-profile-view-page',
  standalone: true,
  imports: [CommonModule, ProfileViewComponent],
  templateUrl: './profile-view-page.component.html',
  styleUrls: ['./profile-view-page.component.scss']
})
export class ProfileViewPageComponent {
  private readonly profileData = inject(ProfileDataService);

  protected readonly data$ = this.profileData
    .getData()
    .then((value) => value ?? ('undefined' as const));

}

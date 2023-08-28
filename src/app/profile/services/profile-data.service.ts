import { Injectable } from '@angular/core';
import { Profile } from '../models';

declare var localStorage: Storage;
const dataKey = 'profile-data' as const;

@Injectable({
  providedIn: 'root',
})
export class ProfileDataService {
  async getData(): Promise<Profile | null> {
    return JSON.parse(localStorage.getItem(dataKey) ?? 'null');
  }

  async setData(data: Profile): Promise<void> {
    localStorage.setItem(dataKey, JSON.stringify(data));
  }
}

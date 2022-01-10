import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {
  user: any
  step = 'policy'
  
  constructor(private storage: StorageService) { 
    this.user = this.storage.getItem('user')
  }

  ngOnInit(): void {
  }

}

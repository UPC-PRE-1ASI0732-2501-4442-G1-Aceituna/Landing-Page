import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  imports: [
    NgForOf,
    NgClass,
    TranslateModule
  ],
  standalone: true
})
export class PlansComponent {
  plans: any[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.loadPlans();
    });

    this.loadPlans();
  }

  loadPlans() {
    this.plans = [
      {
        title: this.translate.instant('plans.freshman.title'),
        price: this.translate.instant('plans.freshman.price'),
        features: [
          this.translate.instant('plans.freshman.features.publications'),
          this.translate.instant('plans.freshman.features.assistance')
        ],
        highlight: 'bg-green-600'
      },
      {
        title: this.translate.instant('plans.undergraduate.title'),
        price: this.translate.instant('plans.undergraduate.price'),
        features: [
          this.translate.instant('plans.undergraduate.features.publications'),
          this.translate.instant('plans.undergraduate.features.assistance'),
          this.translate.instant('plans.undergraduate.features.featuredPublications')
        ],
        highlight: 'bg-yellow-500'
      },
      {
        title: this.translate.instant('plans.graduate.title'),
        price: this.translate.instant('plans.graduate.price'),
        features: [
          this.translate.instant('plans.graduate.features.publications'),
          this.translate.instant('plans.graduate.features.assistance')
        ],
        highlight: 'bg-blue-600'
      }
    ];
  }
}


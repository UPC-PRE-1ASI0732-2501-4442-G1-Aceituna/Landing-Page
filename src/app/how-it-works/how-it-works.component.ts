import { Component } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';
import {
  faDollarSign,
  faCommentAlt,
  faAward,
  faImage,
  faUser,
  faCertificate,
  faPersonBiking
} from '@fortawesome/free-solid-svg-icons';
import {NgForOf} from "@angular/common";
import {group} from "@angular/animations";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  standalone: true,
  imports: [FaIconComponent, NgForOf, TranslateModule]
})
export class HowItWorksComponent {
  steps: any[] = [];

  constructor(private translate: TranslateService) {
    library.add(faPersonBiking, faUser, faCertificate);

    this.translate.onLangChange.subscribe(() => {
      this.loadSteps();
    });

    this.loadSteps();
  }

  loadSteps() {
    this.steps = [
      {
        icon: faPersonBiking,
        title: this.translate.instant('how-it-works.steps.listYourRide.title'),
        description: this.translate.instant('how-it-works.steps.listYourRide.description')
      },
      {
        icon: faUser,
        title: this.translate.instant('how-it-works.steps.connect.title'),
        description: this.translate.instant('how-it-works.steps.connect.description')
      },
      {
        icon: faCertificate,
        title: this.translate.instant('how-it-works.steps.earnBadges.title'),
        description: this.translate.instant('how-it-works.steps.earnBadges.description')
      }
    ];
  }
}

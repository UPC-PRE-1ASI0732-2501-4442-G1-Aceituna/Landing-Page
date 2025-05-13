import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {HowItWorksComponent} from "./how-it-works/how-it-works.component";
import {PlansComponent} from "./plans/plans.component";
import {AboutComponent} from "./about/about.component";
import {FooterComponent} from "./footer/footer.component";
import {JoinComponent} from "./join/join.component";
import {WhocanuseComponent} from "./whocanuse/whocanuse.component";
import {AppRoutingModule} from "./app-routing.module";
import {ViewportScroller} from "@angular/common";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, HowItWorksComponent, PlansComponent, AboutComponent, FooterComponent, JoinComponent, WhocanuseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private translate: TranslateService) {
    this.translate.setDefaultLang('en');

  }

  ngOnInit() {

    this.translate.use('en');
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.smoothScrollTo(fragment);
        }
      }
    });
  }

  smoothScrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}

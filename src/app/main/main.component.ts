import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  redirectToExternalPage(){
    window.location.href = 'https://happy-tree-09edbd910.5.azurestaticapps.net';
  }
}

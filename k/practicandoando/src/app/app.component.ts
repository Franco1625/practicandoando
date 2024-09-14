import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {SideNavigationBarComponent} from "./public/components/side-navigation-bar/side-navigation-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practicandoando';

  constructor(translator: TranslateService) {
    translator.setDefaultLang('en');
    translator.use('en');
  }
}
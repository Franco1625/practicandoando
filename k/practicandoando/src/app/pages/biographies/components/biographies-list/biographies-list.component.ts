import { Component, OnInit } from '@angular/core';
import {BiographiesApiService} from "../../services/biographies-api.service";
import {Biography} from "../../model/biographies.entity";
import {TranslateModule} from "@ngx-translate/core";

import {
  MatCard,
  MatCardActions,
  MatCardContent, MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-biographies-list',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCard,
    TranslateModule,
    NgIf,
    NgForOf,
    MatCardFooter,
    MatIcon
  ],
  templateUrl: './biographies-list.component.html',
  styleUrls: ['./biographies-list.component.css']
})
export class BiographiesListComponent implements OnInit {
  biographies: Biography[] = [];

  constructor(private biographiesApiService: BiographiesApiService) {}

  ngOnInit(): void {
    this.biographiesApiService.getBiographies().subscribe((data: Biography[]) => {
      this.biographies = data;
    });
  }
}

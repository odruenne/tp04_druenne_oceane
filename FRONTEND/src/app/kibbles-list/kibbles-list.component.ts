import { Component, OnInit } from '@angular/core';
import { KibblesService } from '../kibbles.service';
import { Kibbles } from '../models/kibbles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kibbles-list.component.html',
  styleUrls: ['./kibbles-list.component.css'],
})
export class KibblesList implements OnInit {

  kibbles: Kibbles[];

  constructor(private kibblesService : KibblesService) { }

  ngOnInit() {
    this.kibblesService.kibblesObservable.subscribe(res => this.kibbles = res);
    this.kibblesService.getKibbles('', Infinity);
  }
}
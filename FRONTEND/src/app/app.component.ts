import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KibblesList } from './kibbles-list/kibbles-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { CreditCardsListComponent } from './credit-cards-list/credit-cards-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, KibblesList, SearchEngineComponent,CreditCardFormComponent,CreditCardsListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tp04_druenne_oceane';
  filters = { taste: '', maxPrice: Infinity };

  constructor() {  }
  
}
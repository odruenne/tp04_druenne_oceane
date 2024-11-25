import { Component, OnInit } from '@angular/core';
import { CreditCardService } from '../creditCard.service';
import { CreditCard } from '../models/creditCard';

@Component({
  selector: 'app-credit-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './credit-cards-list.component.html',
  styleUrl: './credit-cards-list.component.css'
})
export class CreditCardsListComponent implements OnInit {

  creditCards: CreditCard[];
  
  constructor(private creditCardService: CreditCardService) {

  }

  ngOnInit() {
    this.creditCardService.getCreditCards();
  }
}

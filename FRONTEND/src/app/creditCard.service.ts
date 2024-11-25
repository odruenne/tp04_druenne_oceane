import { Injectable, signal } from '@angular/core';
import { CreditCard } from './models/creditCard';
@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

private creditCards = signal<CreditCard[]>([]);
    
  constructor() { }

  getCreditCards() {
    return this.creditCards;
  }

  addCreditCard(creditCard: CreditCard) {
    this.creditCards.update(creditCards => [...creditCards, creditCard]);
  }

  deleteCreditCard(index: number) {
    this.creditCards.update(creditCards => creditCards.filter((_, i) => i !== index));
  }
}
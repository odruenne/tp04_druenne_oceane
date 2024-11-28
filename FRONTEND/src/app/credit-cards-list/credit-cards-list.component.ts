import { Component, OnInit, Signal } from '@angular/core';
import { CreditCardService } from '../creditCard.service';
import { CommonModule } from '@angular/common';
import { CreditCard } from '../models/creditCard';
import { TransformToAsteriskPipe } from '../transformToAsterisk.pipe';

@Component({
  selector: 'app-credit-cards-list',
  standalone: true,
  imports: [CommonModule, TransformToAsteriskPipe],
  templateUrl: './credit-cards-list.component.html',
  styleUrl: './credit-cards-list.component.css'
})
export class CreditCardsListComponent implements OnInit {
  
  creditCards: Signal<CreditCard[]>;

  constructor(private creditCardService: CreditCardService) {}

  ngOnInit() {
    this.creditCards = this.creditCardService.getCreditCards();
  }

  onDeleteCreditCard(index: number) {
    this.creditCardService.deleteCreditCard(index);
  }
}
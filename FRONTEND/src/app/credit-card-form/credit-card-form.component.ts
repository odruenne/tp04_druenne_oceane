import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import  {Validators } from '@angular/forms';
import { CreditCard } from '../models/creditCard';
import { CreditCardService } from '../creditCard.service';

@Component({
  selector: 'app-credit-card-form',
  standalone: true,
  imports: [],
  templateUrl: './credit-card-form.component.html',
  styleUrl: './credit-card-form.component.css'
})
export class CreditCardFormComponent implements OnInit, OnDestroy {
  newCreditCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) {
      this.newCreditCardForm = this.formBuilder.group({
        primaryAccountNumber: ['',[Validators.required, Validators.pattern('[0-9]+')]],
        name: ['', [Validators.required, Validators.maxLength(25),Validators.pattern('^[a-zA-Z ]*$')]],
        expirationDate: ['',[Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/\d{4}$')]],
        cardValidationCode: ['',[Validators.required, Validators.maxLength(3),Validators.pattern('[0-9]+')]]
      });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.newCreditCardForm.reset();
  }

  onSubmit() : void {
    const newCreditCard: CreditCard = {
      primaryAccountNumber : this.newCreditCardForm.value.primaryAccountNumber,
      name: this.newCreditCardForm.value.name,
      expirationDate: this.newCreditCardForm.value.expirationDate,
      cardValidationCode: this.newCreditCardForm.value.cardValidationCode
    };

    this.creditCardService.addCreditCard(newCreditCard);
    console.log("new Credit Card: ", newCreditCard);
    this.newCreditCardForm.reset();
  }
}

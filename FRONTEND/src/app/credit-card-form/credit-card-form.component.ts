import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {Validators } from '@angular/forms';
import { CreditCard } from '../models/creditCard';
import { CreditCardService } from '../creditCard.service';
import { CreditCardFormFieldHighlightDirective } from '../credit-card-form-field-highlight.directive';

@Component({
  selector: 'app-credit-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, CreditCardFormFieldHighlightDirective],
  templateUrl: './credit-card-form.component.html',
  styleUrl: './credit-card-form.component.css'
})
export class CreditCardFormComponent {
  newCreditCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) {
      this.newCreditCardForm = this.formBuilder.group({
        primaryAccountNumber: ['',[Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(16), Validators.maxLength(16)]],
        name: ['', [Validators.required, Validators.maxLength(25),Validators.pattern('^[a-zA-Z ]*$')]],
        expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/\\d{2,4}$')]],
        cardValidationCode: ['',[Validators.required, Validators.maxLength(3),Validators.pattern('[0-9]+')]]
      });
  }


  onSubmit(event: Event) : void {
    event.preventDefault();
    if (this.newCreditCardForm.valid) {
      const newCreditCard: CreditCard = {
        primaryAccountNumber : this.newCreditCardForm.value.primaryAccountNumber,
        name: this.newCreditCardForm.value.name,
        expirationDate: this.newCreditCardForm.value.expirationDate,
        cardValidationCode: this.newCreditCardForm.value.cardValidationCode
      };

      this.creditCardService.addCreditCard(newCreditCard);
      this.newCreditCardForm.clearValidators(); 
      this.newCreditCardForm.updateValueAndValidity();
      this.newCreditCardForm.reset();
      
    }
  }
}

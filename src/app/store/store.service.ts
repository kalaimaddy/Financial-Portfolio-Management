import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Investment } from '../core/investment.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private investmentsSubject = new BehaviorSubject<Investment[]>([]);
  investments$: Observable<Investment[]> = this.investmentsSubject.asObservable();

  constructor() {}

  getInvestments(): Observable<Investment[]> {
    return this.investments$;
  }

  addInvestment(newInvestment: Investment): void {
    const currentInvestments = this.investmentsSubject.value;
    this.investmentsSubject.next([...currentInvestments, newInvestment]);
  }

  clearInvestments(): void {
    this.investmentsSubject.next([]);
  }
}

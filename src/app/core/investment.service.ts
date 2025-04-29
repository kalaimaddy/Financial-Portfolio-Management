import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Investment {
  id: number;
  assetType: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  private investmentsSubject = new BehaviorSubject<Investment[]>([]);
  investments$: Observable<Investment[]> = this.investmentsSubject.asObservable();

  constructor() {}

  addInvestment(investment: Investment) {
    const current = this.investmentsSubject.value;
    this.investmentsSubject.next([...current, investment]);
  }

  getInvestments(): Observable<Investment[]> {
    return this.investments$;
  }
}

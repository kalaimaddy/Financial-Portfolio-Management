import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentFormComponent } from './investment-form.component';

const routes: Routes = [{ path: '', component: InvestmentFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentFormRoutingModule { }

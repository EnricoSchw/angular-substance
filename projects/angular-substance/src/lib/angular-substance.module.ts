import { NgModule } from '@angular/core';
import { AngularSubstanceComponent } from './angular-substance.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AngularSubstanceComponent],
  imports: [
     HttpClientModule,
  ],
  exports: [AngularSubstanceComponent]
})
export class AngularSubstanceModule { }

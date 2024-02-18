import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordFormComponent } from './passwordForm/passwordForm.component';

@NgModule({
  declarations: [
    PasswordFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PasswordFormComponent
  ],
  providers: []
})
export class ElementsModule {
}

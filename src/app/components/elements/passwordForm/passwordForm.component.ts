import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passСomplexity } from './passwordForm.directive';

@Component({
  selector: 'app-password-form',
  templateUrl: './passwordForm.component.html',
  styleUrls: ['./passwordForm.component.scss']
})

export class PasswordFormComponent {
  show = true;
  form = new FormGroup({
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        passСomplexity(),
      ],
    }),
  });

  hisLatters() {
    return (/[a-zA-Z]/).test(this.password.value);
  }

  hasDigits() {
    return (/\d/).test(this.password.value);
  }

  hasSymbols() {
    return (/[@$!%*#?&_~]/).test(this.password.value);
  }

  isValud() {
    return this.password.status === 'VALID';
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === ' ' || event.code === 'Space') {
      event.preventDefault();
    }
  }

  togglePass(): void {
    this.show = !this.show;
  }
}

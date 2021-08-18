import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (!control.value) {
      return null;
    }
    const valid = regex.test(control.value);
    return valid ? null : error;
  };
}

function comparePasswords(control: AbstractControl): ValidationErrors {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null 
    : { 'passwordsDiffer': true };
}
function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: FormGroup;
  public errorMessage: string= '';

  functies = [
    {value: 'leerkracht', viewValue: 'Leerkracht'},
    {value: 'logopedist', viewValue: 'Logopedist'},
    {value: 'student', viewValue: 'Student'},
    {value: 'ouder', viewValue: 'Ouder'},
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      functie: ['', Validators.required],
      email: ['', [Validators.required, Validators.email],
      serverSideValidateUsername(this.authService.checkUserNameAvailability)
      ],
      passwordGroup: this.fb.group({
        password: ['', 
        [
          Validators.required, 
          Validators.minLength(8),
          patternValidator(/\d/, { hasNumber: true , required_if: true}),
          patternValidator(/[A-Z]/, { hasUpperCase: true, required_if: true}),
          patternValidator(/[a-z]/, { hasLowerCase: true, required_if: true}),
        ],
      ],
        confirmPassword: ['', Validators.required],
      }, 
      { validator: comparePasswords }
      ),
    });
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'verplicht';
    } else if (errors.minlength) {
      return `heeft minstens ${errors.minlength.requiredLength} karakters (got ${errors.minlength.actualLength})`;
    } else if (errors.hasNumber) {
      return `bevat minstens 1 nummer`;
    } else if (errors.hasUpperCase) {
      return `bevat minstens 1 hoofdletter`;
    } else if (errors.hasNumber) {
      return `bevat minstens 1 kleine letter`;
    } else if (errors.userAlreadyExists) {
      return `gebruiker bestaat al`;
    } else if (errors.email) {
      return `geen geldig email adres`;
    } else if (errors.passwordsDiffer) {
      return `wachtwoorden zijn niet hetzelfde`;
    }
  }

  onSubmit() {
    console.log(this.user.value.email, this.user.value.passwordGroup.password, this.user.value.firstName, this.user.value.lastname, this.user.value.functie);
    this.authService
      .register(
        this.user.value.email,
        this.user.value.passwordGroup.password,
        this.user.value.firstName,
        this.user.value.lastname,
        this.user.value.functie
      )
      .subscribe(
        (val) => {
          if (val) {
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate([""]);
            }
          } else {
            this.errorMessage = `Kon niet registreren`;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMessage = `Fout bij het registreren van ${this.user.value.email}: ${err.error.message}`;
          } else {
            this.errorMessage = `Fout ${err.status} bij het registreren van ${this.user.value.email}: ${err.error}`;
          }
        }
      );

  }
}
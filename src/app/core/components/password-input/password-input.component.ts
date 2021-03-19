import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]

})
export class PasswordInputComponent implements OnInit, ControlValueAccessor {

  control: FormControl = new FormControl(
    undefined,
    [Validators.required]
  );
  type = 'password';
  icon = 'visibility';
  onChange: (value: string) => void;
  onTouched: (value: string) => void;

  constructor() {
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe(
      value => {
        if (this.onChange) {
          this.onChange(value);
        }
      }
    );
  }

  toggleVisibility(): void {
    this.type = (this.type === 'password' ? 'text' : 'password');
    this.icon = (this.icon === 'visibility' ? 'visibility_off' : 'visibility');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.control.setValue(obj);
  }
}

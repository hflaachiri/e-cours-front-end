import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]

})
export class EmailInputComponent implements OnInit, ControlValueAccessor {

  control: FormControl = new FormControl(
    undefined,
    [Validators.required, Validators.email]
  );
  onChange: (value: string) => void;
  onTouched: () => void;

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

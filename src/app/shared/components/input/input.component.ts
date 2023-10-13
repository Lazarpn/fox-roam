import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() type: string;
  value: string | number;

  constructor() {}

  ngOnInit(): void {}

  onChange = value => {};

  onTouched = () => {};

  writeValue(value: string | number): void {
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    return;
  }
}

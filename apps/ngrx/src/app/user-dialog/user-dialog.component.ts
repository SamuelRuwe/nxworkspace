import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User, UserModel } from '../state/user/user.models';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDialogComponent implements OnInit {

  form!: FormGroup;

  constructor(private dialogRef: MatDialogRef<UserDialogComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public user?: UserModel) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: this.user?.id ?? null,
      firstName: new FormControl(this.user?.firstName ?? '', Validators.required),
      lastName: this.user?.lastName ?? ''
    });
  }

  closeDialog() {
    const {id, firstName, lastName} = this.form.value;
    const user = new User({id, firstName, lastName});
    this.dialogRef.close(user);
  }

  cancel() {
    this.dialogRef.close();
  }

}

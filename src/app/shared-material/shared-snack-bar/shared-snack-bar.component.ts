import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../boolean-message';

@Component({
  selector: 'app-shared-snack-bar',
  templateUrl: './shared-snack-bar.component.html',
  styleUrls: ['./shared-snack-bar.component.css']
})
export class SharedSnackBarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: BooleanMessage) { }

  ngOnInit() {
  }

  closeSnackBar() {
    this.snackbar.dismiss();
  }

}

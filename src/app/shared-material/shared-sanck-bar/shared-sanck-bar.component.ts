import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '../../../../node_modules/@angular/material';
import { BooleanMessage } from '../boolean-message';

@Component({
  selector: 'app-shared-sanck-bar',
  templateUrl: './shared-sanck-bar.component.html',
  styleUrls: ['./shared-sanck-bar.component.css']
})
export class SharedSanckBarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: BooleanMessage) { }

  ngOnInit() {
  }

  closeSnackBar() {
    this.snackbar.dismiss();
  }

}

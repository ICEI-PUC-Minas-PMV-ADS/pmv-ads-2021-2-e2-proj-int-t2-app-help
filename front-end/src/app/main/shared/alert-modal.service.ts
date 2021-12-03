import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  constructor(public snackBar: MatSnackBar) {
  }


  showAlertDanger(message: string) {
    let snack = this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['red-snackbar']
    });
  }

  showAlertSuccess(message: string) {
    // Swal.fire(message, '', 'success')
    // console.log('alert')
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['green-snackbar']
    });
  }


}

import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public sucess(
    message: string,
    title?: string
  ): void {
    this.showAlert(title, message, 'success');
  }

  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ):void {
    Swal.fire(title, message, icon);
  }
}

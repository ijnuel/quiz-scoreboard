import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgxSpinnerService } from "ngx-spinner";
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private Router: Router, private spinner: NgxSpinnerService ) {


  }


  ShowSpinner(){

    this.spinner.show();
  }


  HideSpinner(){

    this.spinner.hide();
  }

  reloadComponent() {
    let currentUrl = this.Router.url;
        this.Router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.Router.onSameUrlNavigation = 'reload';
        this.Router.navigate([currentUrl]);
    }
}

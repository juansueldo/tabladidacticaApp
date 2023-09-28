import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController
  ) {}

  //================ Loading ================
  //Present
  
  async presentLoading(opts?: LoadingOptions) {
    const loading = await this.loadingController.create(opts);
    await loading.present();
  }
  //Dismiss

  async dismissLoading() {
    return await this.loadingController.dismiss({
      cssClass: 'toast-bg'
    });
  }

  //================ LocalStorage ================
  //Set

  setElementInLocalstorage(key: string, element: any) {
    return localStorage.setItem(key, JSON.stringify(element));
  }

  //Get

  getElementFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  async presentToast(opts: ToastOptions){
    const toast = await this.toastController.create(opts);
    toast.present();
  }

  //================ Router ================
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }
}
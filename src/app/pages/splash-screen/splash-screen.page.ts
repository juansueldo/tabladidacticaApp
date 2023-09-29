import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private route: Router) {
<<<<<<< HEAD
    setTimeout(() => {
=======
   setTimeout(() => {
>>>>>>> d64588022edcb74922cf32a34184e79f2923d45e
      this.route.navigateByUrl('/login');
    },2500);
   }

  ngOnInit() {
  }
  
}

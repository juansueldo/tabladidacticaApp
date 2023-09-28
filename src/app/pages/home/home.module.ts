import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AnimalsComponent } from 'src/app/components/animals/animals.component';
import { NumbersComponent } from 'src/app/components/numbers/numbers.component';
import { ColorsComponent } from 'src/app/components/colors/colors.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,AnimalsComponent,NumbersComponent,ColorsComponent]
})
export class HomePageModule {}

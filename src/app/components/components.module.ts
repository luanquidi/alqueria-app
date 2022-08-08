import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ComponentsModule as AntComponent } from '../ant-desing/components.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AntComponent,
    HomeModule
  ]
})
export class ComponentsModule { }

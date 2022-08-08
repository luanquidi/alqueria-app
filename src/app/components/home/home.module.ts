import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ComponentsModule } from 'src/app/ant-desing/components.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFormComponent } from './home-form/home-form.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule, NzListModule, NzSkeletonModule } from 'ng-zorro-antd';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeDashboardComponent,
    HomeFormComponent,
    HomeListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzListModule,
    NzSkeletonModule
    // FormsModule
  ],
  exports: [
    HomeComponent,
    HomeDashboardComponent
  ]
})
export class HomeModule { }

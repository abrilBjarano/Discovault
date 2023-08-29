import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddRecordComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class RecordCollectionModule { }
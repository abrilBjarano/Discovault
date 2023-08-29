import { Component } from '@angular/core';
import { Record } from '../interfaces/record.interface';
import { RecordCollectionService } from '../services/record-collection.service';

@Component({
  selector: 'coleccion-discos-main',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  constructor( private recordCollectionService: RecordCollectionService ) {}

  get records(): Record[] {
    return [...this.recordCollectionService.recordsMain];
  }

  onDeleteRecordList( id: string ): void {
    this.recordCollectionService.deleteRecordById( id )
  }

  onNewRecordMain( record: Record ): void {
    this.recordCollectionService.onNewRecordMain(  record )
  }

}

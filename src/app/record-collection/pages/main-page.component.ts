import { Component } from '@angular/core';
import { Record } from '../interfaces/record.interface';
import { RecordCollectionService } from '../services/record-collection.service';

@Component({
  selector: 'coleccion-discos-main',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor( public recordCollectionService: RecordCollectionService ) {}
}

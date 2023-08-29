import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Record } from '../interfaces/record.interface';

@Injectable({
  providedIn: 'root'
})
export class RecordCollectionService {

  public recordsMain: Record[] = [
    {
      id: uuid(),
      name: 'Fijación Oral Vol.1',
      by: 'Shakira',
      songs: 12,
      release_date: 2005
    },{
      id: uuid(),
      name: 'Dónde están los ladrones?',
      by: 'Shakira',
      songs: 11,
      release_date: 1998
    },{
      id: uuid(),
      name: 'Pies Descalzos',
      by: 'Shakira',
      songs: 11,
      release_date: 1995
   }]

  onNewRecordMain( record: Record ): void {

    const newRecord: Record = { id: uuid(), ...record };

    this.recordsMain.push( newRecord );
  }

  onDeleteRecordMain( index: number ): void {
    this.recordsMain.splice(index, 1);
  }

}

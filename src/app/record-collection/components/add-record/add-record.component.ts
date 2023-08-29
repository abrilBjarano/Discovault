import { Component } from '@angular/core';
import { Record } from '../../interfaces/record.interface';

@Component({
  selector: 'record-collection-add-record',
  templateUrl: './add-record.component.html',
})
export class AddRecordComponent {

  public recordAdd: Record = {
    name: '',
    by: '',
    songs: 0,
    release_date: 0
  };

  emitRecord(): void {
    console.log(this.recordAdd);

    if( this.recordAdd.name.length === 0 ) {
      alert('No empty record is valid!');
      return;
    }

    this.recordAdd = { name: '', by: '', songs: 0, release_date: 0}

  }

}

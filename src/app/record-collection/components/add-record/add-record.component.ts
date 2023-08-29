import { Component, EventEmitter, Output } from '@angular/core';
import { Record } from '../../interfaces/record.interface';

@Component({
  selector: 'record-collection-add-record',
  templateUrl: './add-record.component.html',
})
export class AddRecordComponent {

  @Output()
  public onNewRecordAdd: EventEmitter<Record> = new EventEmitter();

  public recordAdd: Record = {
    name: '',
    by: '',
    songs: 0,
    release_date: 0
  };

  emitRecord(): void {

    const { name, by , songs, release_date} = this.recordAdd;

    if( name.length === 0 )
      return;

    this.onNewRecordAdd.emit(this.recordAdd);

    this.recordAdd = { name: '', by: '', songs: 0, release_date: 0};

  }

}

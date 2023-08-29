import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Record } from '../../interfaces/record.interface';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'record-collecion-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public recordList: Record[] = [{
    name: 'Día de Enero',
    by: 'Shakira',
    songs: 1,
    release_date: 2005
  }]


  @Output()
  public onDeleteRecordList: EventEmitter<string> = new EventEmitter();

  emitId(id?: string): void {

    if( !id ) return;

    this.onDeleteRecordList.emit(id);
  }

}

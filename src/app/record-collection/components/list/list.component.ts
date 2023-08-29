import { Component, Input } from '@angular/core';
import { Record } from '../../interfaces/record.interface';

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
}

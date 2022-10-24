import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-member-cardview',
  templateUrl: './member-cardview.component.html',
  styleUrls: ['./member-cardview.component.css'],
})
export class MemberCardviewComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy
{
  @Input() listViewMember: any;
  @Input() changeNewTitle: boolean;
  @Output() deleteRow: EventEmitter<any>;

  nameTitleNow: string = 'View Card';

  constructor() {
    console.log('constructor called');
    this.deleteRow = new EventEmitter();
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // this.deleteRow = new EventEmitter();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    const changeNewTitleValue = changes['changeNewTitle'];
    if (changeNewTitleValue.currentValue === true) {
      this.nameTitleNow = 'Yaaaa Kaaannnnnn!!!!!';
    } else {
      this.nameTitleNow = 'View Card';
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  onDestroyThis(row){
    this.deleteRow.emit(row);
    console.log(row);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}

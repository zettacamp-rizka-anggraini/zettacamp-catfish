import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubSink } from 'subsink';
import { HistoryPageService } from '../history-page.service';
import { DetailTransaction } from '../../model/transaction.model';

@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.component.html',
  styleUrls: ['./detail-history.component.css']
})
export class DetailHistoryComponent implements OnInit {
  detailsTrans: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DetailTransaction,
    private dialogRef: MatDialogRef<DetailHistoryComponent>
  ) { }

  ngOnInit(): void {
    this.detailsTrans = this.data;
  }

}


import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataManagementService } from '../../data-management.service';
import { SubSink} from 'subsink';

@Component({
  selector: 'app-data-dialog',
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.css']
})
export class DataDialogComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  private id:any;
  public dataDetails:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private serviceData:DataManagementService) { }

  ngOnInit(): void {
    if(this.data){
      this.subs.sink = this.serviceData.datasManagement$.subscribe(res=>{
        this.id = this.data;
        this.dataDetails = res;
        this.dataDetails = this.dataDetails?.filter((x)=>x.ID == this.id);
        this.dataDetails = this.dataDetails[0];
        console.log(this.dataDetails);
        console.log(this.id);
      })
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

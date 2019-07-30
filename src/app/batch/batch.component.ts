import {Component, OnInit} from '@angular/core';
import {BatchService} from "../services/batch-service";
import {IBatch} from "../shared/model/batch.model";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  constructor(private batchService: BatchService) { }

  ngOnInit() {
  }

  submit() {
      console.log('Submit............');
      this.batchService.createBatch({id: 1, name: 'Twelve'}).subscribe((batch: IBatch) => {
          console.log('Got batch...');
      });
  }

}

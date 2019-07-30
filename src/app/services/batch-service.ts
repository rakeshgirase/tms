import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IBatch} from '../shared/model/batch.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BatchService {

    constructor(private http: HttpClient) {

    }

    createBatch(batch: IBatch): Observable<IBatch>  {
        return this.http.post<IBatch>('http://localhost:8080/batch/create', batch, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}

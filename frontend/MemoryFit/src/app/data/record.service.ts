import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Words} from '../model.words'

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private httpClient: HttpClient) { }

    // !! MAKE SURE
    loadQuestionDetails():Observable<Words[]>{
      return this.httpClient.get<Words[]>('http://localhost:3000/db')

    }
}





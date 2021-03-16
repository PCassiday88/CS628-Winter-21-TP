import { Component, OnInit } from '@angular/core';
import { RecordService} from '../data/record.service'
import { Words} from '../model.words'
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[RecordService]
})
export class QuizComponent implements OnInit {
  loggedIn:boolean=false

  infoReceived: string[]

  constructor(private rservice: RecordService) {
    questionsInfo:Words[]
  }

  getInfoFromServiceClass(){
    this.loggedIn=!this.loggedIn
    this.infoReceived = this.rservice.getinfo()
  }

  ngOnInit(): void {
    this.rservice.loadQuestionDetails().subscribe(data => this.questionsInfo=data,
      error => console.log('ther was en error'))
      console.log('this called in python')
  }

}

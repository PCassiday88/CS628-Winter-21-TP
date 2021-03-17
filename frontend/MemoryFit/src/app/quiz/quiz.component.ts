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
  maxRequest:number=5
  counter:number=0

  infoReceived: string[]=[
    "ability",
    "able",
    "about",
    "above",
    "accept",
    "according",
    "account",
    "across",
    "act",
    "action",
    "activity",
    "actually",
    "add",
    "address",
    "administration",
    "admit",
    "adult",
    "affect",
    "after",
    "again",
    "against",
    "age",
    "agency"
    ]

  constructor(private rservice: RecordService) {}

  questionsInfo:Words[]


  ngOnInit(): void {
    console.log('this is got called')
    this.rservice.loadQuestionDetails().subscribe(data => this.questionsInfo=data,
      error => console.log('ther was en error'))
      console.log(this.questionsInfo)
  }

  justCheck():void{
    this.loggedIn=!this.loggedIn

  }
}

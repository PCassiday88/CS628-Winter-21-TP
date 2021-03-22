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
    "sun",
    "shoes",
    "traffic-light",
    "table",
    "glove",
    "soda",
    "rainbow",
    "octopus",
    "cat",
    "toes",
    "skis",
    "roses",
    "spaceship",
    "carrot",
    "tennis",
    "candles",
    "magazine",
    "voting-booth",
    "golf",
    "glasses"
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

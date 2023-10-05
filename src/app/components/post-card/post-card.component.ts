import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input()
  photoCard:string = ""
  @Input()
  titleCard:string = ""
  @Input()
  descripitionCard:string = ""
  @Input()
  Id:string= "0"

  constructor() { }

  ngOnInit(): void {
  }

}

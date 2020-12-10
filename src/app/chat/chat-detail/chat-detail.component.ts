import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../chat';
import { ChatDetail } from '../chatDetail';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: []
})
export class ChatDetailComponent implements OnInit {

  @Input() chatDetail: ChatDetail;

  constructor() { }

  ngOnInit() {
    console.log(this.chatDetail.id);
  }

}

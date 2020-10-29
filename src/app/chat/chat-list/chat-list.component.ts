import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { ChatServiceService} from '../chat-service.service';

@Component({
  selector: 'app-chat-lista',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(private service: ChatServiceService) { }
  chats: Array<Chat>;
  getChats(): any{
    return this.service.getChats().subscribe(c => this.chats = c);
  }
  ngOnInit() {
    this.getChats();
    console.log("init");
  }

}

import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { ChatServiceService} from '../chat-service.service';
import { ChatDetail} from '../chatDetail';

@Component({
  selector: 'app-chat-lista',
  templateUrl: './chat-list.component.html',
  styleUrls: []
})
export class ChatListComponent implements OnInit {

  constructor(private service: ChatServiceService) { }
  chats: Array<Chat>;
  selectedChat: ChatDetail;
  selected = false;

  onSelected(c: ChatDetail):void{
    this.selected = true;
    this.selectedChat = c;
  }

  getChats(): any{
    return this.service.getChats().subscribe(c => this.chats = c);
  }
  ngOnInit() {
    this.getChats();
    console.log("init");
  }

}

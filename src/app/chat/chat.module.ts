import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatComponent],
  exports : [ChatListComponent]
})
export class ChatModule { }

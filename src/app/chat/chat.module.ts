import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';
import { ChatDetailComponent } from '../chat/chat-detail/chat-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatListComponent, ChatDetailComponent],
  exports : [ChatListComponent]
})
export class ChatModule { }

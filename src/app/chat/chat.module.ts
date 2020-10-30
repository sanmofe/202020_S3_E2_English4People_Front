import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatListComponent],
  exports : [ChatListComponent]
})
export class ChatModule { }

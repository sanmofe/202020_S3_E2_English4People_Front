import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Chat } from './chat';
import { Observable } from 'rxjs';
import { ChatDetail } from './chatDetail';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  private apiUrl = environment.baseUrl + 'chats';

constructor(private http: HttpClient) { }
getChats(): Observable<Array<ChatDetail>>{
  return this.http.get<Array<ChatDetail>>(this.apiUrl);


}
}

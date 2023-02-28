import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('new_chat') modal: ModalController;
  @ViewChild('popover') popover: PopoverController;

  segment = 'chats';
  open_new_chat = false;
  users = [
    {
      id: 1,
      name: 'Gabriel',
      photo: 'https://i.pravatar.cc/345',
    },
    { id: 2, name: 'Elamae', photo: 'https://i.pravatar.cc/355' },
    { id: 3, name: 'Serin', photo: 'https://i.pravatar.cc/365' },
  ];
  chatRooms = [
    {
      id: 1,
      name: 'Gabriel',
      photo: 'https://i.pravatar.cc/345',
    },
    { id: 2, name: 'Elamae', photo: 'https://i.pravatar.cc/355' },
    { id: 3, name: 'Serin', photo: 'https://i.pravatar.cc/365' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.popover.dismiss();
  }

  onSegmentChanged(event: any) {
    console.log(event);
  }

  newChat() {
    this.open_new_chat = true;
  }

  onWillDismiss(event: any) {}

  cancel() {
    this.modal.dismiss();
    this.open_new_chat = false;
  }

  startChat(item: any){

  }

  getChat(item: any) {
    this.router.navigate(['/', 'home', 'chats', item?.id])
  }
}

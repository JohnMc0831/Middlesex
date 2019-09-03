import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-events',
  styleUrl: 'app-events.css'
})
export class AppEvents {

  render() {
    return [
      <ion-header >
        <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
          <ion-title>Welcome to Middlesex Vermont!</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content class='ion-padding hungerMountain'>
          <ion-text color='light'>
            Events Calendar
          </ion-text>
   
    </ion-content>,
    <ion-footer>
      <ion-toolbar no-padding color='primary'>
            <ion-button title='Settings' href="/profile/ionic">
              &nbsp;&nbsp;
              <ion-icon name="cog"></ion-icon>
            </ion-button>
            <ion-button title='Contact Us' href="/profile/ionic">
              <ion-icon name="mail"></ion-icon>
            </ion-button>
            <ion-button title='Help' href="/profile/help">
              <ion-icon name="help-circle-outline"></ion-icon>
            </ion-button>
            <ion-button title='Sign Up!' href="/profile/signup">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </ion-button>
            <ion-button title='Send a Middlesex photo!' href="/profile/photo">
              <ion-icon name="images"></ion-icon>
            </ion-button>
            <ion-button title='About' href="/profile/photo">
              <ion-icon name="information-circle-outline"></ion-icon>
            </ion-button>
      </ion-toolbar>
    </ion-footer>
    ]
  }
}

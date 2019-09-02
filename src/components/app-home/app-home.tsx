import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header >
        <ion-toolbar color="primary">
          <ion-title>Welcome to Middlesex Vermont!</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class='ion-padding hungerMountain'>
          <ion-text color='light'>
          Welcome to our town's little mobile app, which we designed to help our neighbors stay in touch
          with whatever's happening in Middlesex!  To get started, choose an option below:
          </ion-text>
      <ion-grid no-padding>
        <ion-row>
          <ion-col class='ion-text-center'>
            <h3>Town of Middlesex<br />Services Menu</h3>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-button size="large" href="/govt/offices" expand="block">
              <ion-icon slot='start' name="albums"></ion-icon>
                Town Offices
              </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button size="large" href="/maps" expand="block" color='secondary'>
              <ion-icon slot='start' name="map"></ion-icon>
              Maps & Directions
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>       
          <ion-col>
          <ion-button size="large" href="/events" expand="block" color='medium'>
            <ion-icon slot='start' name="happy"></ion-icon>
            Town Events
          </ion-button>
          </ion-col>
          <ion-col>
            <ion-button size="large" href="/chatter" expand="block" color="warning">
              <ion-icon slot='start' name="chatbubbles"></ion-icon>
                Town Chatter
              </ion-button>
          </ion-col>
        </ion-row>
        {/* <ion-row>
          <ion-col>
            <ion-button size="large" href="/profile/ionic" expand="block">Profile page</ion-button>
          </ion-col>
          <ion-col>
            <ion-button href="/history" expand="block">Profile page</ion-button>
          </ion-col>
        </ion-row> */}
      </ion-grid>       
    </ion-content>
    ];
  }
}

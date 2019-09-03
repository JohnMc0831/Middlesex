import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
          <ion-route url="/offices" component="app-offices" />
          <ion-route url="/maps" component="app-maps" />
          <ion-route url="/events" component="app-events" />
          <ion-route url="/chatter" component="app-chatter" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}

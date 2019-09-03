import { newE2EPage } from '@stencil/core/testing';

describe('app-chatter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chatter></app-chatter>');

    const element = await page.find('app-chatter');
    expect(element).toHaveClass('hydrated');
  });

  it('contains some text', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-chatter></app-chatter>');

    const element = await page.find('app-chatter ion-content ion-button');
    expect(element.textContent).toEqual('Town Chatter');
  });
});

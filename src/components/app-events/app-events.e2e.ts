import { newE2EPage } from '@stencil/core/testing';

describe('app-events', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-events></app-events>');

    const element = await page.find('app-events');
    expect(element).toHaveClass('hydrated');
  });

  it('contains some text', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-events></app-events>');

    const element = await page.find('app-events ion-content ion-button');
    expect(element.textContent).toEqual('Events');
  });
});

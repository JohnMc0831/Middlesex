import { newE2EPage } from '@stencil/core/testing';

describe('app-maps', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-maps></app-maps>');

    const element = await page.find('app-maps');
    expect(element).toHaveClass('hydrated');
  });

  it('contains some text', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-maps></app-maps>');

    const element = await page.find('app-maps ion-content ion-button');
    expect(element.textContent).toEqual('Maps & Directions');
  });
});

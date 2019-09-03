import { newE2EPage } from '@stencil/core/testing';

describe('app-offcies', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-offices></app-offices>');

    const element = await page.find('app-offices');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-offices></app-offices>');

    const element = await page.find('app-offices ion-content ion-button');
    expect(element.textContent).toEqual('Town Offices');
  });
});

import { expect, test } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://localhost:4200');

  await expect(page).toHaveURL('http://localhost:4200/about');

  await page.click('button:has-text("Wasm")');
  await expect(page).toHaveURL('http://localhost:4200/wasm');

  // Click text=Console logger
  await page.click('text=Console logger');

  // Click :nth-match(button, 3)
  await page.click(':nth-match(button, 3)');
  await expect(page).toHaveURL('http://localhost:4200/settings');
  expect(await page.screenshot()).toMatchSnapshot('settings-default-theme.png');

  // Click button:has-text("change to dark theme")
  await page.click('button:has-text("change to dark theme")');
  expect(await page.screenshot()).toMatchSnapshot('settings-dark-theme.png');

  // Click button:has-text("change to nature theme")
  await page.click('button:has-text("change to nature theme")');
  expect(await page.screenshot()).toMatchSnapshot('settings-nature-theme.png');

  // Click button:has-text("change to light theme")
  await page.click('button:has-text("change to light theme")');
  expect(await page.screenshot()).toMatchSnapshot('settings-light-theme.png');

});

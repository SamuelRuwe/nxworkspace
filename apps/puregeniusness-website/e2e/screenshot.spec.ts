import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('http://localhost:4200/about');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});

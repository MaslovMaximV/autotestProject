import { test, expect } from '@playwright/test';
import { OMainPage } from '../openPage/OMainPage.';
import { MainPage } from '../page/MainPage';

test.beforeEach(async ({page}) => {
  await page.goto('/')
})

test.describe('home page entry', async () => {
  test('check title on main page', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/UI Test Automation/);
  });
  
  test('check ui title on main page', async ({ page }) => {
    const uiTitle = await page.getByRole('heading', { name: 'UI Test Automation Playground' })
    // Is visible ui title on page
    await expect(uiTitle).toBeVisible()
  });

  test('checking items for testing', async ({page}) =>{
    const mainPage = new MainPage(page)
    const locator = new OMainPage(page)
    
    for (let index = 0; index < locator.elements.length; index++) {
      const element = locator.elements[index];
      // Check visibility and availability of the element
      await mainPage.assertElementVisibleAndEnabled(element);  
  }
  })
})
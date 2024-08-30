import { test, expect } from '@playwright/test';
import { MainPage } from '../../page/MainPage';

test.beforeEach(async ({page}) => {
    const mainpage = new MainPage(page)
    await page.goto('/')
    await mainpage.elements[1].click()
})

test.describe('Class attribute check', async () => {
  test("check url and title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Class Attribute/)
    await expect(page).toHaveURL('/classattr')
  });

  test('attr', async ({ page }) => {
    const buttonSelector = "button.btn.class3.btn-primary.btn-test"
    const button = await page.locator(buttonSelector)

    if (button) {
        const backgroundColor = await button.evaluate((el) => {
            return window.getComputedStyle(el).backgroundColor;
        });

        expect(backgroundColor).toBe('rgb(0, 123, 255)'); // Проверяем, что цвет соответствует #007bff
    } else {
        throw new Error('Кнопка не найдена');
    }
    await button.click()

    await page.waitForEvent('dialog')
    await page.getByText('Ok').click()
});
})
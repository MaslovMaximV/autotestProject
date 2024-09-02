import {test, expect} from '@playwright/test';
import {MainPage} from '../../page/MainPage';

test.beforeEach(async ({page}) => {
    const mainpage = new MainPage(page)
    await page.goto('/')
    await mainpage.elements[0].click()
})

test.describe('dynamic id check', async () => {
    test("check url and title", async ({page}) => {
        await expect(page).toHaveTitle(/Dynamic ID/)
        await expect(page).toHaveURL('/dynamicid')
    });

    test('check dynamic id for button', async ({page}) => {
        const button = await page.getByRole('button', {name: 'Button with Dynamic ID'})
        await expect(button).toBeEnabled()
        await button.click()
    });
})
import { test, expect } from "@playwright/test";
import { MainPageLocators } from "../../locators/MainPageLocators"
import { ClassAttributePage } from "../../page/ClassAttributePage";
import { ClassAttributeLocators } from "../../locators/ClassAttributeLocators";

test.beforeEach(async ({ page }) => {
  const mainpage = new MainPageLocators(page);
  await page.goto("/");
  await mainpage.elements[1].click();
});

test.describe("Class attribute check", async () => {
  test("check url and title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Class Attribute/);
    await expect(page).toHaveURL("/classattr");
  });

  test("attr", async ({ page }) => {
    const openPage = new ClassAttributePage(page)

    await openPage.dialogProccesimg(page)
    await openPage.searchAndClickNutton(page)
  });
});

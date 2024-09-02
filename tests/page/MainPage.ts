import { expect } from "@playwright/test"
import { Locator } from "playwright"
import { MainPageLocators } from "../locators/MainPageLocators";

export class MainPage extends  MainPageLocators{
    async assertElementVisibleAndEnabled(locator: Locator) {
        // Wait for the element to become visible
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check that the element is visible and accessible
        await expect(locator).toBeVisible();
        console.log('Видим ' + locator)
        await expect(locator).toBeEnabled();
    }
}
import { test, expect } from "@playwright/test";
import { ClassAttributeLocators } from "../locators/ClassAttributeLocators";

export class ClassAttributePage extends ClassAttributeLocators{

    async dialogProccesimg(page){
        page.on("dialog", async (dialog) => {
          const textInDialog = dialog.message();
          await console.log('Текст в диалоге:', textInDialog); 
          await expect(textInDialog).toBe("Primary button pressed");
          await dialog.accept();
          });
    }

    async searchAndClickNutton(page){
        const buttons = await this.buttons;
        const count = await buttons.count();

        for (let i = 0; i < count; i++) {
            const button = buttons.nth(i);
            const backgroundColor = await button.evaluate((el) => {
              return window.getComputedStyle(el).backgroundColor;
            });
      
            if (backgroundColor === "rgb(0, 123, 255)") {
              await button.click();
              return;
            }
          }
    }
}
import { Locator, Page } from "playwright"

export class ClassAttributeLocators{
    readonly BUTTONS: Locator
    
    constructor(page: Page){
        this.BUTTONS = page.getByRole("button", {name: "Button"})
    }

    get buttons(){
        return this.BUTTONS
    }
}
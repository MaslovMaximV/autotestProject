import {Locator, Page} from "playwright"

export class MainPageLocators {
    private page: Page
    readonly elements: Locator[];
    readonly DYNAMIC_ID: Locator
    readonly CLASS_ATTRIBUTE: Locator
    readonly HIDDEN_LAYERS: Locator
    readonly LOAD_DELAY: Locator
    readonly AJAX_DATA: Locator
    readonly CLIENT_SIDE_DELAY: Locator
    readonly CLICK: Locator
    readonly TEXT_INPUT: Locator
    readonly SCROLLBARS: Locator
    readonly DYNAMUC_TABLE: Locator
    readonly VERIVY_TEXT: Locator
    readonly PROGRESS_BAR: Locator
    readonly VISIBILITY: Locator
    readonly SAMPLE_APP: Locator
    readonly MOUSE_OVER: Locator
    readonly NON_BREAKING_SPACE: Locator
    readonly OVERLAPPED_ELEMENT: Locator
    readonly SHADOW_DOM: Locator
    readonly ALERTS: Locator
    readonly FILE_UPLOAD: Locator

    constructor(page: Page) {
        this.elements = [
            this.DYNAMIC_ID = page.getByRole('link', {name: 'Dynamic ID'}),
            this.CLASS_ATTRIBUTE = page.getByRole('link', {name: 'Class Attribute'}),
            this.HIDDEN_LAYERS = page.getByRole('link', {name: 'Hidden Layers'}),
            this.LOAD_DELAY = page.getByRole('link', {name: 'Load Delay'}),
            this.AJAX_DATA = page.getByRole('link', {name: 'AJAX Data'}),
            this.CLIENT_SIDE_DELAY = page.getByRole('link', {name: 'Client Side Delay'}),
            this.CLICK = page.getByRole('link', {name: 'Click'}),
            this.TEXT_INPUT = page.getByRole('link', {name: 'Text Input'}),
            this.SCROLLBARS = page.getByRole('link', {name: 'Scrollbars'}),
            this.DYNAMUC_TABLE = page.getByRole('link', {name: 'Client Side Delay'}),
            this.VERIVY_TEXT = page.getByRole('link', {name: 'Verify Text'}),
            this.PROGRESS_BAR = page.getByRole('link', {name: 'Progress Bar'}),
            this.VISIBILITY = page.getByRole('link', {name: 'Visibility'}),
            this.SAMPLE_APP = page.getByRole('link', {name: 'Sample App'}),
            this.MOUSE_OVER = page.getByRole('link', {name: 'Mouse Over'}),
            this.NON_BREAKING_SPACE = page.getByRole('link', {name: 'Non-Breaking Space'}),
            this.OVERLAPPED_ELEMENT = page.getByRole('link', {name: 'Overlapped Element'}),
            this.SHADOW_DOM = page.getByRole('link', {name: 'Shadow DOM'}),
            this.ALERTS = page.getByRole('link', {name: 'Alerts'}),
            this.FILE_UPLOAD = page.getByRole('link', {name: 'File Upload'})
        ]
    }


}
import { Page } from "@playwright/test";


export class HelperBase {

    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    } 

    protected async getToasterMessage(){
        //This mock method validates toasts and gets its message
        return 'Im a cool toaster!'
    }

}

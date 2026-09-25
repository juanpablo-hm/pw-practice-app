import { Page } from '@playwright/test'
import { NavigationPage } from '../page-objects/navigation-page'
import { FormLayoutsPage } from '../page-objects/form-layouts-page'
import { DatepickerPage } from '../page-objects/datepicker-page'

export class PageManager {
    readonly navigateTo: NavigationPage
    readonly formlayoutsPage: FormLayoutsPage
    readonly datepickerPage: DatepickerPage

    constructor(page: Page){
        this.navigateTo = new NavigationPage(page)
        this.formlayoutsPage = new FormLayoutsPage(page)
        this.datepickerPage = new DatepickerPage(page)
    }
}
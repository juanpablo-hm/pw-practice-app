import {test} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigation-page'
import { FormLayoutsPage } from '../page-objects/form-layouts-page'


test.beforeEach(async ({page}) => {
    await page.goto('/')
})

test('Navigate to From Layouts Page', async ({page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.toasterPage()
    await navigateTo.smartTablePage()
})

test('Parametrized Page Objects Methods', async ({page}) => {
    const navigateTo = new NavigationPage(page)
    const formLayoutsPage = new FormLayoutsPage(page)
    await navigateTo.formLayoutsPage()
    await formLayoutsPage.submitUsingTheGridForm('jp@mail.com', 'password123', 'Option 2' )
    await formLayoutsPage.submitInlineForme('JP', 'jp@mail.com', false)
})

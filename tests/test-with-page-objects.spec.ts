import {test} from '@playwright/test'
import {NavigationPage} from '../page-objects/navigation-page'


test.beforeEach(async ({page}) => {
    await page.goto('/')
})

test('Navigate to From Layouts Page', async ( {page}) => {
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.toasterPage()
    await navigateTo.smartTablePage()
})
import { test } from '@playwright/test'
import { PageManager } from '../page-objects/page-manager'

test.beforeEach(async ({page}) => {
    await page.goto('/')
})

test('Navigate to From Layouts Page', async ({page}) => {
    const pom = new PageManager(page)
    await pom.navigateTo.formLayoutsPage()
    await pom.navigateTo.datePickerPage()
    await pom.navigateTo.toasterPage()
    await pom.navigateTo.smartTablePage()
})

test('Parametrized Page Objects Methods', async ({page}) => {
    const pom = new PageManager(page)
    await pom.navigateTo.formLayoutsPage()
    await pom.formlayoutsPage.submitUsingTheGridForm('jp@mail.com', 'password123', 'Option 2' )
    await pom.formlayoutsPage.submitInlineForme('JP', 'jp@mail.com', false)
    await pom.navigateTo.datePickerPage()
    await pom.datepickerPage.selectCommonDatepickerDateFromToday(5)
    await pom.datepickerPage.selectDatepickerWithRangeFromToday(7,15)
})

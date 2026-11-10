import { test } from '@playwright/test'
import { PageManager } from '../page-objects/page-manager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Navigate to From Layouts Page', async ({ page }) => {
    const pom = new PageManager(page)
    await pom.navigateTo.formLayoutsPage()
    await pom.navigateTo.datePickerPage()
    await pom.navigateTo.toasterPage()
    await pom.navigateTo.smartTablePage()
})

test('Parametrized Page Objects Methods', async ({ page }) => {
    const pom = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = faker.internet.email({ provider: 'test.com' })

    await pom.navigateTo.formLayoutsPage()
    await pom.formlayoutsPage.submitUsingTheGridForm('jp@mail.com', 'password123', 'Option 2')
    await page.waitForTimeout(500)
    await page.screenshot({ path: 'screenshots/formLayoutsPage.png' })
    const formLayoutPageBuffer = await page.screenshot()
    await pom.formlayoutsPage.submitInlineForme(randomFullName, randomEmail, false)
    await page.locator('nb-card', { hasText: "Inline form" }).screenshot({ path: 'screenshots/inlineForm.png' })
    await pom.navigateTo.datePickerPage()
    await pom.datepickerPage.selectCommonDatepickerDateFromToday(5)
    await pom.datepickerPage.selectDatepickerWithRangeFromToday(7, 15)
    await pom.navigateTo.smartTablePage()
})

import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Dialog').click()
})

test('Auto waiting', async ({ page }) => {
    const dialogWithDelayForm = page.locator('nb-card', { hasText: 'Open Dialog With Delay' })
    await dialogWithDelayForm.getByRole('button', { name: '3 seconds' }).click()

    const dialogContainer = page.locator('nb-dialog-container')
    //await dialogContainer.getyByRole('button, {name: 'Ok'}).click()

    const dialogHeaderText = await dialogContainer.locator('nb-card-header').textContent()
    //const dialogHeaderText = await dialogContainer.locator('nb-card-header').allTextContents()
    expect(dialogHeaderText).toContain('Friendly reminder')


})
//For cmmds that don't support autowaiting (see Documentation) this methods can help:
test('Alternativa waits', async ({ page }) => {
    const dialogWithDelayForm = page.locator('nb-card', { hasText: 'Open Dialog With Delay' })
    await dialogWithDelayForm.getByRole('button', { name: '3 seconds' }).click()
    const dialogContainer = page.locator('nb-dialog-container')

    //Wait for element
    //await dialogContainer.waitFor()
    //await page.waitForSelector('.nb-dialog-container)

    //Wait for API response
    //await page.waitForResponse('**/delay/*')

    //Wait for network calls to be completed ('NOT RECOMMENDED')
    //await page.waitForLoadState('networkidle')

    //--hardcoded wait (NEVER EVER USE IT. JUST NEVER)
    //await page.waitForTimeout(3500)

    //const dialogHeaderText = await dialogContainer.locator('nb-card-header').allTextContents()
    //expect(dialogHeaderText).toContain('Friendly Reminder')

    //Locator Assertion
    await expect(dialogContainer.locator('nb-card-header')).toContainText('Friendly reminder')

})

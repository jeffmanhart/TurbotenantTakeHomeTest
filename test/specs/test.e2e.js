import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import PropertyPage from '../pageobjects/property.page.js'
import propertyPage from '../pageobjects/property.page.js'

let uniqueString = Date.now();

describe('Add a new property', () => {
    it('should save and display the new property', async () => {
        await LoginPage.open()
        await LoginPage.login('', '')
        await propertyPage.addPropertyButton.waitForExist()
        await PropertyPage.addProperty(`autoTitle ${uniqueString}`, `new desc ${uniqueString}`, 25)
        await PropertyPage.btnSubmit.waitForExist({ reverse: true })
        await browser.pause(500)
        await expect(propertyPage.getProperty(`autoTitle ${uniqueString}`)).toExist()
    })
})


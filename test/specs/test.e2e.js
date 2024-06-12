import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import PropertyPage from '../pageobjects/property.page.js'

describe('Add a new property', () => {
    it('should save and display the new property', async () => {
        await LoginPage.open()
        await LoginPage.login('jmtest', '12345!')
        await PropertyPage.addProperty('autoTitle', 'new desc', 25)
        debug();
    })
})


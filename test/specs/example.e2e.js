import { browser, $, $$, expect } from '@wdio/globals'
const { describe, it } = require('node:test')
const LoginPage = require('./test/pageobjects/login.page.js')

describe('My Login page static e2e testing', () =>{
    LoginPage.open();

    it ('should contain two input boxes',async() => {
        const username_input = await $('#UsernameID');
        await expect(username_input).toBeDisplayed();

        const password_input = await $('#PasswordID');
        await expect(password_input).toBeDisplayed();

    });

    it('Sign in button should contain context Sign in', async() =>{
        const username_input = await $('#ButtonID');
        await expect(username_input).toHaveTextContaining('SIGN IN')

    })
});



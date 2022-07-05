const { openBrowser, goto, closeBrowser, text , intercept} = require('taiko');
const assert = require('assert').strict;


(async () => {
    try {
        await openBrowser();
        
        await intercept("https://cdn.growthbook.io/api/features/{YOUR_APP_KEY}", require('./mock-ft.json'))
        
        await goto("localhost:3000");
        
        await assert.ok(await text("'always-true' is FALSE").exists());

    } catch (error) {

        console.error(error);

    } finally {

        await closeBrowser();

    }
})();


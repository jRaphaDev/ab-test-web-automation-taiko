const { openBrowser, goto, closeBrowser, text } = require('taiko');
const assert = require('assert').strict;


(async () => {
    try {
        await openBrowser();
        
        await goto("localhost:3000");

        assert.ok(await text("'always-true' is TRUE").exists());

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();


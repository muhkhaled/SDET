module.exports = {
    '@tags': ['Search'],

    'Verify Search Results': function (browser){
        let search = browser.page.DressSearchObjects()
        search.navigate()
            .setValue('@searchBar', 'dress')
            .click('@searchButton')

            browser.elements('css selector', '#product_list > li', function(result) {

            let ulLength = result.value.length
            for(let i=1; i<= ulLength; i++){
                const result = browser.element(`#product_list > li:nth-child(${i}) > div > div.right-block > h5 > a.product-name`).getText()
                result.map((item)=>{
                    it (`Checking (${item})`, function() {
                        console.log(item)
                        browser.verify.containsText(`#product_list > li:nth-child(${i}) > div > div.right-block > h5 > a.product-name`, 'Dress')
                    })
                })
            }
            });
    },
};

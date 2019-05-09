module.exports = {
    beforeEach: browser => {
        browser.url('https://alpha.yoodlize.com/')
        .waitForElementPresent('body', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Check Links': browser => {
    browser
        .useXpath()
        .click('(//div[text()="See all"])[1]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Tools')
        .click('.navbar-header')
    
        .useXpath()
        .click('(//div[text()="See all"])[2]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Outdoor')
        .click('.navbar-header')
    
        .useXpath()
        .click('(//div[text()="See all"])[3]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Electronics')
        .click('.navbar-header')
    
        .useXpath()
        .click('(//div[text()="See all"])[4]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Party')
        .click('.navbar-header')
        
        .useXpath()
        .click('(//div[text()="See all"])[5]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Vehicles')
        .click('.navbar-header')
    
        .useXpath()
        .click('(//div[text()="See all"])[6]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Clothing')
        .click('.navbar-header')
  
        .useXpath()
        .click('(//div[text()="See all"])[7]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Home')
        .click('.navbar-header')

        .useXpath()
        .click('(//div[text()="See all"])[8]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Toys')
        .click('.navbar-header')
        
        .useXpath()
        .click('(//div[text()="See all"])[9]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Lawn')
        .click('.navbar-header')

        .useXpath()
        .click('(//div[text()="See all"])[10]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Sporting')
        .click('.navbar-header')
        
        .useXpath()
        .click('(//div[text()="See all"])[11]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Business')
        .click('.navbar-header')
      
        .useXpath()
        .click('(//div[text()="See all"])[12]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Venues')
        .click('.navbar-header')

        .useXpath()
        .click('(//div[text()="See all"])[13]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Experts')
        .click('.navbar-header')    

        .useXpath()
        .click('(//div[text()="See all"])[14]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Experiences')
        .click('.navbar-header')

        .useXpath()
        .click('(//div[text()="See all"])[15]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Misc')
        .click('.navbar-header')        
    
// Bottom Links to be checked
    
        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[1]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Tools')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[2]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Outdoor')
        .click('.navbar-header')    
        
        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[3]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Electronics')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[4]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Party')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[5]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Vehicles')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[6]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Clothing')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[7]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Home')
        .click('.navbar-header')
       
        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[8]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Toys')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[9]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Lawn')
        .click('.navbar-header')
        
        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[10]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Sporting')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[11]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Business')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[12]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Venues')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[13]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Experts')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[14]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Experiences')
        .click('.navbar-header')

        .useXpath()
        .click('(//*[@class="sc-jqCOkK hjfIlr sc-gqjmRU fptSCa"])[15]')
        .useCss()
    browser
        .waitForElementPresent('.sc-kaNhvL', 2000)
        .verify.containsText('.sc-kaNhvL', 'Misc')
        .click('.navbar-header')


    }
}
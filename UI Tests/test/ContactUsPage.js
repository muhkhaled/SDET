module.exports = {
    '@tags': ['Contact'],

    'Success Customer Service': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/1.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/1.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'Success Webmaster': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/2.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/2.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Subject Heading': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@choose')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/3.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/3.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Email (Customer Service)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            // .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/4.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/4.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Email (Webmaster)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            // .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/5.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/5.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'Invalid Email': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/6.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/6.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Order Reference (Customer Service)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test@gmail.com')
            // .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/7.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/7.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Order Reference (Webmaster)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            .setValue('@emailAddress', 'test@gmail.com')
            // .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/8.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/8.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

        'No Message (Customer Service)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            // .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/9.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/9.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Message (Webmaster)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            // .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/9.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/9.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'Attach .JSON File (Customer Service)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/package.json')) 
            .assert.containsText('@noFileSelected', "package.json")
            .saveScreenshot('screens/11.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/11.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

        'Attach .JSON File (Webmaster)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            .setValue('@fileUpload', require('path').resolve('/package.json')) 
            .assert.containsText('@noFileSelected', "package.json")
            .saveScreenshot('screens/11.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/11.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Attach File (Customer Service)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@customerService')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            // .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            // .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/10.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/10.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },

    'No Attach File (Webmaster)': function (browser){
        let contactUs = browser.page.ContactUsObjects();
        contactUs.navigate()
            .click('@subjectHeading')
            .click('@webmaster')
            .setValue('@emailAddress', 'test@gmail.com')
            .setValue('@orderReference', '12345')
            .setValue('@messageBox','message')
            // .setValue('@fileUpload', require('path').resolve('/img.jpeg')) 
            // .assert.containsText('@noFileSelected', "img.jpeg")
            .saveScreenshot('screens/10.0.png')
            .click('@submitButton')
            .saveScreenshot('screens/10.1.png')
            .verify.containsText('@alert', 'Your message has been successfully sent to our team');
    },
};
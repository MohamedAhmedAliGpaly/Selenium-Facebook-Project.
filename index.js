var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
	 By = webdriver.By,
    until = webdriver.until;

var options = new chrome.Options();
options.setUserPreferences({'profile.default_content_setting_values.notifications': 2});

var driver = new webdriver.Builder().withCapabilities(options.toCapabilities())
    .forBrowser('chrome')
    .build();

var async = require('async');
	


driver.get("https://www.facebook.com");
driver.wait(until.titleIs('Facebook - Log In or Sign Up'), 2000);
driver.findElement(By.id('email')).sendKeys("");
driver.findElement(By.id('pass')).sendKeys("");
driver.findElement(By.xpath("//*[@type='submit']")).submit();
driver.wait(until.titleIs('Facebook'), 1000);
driver.findElement(By.className("linkWrap noCount")).click();

var friends = driver.findElement(By.xpath("//*[@data-tab-key='friends']"));
friends.click();
// enter your name inbetween '':   driver.wait(until.titleIs(''),10000);
driver.executeScript("window.scrollBy(10000,0)", "");



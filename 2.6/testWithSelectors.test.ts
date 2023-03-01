import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.xpath(`//input[@name="hdrInput"]`) 
    const mkeInput: By = By.xpath(`//input[@name="mkeInput"]`) 
    const oaiInput: By = By.xpath(`//input[@name="oaiInput"]`)
    const nameInput: By = By.xpath(`//input[@name="nameInput"]`)
    const clrBtn: By = By.xpath(`//button[@id="clrInput"]`)
    const submitBtn: By = By.xpath(`//button[@id="saveBtn"]`)
    const errorMsg: By = By.xpath(`//p[@id="validHeader"]`) 

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Bad Guy Out and about")
        await driver.findElement(mkeInput).sendKeys("This is a lot of fun")
        await driver.findElement(oaiInput).sendKeys("I have no idea what this is for but here you go")
        await driver.findElement(nameInput).sendKeys("The Joker")
        await driver.findElement(submitBtn).click()
        let errorM = await driver.findElement(errorMsg).getText()
        expect(errorM).toContain("Errors Received:")
            await driver.findElement(clrBtn).click()
        
    })
})
import {By} from `selenium-webdriver`
import { BasePage } from `./basePage`

export class GooglePage extends BasePage {
    searchBar: By = By.name(`q`)
    results: By = By.id(`rso`)
    constructor() {
        super({url: "https://www.google.com"})
    }
async search(thing: string){
    return this.setInput(this.searchBar, `${thing}`)
}
async getResults() {
    return this.getText(this.results)
}
    }

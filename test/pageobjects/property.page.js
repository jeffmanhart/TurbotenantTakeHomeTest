import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PropertyPage extends Page {
    
    get addPropertyButton () {
        return $('div.header > button:nth-child(1)');
    }

    get titleInput () {
        return $('div.addForm > input[type=text]:nth-child(1)');
    }
    get descriptionInput () {
        return $('div.addForm > input[type=text]:nth-child(2)');
    }
    get rentInput () {
        return $('div.addForm > input[type=text]:nth-child(3)');
    }

    get btnSubmit () {
            return $('button=Submit');
        }

    async addProperty(title, description, rent){
        await this.titleInput.setValue(title);
        await this.descriptionInput.setValue(description);
        await this.rentInput.setValue(rent);
        await this.btnSubmit.click();
    }
}

export default new PropertyPage();

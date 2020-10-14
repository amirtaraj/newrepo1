const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class regression extends Page {
    /**
     * define selectors using getter methods
     */
    get news () { return $x("//a[contains(text(),'News')]") }
    get about () { return $x("//a[contains(text(),'About')]") }
    get contact () { return $("//a[contains(text(),'Contact')]") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new regression();

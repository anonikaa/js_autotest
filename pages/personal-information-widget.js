const { expect } = require("@playwright/test");

exports.PersonalInformationWidget = class PersonalInformationWidget {
  constructor(page) {
    this.iframe = page.frameLocator('iframe[title="Donation Widget"]');
    this.firstNameInput = this.iframe.locator(
      'input[data-qa="personal-first-name"]'
    );
    this.lastNameInput = this.iframe.locator(
      'input[data-qa="personal-last-name"]'
    );
    this.emailAddresInput = this.iframe.locator(
      'input[data-qa="personal-email"]'
    );
    this.donateButton = this.iframe.locator(
      'button[data-qa="privacy-continue"]'
    );
  }

  async inputValidFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }
  async inputValidLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }
  async inputValidEmail(email) {
    await this.emailAddresInput.fill(email);
  }
  async clickDonateMainButton() {
    await this.donateButton.click();
  }
};

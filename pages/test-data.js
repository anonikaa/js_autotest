const { expect } = require("@playwright/test");

exports.TestData = class TestData {
  constructor() {
    this.price = "100";
    this.cardNumber = "4242424242424242";
    this.expireDate = "0424";
    this.cvc = "000";
    this.firstName = "Hello";
    this.lastName = "Mr. Reviewer";
    this.email = "anonikaa@gmail.com";
  }
  method() {
    return `${this.price} / ${this.cardNumber} / ${this.expireDate} / ${this.cvc} / ${this.firstName} /
    ${this.lastName} / ${this.email}`;
  }
};

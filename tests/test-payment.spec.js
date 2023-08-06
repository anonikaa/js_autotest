const { test, expect } = require("@playwright/test");

const { StartedPage } = require("../pages/started-page");
const { DonationOptionWidget } = require("../pages/donation-option-widget");
const { TestData } = require("../pages/test-data");
const { PaymentOptionWidget } = require("../pages/payment-option-widget");
const { CreditCardWidget } = require("../pages/credit-card-widget");
const {
  PersonalInformationWidget,
} = require("../pages/personal-information-widget");

test.describe.parallel("My Tests", () => {
  test("unsuccessful donation", async ({ page }) => {
    const startedPage = new StartedPage(page);
    const donationOptionWidget = new DonationOptionWidget(page);
    const paymentOptionWidget = new PaymentOptionWidget(page);
    const testData = new TestData();
    const creditCardWidget = new CreditCardWidget(page);
    const personalInformationWidget = new PersonalInformationWidget(page);

    await startedPage.goto();
    await startedPage.clickGiveNowButton();

    await donationOptionWidget.clickMonthlyButton();
    await donationOptionWidget.chooseUSDCurrency();
    await donationOptionWidget.inputPrice(testData.price);
    await donationOptionWidget.clickDonateMonthlyButton();

    await paymentOptionWidget.uncheckCoverTransactionCostCheckbox();
    await paymentOptionWidget.clickCreditCardButton();

    await creditCardWidget.inputCreditCardNumber(testData.cardNumber);
    await creditCardWidget.inputExpireCardDate(testData.expireDate);
    await creditCardWidget.inputCvc(testData.cvc);
    await creditCardWidget.cickContinueButton();

    await personalInformationWidget.inputValidFirstName(testData.firstName);
    await personalInformationWidget.inputValidLastName(testData.lastName);
    await personalInformationWidget.inputValidEmail(testData.email);
    await personalInformationWidget.clickDonateMainButton();

    expect(creditCardWidget.declinedCardErrorTooltip).toBeVisible;
    await expect(creditCardWidget.declinedCardErrorTooltip).toContainText(
      testData.errorTooltipTitle
    );
  });
  test("second unsuccessful donation", async ({ page }) => {
    const startedPage = new StartedPage(page);
    const donationOptionWidget = new DonationOptionWidget(page);
    const paymentOptionWidget = new PaymentOptionWidget(page);
    const testData = new TestData();
    const creditCardWidget = new CreditCardWidget(page);
    const personalInformationWidget = new PersonalInformationWidget(page);

    await startedPage.goto();
    await startedPage.clickGiveNowButton();

    await donationOptionWidget.clickMonthlyButton();
    await donationOptionWidget.chooseUSDCurrency();
    await donationOptionWidget.inputPrice(testData.price);
    await donationOptionWidget.clickDonateMonthlyButton();

    await paymentOptionWidget.uncheckCoverTransactionCostCheckbox();
    await paymentOptionWidget.clickCreditCardButton();
    await creditCardWidget.inputCreditCardNumber(testData.cardNumber);
    await creditCardWidget.inputExpireCardDate(testData.expireDate);
    await creditCardWidget.inputCvc(testData.cvc);
    await creditCardWidget.cickContinueButton();

    await personalInformationWidget.inputValidFirstName(testData.firstName);
    await personalInformationWidget.inputValidLastName(testData.lastName);
    await personalInformationWidget.inputValidEmail(testData.email);
    await personalInformationWidget.clickDonateMainButton();

    expect(creditCardWidget.declinedCardErrorTooltip).toBeVisible;
    await expect(creditCardWidget.declinedCardErrorTooltip).toContainText(
      testData.errorTooltipTitle
    );
  });
});

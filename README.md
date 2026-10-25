# empeo Registration Page - Automation Testing

## Overview
This project contains automated UI tests for the empeo registration page using Playwright.

Target URL:
https://portal.uat.gofive.co.th/Register/empeo

## Tools
- Playwright
- JavaScript
- Node.js
- Chromium

## Test Coverage
- Required-field validation when submitting an empty form
- Mobile phone input validation
- Invalid promo code validation
- Promo code response inspection

## Setup
Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## Run Tests

Run all tests in Chromium:

npx playwright test --project=chromium

Run the promo code tests:

npx playwright test tests/register-promo.spec.js --project=chromium

Run the required-field tests:

npx playwright test tests/register-required-fields.spec.js --project=chromium

Run the phone validation tests:

npx playwright test tests/register-phone.spec.js --project=chromium

## View HTML Report

npx playwright show-report

## Notes
The tests validate observed UI behavior. Promo code acceptance for FREE15DAY has not yet been confirmed.
No actual registration submission is performed by these tests.

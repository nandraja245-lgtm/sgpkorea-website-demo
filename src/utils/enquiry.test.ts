import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildDemoEnquiryReceipt,
  hasValidationErrors,
  validateEnquiryForm,
  type EnquiryFormValues,
} from './enquiry';

const VALID_VALUES: EnquiryFormValues = {
  fullName: 'Minjun Park',
  companyName: 'Hankook Medical Supply Co.',
  businessEmail: 'm.park@hankookmed.example.com',
  country: 'South Korea',
  phone: '+82-2-555-0148',
  productInterest: 'Automatic Syringe Assembly Machine (SG1700 Series)',
  enquiryType: 'Machine Quotation',
  message: 'Requesting technical datasheet and quotation for a 1ml and 3ml syringe assembly line.',
};

test('validateEnquiryForm flags all required fields when empty', () => {
  const errors = validateEnquiryForm({
    fullName: '',
    companyName: '',
    businessEmail: '',
    country: '',
    phone: '',
    productInterest: '',
    enquiryType: '',
    message: '',
  });

  assert.equal(hasValidationErrors(errors), true);
  assert.ok(errors.fullName);
  assert.ok(errors.companyName);
  assert.ok(errors.businessEmail);
  assert.ok(errors.country);
  assert.equal(errors.phone, undefined, 'Phone is optional and should not error when blank');
  assert.ok(errors.productInterest);
  assert.ok(errors.enquiryType);
  assert.ok(errors.message);
});

test('validateEnquiryForm rejects malformed emails, invalid phone numbers, and short messages', () => {
  const errors = validateEnquiryForm({
    ...VALID_VALUES,
    businessEmail: 'not-an-email',
    phone: 'abc###invalid',
    message: 'Hi',
  });

  assert.ok(errors.businessEmail);
  assert.ok(errors.phone);
  assert.ok(errors.message);
});

test('validateEnquiryForm accepts valid input with or without optional phone', () => {
  assert.equal(hasValidationErrors(validateEnquiryForm(VALID_VALUES)), false);
  assert.equal(
    hasValidationErrors(validateEnquiryForm({...VALID_VALUES, phone: ''})),
    false,
  );
});

test('buildDemoEnquiryReceipt produces deterministic demo-only receipt', () => {
  const fixedDate = new Date('2026-11-22T10:00:00.000Z');
  const receipt = buildDemoEnquiryReceipt(VALID_VALUES, fixedDate);

  assert.equal(receipt.isDemoOnly, true);
  assert.match(receipt.referenceId, /^DEMO-SGP-20261122-\d{4}$/);
  assert.equal(receipt.summary.companyName, VALID_VALUES.companyName);
  assert.equal(receipt.submittedAt, fixedDate.toISOString());
});

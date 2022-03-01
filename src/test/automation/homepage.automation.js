/* eslint-disable no-undef */
/* eslint-disable strict */

'use strict';

require('mocha');
const assert = require('assert');
const HomePageShop = require('./homepage/homepage.shop');
const HomePageContact = require('./homepage/homepage.contact');

describe('Homepage', () => {
  it('should find element shop and go page shop', async () => {
    const result = await HomePageShop();
    // then
    assert.equal(result, 'http://localhost:3000/shop', '');
  });

  it('should find element contact and go page contact', async () => {
    const result = await HomePageContact();
    // then
    assert.equal(result, 'http://localhost:3000/contact', '');
  });
});

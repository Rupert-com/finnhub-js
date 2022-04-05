/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.finnhub);
  }
}(this, function(expect, finnhub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new finnhub.BondProfile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BondProfile', function() {
    it('should create an instance of BondProfile', function() {
      // uncomment below and update the code to test BondProfile
      //var instane = new finnhub.BondProfile();
      //expect(instance).to.be.a(finnhub.BondProfile);
    });

    it('should have the property isin (base name: "isin")', function() {
      // uncomment below and update the code to test the property isin
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property cusip (base name: "cusip")', function() {
      // uncomment below and update the code to test the property cusip
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property figi (base name: "figi")', function() {
      // uncomment below and update the code to test the property figi
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property coupon (base name: "coupon")', function() {
      // uncomment below and update the code to test the property coupon
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property maturityDate (base name: "maturityDate")', function() {
      // uncomment below and update the code to test the property maturityDate
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property offeringPrice (base name: "offeringPrice")', function() {
      // uncomment below and update the code to test the property offeringPrice
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property issueDate (base name: "issueDate")', function() {
      // uncomment below and update the code to test the property issueDate
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property bondType (base name: "bondType")', function() {
      // uncomment below and update the code to test the property bondType
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property debtType (base name: "debtType")', function() {
      // uncomment below and update the code to test the property debtType
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property industryGroup (base name: "industryGroup")', function() {
      // uncomment below and update the code to test the property industryGroup
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property industrySubGroup (base name: "industrySubGroup")', function() {
      // uncomment below and update the code to test the property industrySubGroup
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property asset (base name: "asset")', function() {
      // uncomment below and update the code to test the property asset
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property datedDate (base name: "datedDate")', function() {
      // uncomment below and update the code to test the property datedDate
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property firstCouponDate (base name: "firstCouponDate")', function() {
      // uncomment below and update the code to test the property firstCouponDate
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property originalOffering (base name: "originalOffering")', function() {
      // uncomment below and update the code to test the property originalOffering
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property amountOutstanding (base name: "amountOutstanding")', function() {
      // uncomment below and update the code to test the property amountOutstanding
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property paymentFrequency (base name: "paymentFrequency")', function() {
      // uncomment below and update the code to test the property paymentFrequency
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property securityLevel (base name: "securityLevel")', function() {
      // uncomment below and update the code to test the property securityLevel
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property callable (base name: "callable")', function() {
      // uncomment below and update the code to test the property callable
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

    it('should have the property couponType (base name: "couponType")', function() {
      // uncomment below and update the code to test the property couponType
      //var instance = new finnhub.BondProfile();
      //expect(instance).to.be();
    });

  });

}));

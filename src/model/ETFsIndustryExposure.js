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

import ApiClient from '../ApiClient';

/**
 * The ETFsIndustryExposure model module.
 * @module model/ETFsIndustryExposure
 * @version 1.2.1
 */
class ETFsIndustryExposure {
    /**
     * Constructs a new <code>ETFsIndustryExposure</code>.
     * @alias module:model/ETFsIndustryExposure
     */
    constructor() { 
        
        ETFsIndustryExposure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ETFsIndustryExposure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ETFsIndustryExposure} obj Optional instance to populate.
     * @return {module:model/ETFsIndustryExposure} The populated <code>ETFsIndustryExposure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ETFsIndustryExposure();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('sectorExposure')) {
                obj['sectorExposure'] = ApiClient.convertToType(data['sectorExposure'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * ETF symbol.
 * @member {String} symbol
 */
ETFsIndustryExposure.prototype['symbol'] = undefined;

/**
 * Array of industries and exposure levels.
 * @member {Array.<Object>} sectorExposure
 */
ETFsIndustryExposure.prototype['sectorExposure'] = undefined;






export default ETFsIndustryExposure;


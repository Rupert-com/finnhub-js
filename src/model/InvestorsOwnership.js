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
 * The InvestorsOwnership model module.
 * @module model/InvestorsOwnership
 * @version 1.1.4
 */
class InvestorsOwnership {
    /**
     * Constructs a new <code>InvestorsOwnership</code>.
     * @alias module:model/InvestorsOwnership
     */
    constructor() { 
        
        InvestorsOwnership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvestorsOwnership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvestorsOwnership} obj Optional instance to populate.
     * @return {module:model/InvestorsOwnership} The populated <code>InvestorsOwnership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvestorsOwnership();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('ownership')) {
                obj['ownership'] = ApiClient.convertToType(data['ownership'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
InvestorsOwnership.prototype['symbol'] = undefined;

/**
 * Array of investors with detailed information about their holdings.
 * @member {Array.<Object>} ownership
 */
InvestorsOwnership.prototype['ownership'] = undefined;






export default InvestorsOwnership;


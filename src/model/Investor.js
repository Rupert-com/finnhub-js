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
 * The Investor model module.
 * @module model/Investor
 * @version 1.1.1
 */
class Investor {
    /**
     * Constructs a new <code>Investor</code>.
     * @alias module:model/Investor
     */
    constructor() { 
        
        Investor.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Investor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Investor} obj Optional instance to populate.
     * @return {module:model/Investor} The populated <code>Investor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Investor();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], 'Number');
            }
            if (data.hasOwnProperty('change')) {
                obj['change'] = ApiClient.convertToType(data['change'], 'Number');
            }
            if (data.hasOwnProperty('filingDate')) {
                obj['filingDate'] = ApiClient.convertToType(data['filingDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Investor's name.
 * @member {String} name
 */
Investor.prototype['name'] = undefined;

/**
 * Number of shares held by the investor.
 * @member {Number} share
 */
Investor.prototype['share'] = undefined;

/**
 * Number of share changed (net buy or sell) from the last period.
 * @member {Number} change
 */
Investor.prototype['change'] = undefined;

/**
 * Filing date.
 * @member {Date} filingDate
 */
Investor.prototype['filingDate'] = undefined;






export default Investor;


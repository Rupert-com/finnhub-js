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
 * The MajorDevelopments model module.
 * @module model/MajorDevelopments
 * @version 1.1.4
 */
class MajorDevelopments {
    /**
     * Constructs a new <code>MajorDevelopments</code>.
     * @alias module:model/MajorDevelopments
     */
    constructor() { 
        
        MajorDevelopments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MajorDevelopments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MajorDevelopments} obj Optional instance to populate.
     * @return {module:model/MajorDevelopments} The populated <code>MajorDevelopments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MajorDevelopments();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('majorDevelopment')) {
                obj['majorDevelopment'] = ApiClient.convertToType(data['majorDevelopment'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
MajorDevelopments.prototype['symbol'] = undefined;

/**
 * Array of major developments.
 * @member {Array.<Object>} majorDevelopment
 */
MajorDevelopments.prototype['majorDevelopment'] = undefined;






export default MajorDevelopments;


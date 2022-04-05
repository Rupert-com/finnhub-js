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
 * The EconomicDataInfo model module.
 * @module model/EconomicDataInfo
 * @version 1.2.13
 */
class EconomicDataInfo {
    /**
     * Constructs a new <code>EconomicDataInfo</code>.
     * @alias module:model/EconomicDataInfo
     */
    constructor() { 
        
        EconomicDataInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EconomicDataInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicDataInfo} obj Optional instance to populate.
     * @return {module:model/EconomicDataInfo} The populated <code>EconomicDataInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EconomicDataInfo();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Date of the reading
 * @member {String} date
 */
EconomicDataInfo.prototype['date'] = undefined;

/**
 * Value
 * @member {Number} value
 */
EconomicDataInfo.prototype['value'] = undefined;






export default EconomicDataInfo;


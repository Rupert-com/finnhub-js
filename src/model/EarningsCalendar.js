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
import EarningRelease from './EarningRelease';

/**
 * The EarningsCalendar model module.
 * @module model/EarningsCalendar
 * @version 1.2.13
 */
class EarningsCalendar {
    /**
     * Constructs a new <code>EarningsCalendar</code>.
     * @alias module:model/EarningsCalendar
     */
    constructor() { 
        
        EarningsCalendar.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EarningsCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EarningsCalendar} obj Optional instance to populate.
     * @return {module:model/EarningsCalendar} The populated <code>EarningsCalendar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EarningsCalendar();

            if (data.hasOwnProperty('earningsCalendar')) {
                obj['earningsCalendar'] = ApiClient.convertToType(data['earningsCalendar'], [EarningRelease]);
            }
        }
        return obj;
    }


}

/**
 * Array of earnings release.
 * @member {Array.<module:model/EarningRelease>} earningsCalendar
 */
EarningsCalendar.prototype['earningsCalendar'] = undefined;






export default EarningsCalendar;


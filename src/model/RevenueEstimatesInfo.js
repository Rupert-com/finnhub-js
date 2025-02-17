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
 * The RevenueEstimatesInfo model module.
 * @module model/RevenueEstimatesInfo
 * @version 1.2.14
 */
class RevenueEstimatesInfo {
    /**
     * Constructs a new <code>RevenueEstimatesInfo</code>.
     * @alias module:model/RevenueEstimatesInfo
     */
    constructor() { 
        
        RevenueEstimatesInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RevenueEstimatesInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevenueEstimatesInfo} obj Optional instance to populate.
     * @return {module:model/RevenueEstimatesInfo} The populated <code>RevenueEstimatesInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevenueEstimatesInfo();

            if (data.hasOwnProperty('revenueAvg')) {
                obj['revenueAvg'] = ApiClient.convertToType(data['revenueAvg'], 'Number');
            }
            if (data.hasOwnProperty('revenueHigh')) {
                obj['revenueHigh'] = ApiClient.convertToType(data['revenueHigh'], 'Number');
            }
            if (data.hasOwnProperty('revenueLow')) {
                obj['revenueLow'] = ApiClient.convertToType(data['revenueLow'], 'Number');
            }
            if (data.hasOwnProperty('numberAnalysts')) {
                obj['numberAnalysts'] = ApiClient.convertToType(data['numberAnalysts'], 'Number');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Average revenue estimates including Finnhub's proprietary estimates.
 * @member {Number} revenueAvg
 */
RevenueEstimatesInfo.prototype['revenueAvg'] = undefined;

/**
 * Highest estimate.
 * @member {Number} revenueHigh
 */
RevenueEstimatesInfo.prototype['revenueHigh'] = undefined;

/**
 * Lowest estimate.
 * @member {Number} revenueLow
 */
RevenueEstimatesInfo.prototype['revenueLow'] = undefined;

/**
 * Number of Analysts.
 * @member {Number} numberAnalysts
 */
RevenueEstimatesInfo.prototype['numberAnalysts'] = undefined;

/**
 * Period.
 * @member {Date} period
 */
RevenueEstimatesInfo.prototype['period'] = undefined;






export default RevenueEstimatesInfo;


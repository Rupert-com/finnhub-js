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
 * The TickData model module.
 * @module model/TickData
 * @version 1.1.4
 */
class TickData {
    /**
     * Constructs a new <code>TickData</code>.
     * @alias module:model/TickData
     */
    constructor() { 
        
        TickData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TickData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TickData} obj Optional instance to populate.
     * @return {module:model/TickData} The populated <code>TickData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TickData();

            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
            if (data.hasOwnProperty('skip')) {
                obj['skip'] = ApiClient.convertToType(data['skip'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], ['Number']);
            }
            if (data.hasOwnProperty('p')) {
                obj['p'] = ApiClient.convertToType(data['p'], ['Number']);
            }
            if (data.hasOwnProperty('t')) {
                obj['t'] = ApiClient.convertToType(data['t'], ['Number']);
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Symbol.
 * @member {String} s
 */
TickData.prototype['s'] = undefined;

/**
 * Number of ticks skipped.
 * @member {Number} skip
 */
TickData.prototype['skip'] = undefined;

/**
 * Number of ticks returned. If <code>count</code> < <code>limit</code>, all data for that date has been returned.
 * @member {Number} count
 */
TickData.prototype['count'] = undefined;

/**
 * List of volume data.
 * @member {Array.<Number>} v
 */
TickData.prototype['v'] = undefined;

/**
 * List of price data.
 * @member {Array.<Number>} p
 */
TickData.prototype['p'] = undefined;

/**
 * List of timestamp in UNIX ms.
 * @member {Array.<Number>} t
 */
TickData.prototype['t'] = undefined;

/**
 * List of venues/exchanges.
 * @member {Array.<String>} x
 */
TickData.prototype['x'] = undefined;






export default TickData;


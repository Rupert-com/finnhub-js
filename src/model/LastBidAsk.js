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
 * The LastBidAsk model module.
 * @module model/LastBidAsk
 * @version 1.2.13
 */
class LastBidAsk {
    /**
     * Constructs a new <code>LastBidAsk</code>.
     * @alias module:model/LastBidAsk
     */
    constructor() { 
        
        LastBidAsk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LastBidAsk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastBidAsk} obj Optional instance to populate.
     * @return {module:model/LastBidAsk} The populated <code>LastBidAsk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LastBidAsk();

            if (data.hasOwnProperty('b')) {
                obj['b'] = ApiClient.convertToType(data['b'], 'Number');
            }
            if (data.hasOwnProperty('a')) {
                obj['a'] = ApiClient.convertToType(data['a'], 'Number');
            }
            if (data.hasOwnProperty('bv')) {
                obj['bv'] = ApiClient.convertToType(data['bv'], 'Number');
            }
            if (data.hasOwnProperty('av')) {
                obj['av'] = ApiClient.convertToType(data['av'], 'Number');
            }
            if (data.hasOwnProperty('t')) {
                obj['t'] = ApiClient.convertToType(data['t'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Bid price.
 * @member {Number} b
 */
LastBidAsk.prototype['b'] = undefined;

/**
 * Ask price.
 * @member {Number} a
 */
LastBidAsk.prototype['a'] = undefined;

/**
 * Bid volume.
 * @member {Number} bv
 */
LastBidAsk.prototype['bv'] = undefined;

/**
 * Ask volume.
 * @member {Number} av
 */
LastBidAsk.prototype['av'] = undefined;

/**
 * Reference UNIX timestamp in ms.
 * @member {Number} t
 */
LastBidAsk.prototype['t'] = undefined;






export default LastBidAsk;


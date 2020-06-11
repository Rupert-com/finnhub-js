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
 * The Development model module.
 * @module model/Development
 * @version 1.1.1
 */
class Development {
    /**
     * Constructs a new <code>Development</code>.
     * @alias module:model/Development
     */
    constructor() { 
        
        Development.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Development</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Development} obj Optional instance to populate.
     * @return {module:model/Development} The populated <code>Development</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Development();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('datetime')) {
                obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
            }
            if (data.hasOwnProperty('headline')) {
                obj['headline'] = ApiClient.convertToType(data['headline'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Company symbol.
 * @member {String} symbol
 */
Development.prototype['symbol'] = undefined;

/**
 * Published time in <code>YYYY-MM-DD HH:MM:SS</code> format.
 * @member {Date} datetime
 */
Development.prototype['datetime'] = undefined;

/**
 * Development headline.
 * @member {String} headline
 */
Development.prototype['headline'] = undefined;

/**
 * Development description.
 * @member {String} description
 */
Development.prototype['description'] = undefined;






export default Development;


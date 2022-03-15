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
import InsiderSentimentsData from './InsiderSentimentsData';

/**
 * The InsiderSentiments model module.
 * @module model/InsiderSentiments
 * @version 1.2.12
 */
class InsiderSentiments {
    /**
     * Constructs a new <code>InsiderSentiments</code>.
     * @alias module:model/InsiderSentiments
     */
    constructor() { 
        
        InsiderSentiments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InsiderSentiments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InsiderSentiments} obj Optional instance to populate.
     * @return {module:model/InsiderSentiments} The populated <code>InsiderSentiments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InsiderSentiments();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [InsiderSentimentsData]);
            }
        }
        return obj;
    }


}

/**
 * Symbol of the company.
 * @member {String} symbol
 */
InsiderSentiments.prototype['symbol'] = undefined;

/**
 * Array of sentiment data.
 * @member {Array.<module:model/InsiderSentimentsData>} data
 */
InsiderSentiments.prototype['data'] = undefined;






export default InsiderSentiments;


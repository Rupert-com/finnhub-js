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
import EbitEstimatesInfo from './EbitEstimatesInfo';

/**
 * The EbitEstimates model module.
 * @module model/EbitEstimates
 * @version 1.2.13
 */
class EbitEstimates {
    /**
     * Constructs a new <code>EbitEstimates</code>.
     * @alias module:model/EbitEstimates
     */
    constructor() { 
        
        EbitEstimates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EbitEstimates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbitEstimates} obj Optional instance to populate.
     * @return {module:model/EbitEstimates} The populated <code>EbitEstimates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EbitEstimates();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EbitEstimatesInfo]);
            }
            if (data.hasOwnProperty('freq')) {
                obj['freq'] = ApiClient.convertToType(data['freq'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of estimates
 * @member {Array.<module:model/EbitEstimatesInfo>} data
 */
EbitEstimates.prototype['data'] = undefined;

/**
 * Frequency: annual or quarterly.
 * @member {String} freq
 */
EbitEstimates.prototype['freq'] = undefined;

/**
 * Company symbol.
 * @member {String} symbol
 */
EbitEstimates.prototype['symbol'] = undefined;






export default EbitEstimates;


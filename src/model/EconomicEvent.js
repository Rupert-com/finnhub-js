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
 * The EconomicEvent model module.
 * @module model/EconomicEvent
 * @version 1.1.1
 */
class EconomicEvent {
    /**
     * Constructs a new <code>EconomicEvent</code>.
     * @alias module:model/EconomicEvent
     */
    constructor() { 
        
        EconomicEvent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EconomicEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EconomicEvent} obj Optional instance to populate.
     * @return {module:model/EconomicEvent} The populated <code>EconomicEvent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EconomicEvent();

            if (data.hasOwnProperty('actual')) {
                obj['actual'] = ApiClient.convertToType(data['actual'], 'Number');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'Number');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
            if (data.hasOwnProperty('estimate')) {
                obj['estimate'] = ApiClient.convertToType(data['estimate'], 'Number');
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = ApiClient.convertToType(data['event'], 'String');
            }
            if (data.hasOwnProperty('impact')) {
                obj['impact'] = ApiClient.convertToType(data['impact'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Actual release
 * @member {Number} actual
 */
EconomicEvent.prototype['actual'] = undefined;

/**
 * Previous release
 * @member {Number} prev
 */
EconomicEvent.prototype['prev'] = undefined;

/**
 * Country
 * @member {String} country
 */
EconomicEvent.prototype['country'] = undefined;

/**
 * Unit
 * @member {String} unit
 */
EconomicEvent.prototype['unit'] = undefined;

/**
 * Estimate
 * @member {Number} estimate
 */
EconomicEvent.prototype['estimate'] = undefined;

/**
 * Event
 * @member {String} event
 */
EconomicEvent.prototype['event'] = undefined;

/**
 * Impact level
 * @member {String} impact
 */
EconomicEvent.prototype['impact'] = undefined;

/**
 * Release time
 * @member {String} time
 */
EconomicEvent.prototype['time'] = undefined;






export default EconomicEvent;


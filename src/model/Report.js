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
 * The Report model module.
 * @module model/Report
 * @version 1.2.1
 */
class Report {
    /**
     * Constructs a new <code>Report</code>.
     * @alias module:model/Report
     */
    constructor() { 
        
        Report.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Report</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Report} obj Optional instance to populate.
     * @return {module:model/Report} The populated <code>Report</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Report();

            if (data.hasOwnProperty('accessNumber')) {
                obj['accessNumber'] = ApiClient.convertToType(data['accessNumber'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('cik')) {
                obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
            if (data.hasOwnProperty('quarter')) {
                obj['quarter'] = ApiClient.convertToType(data['quarter'], 'Number');
            }
            if (data.hasOwnProperty('form')) {
                obj['form'] = ApiClient.convertToType(data['form'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('filedDate')) {
                obj['filedDate'] = ApiClient.convertToType(data['filedDate'], 'Date');
            }
            if (data.hasOwnProperty('acceptedDate')) {
                obj['acceptedDate'] = ApiClient.convertToType(data['acceptedDate'], 'Date');
            }
            if (data.hasOwnProperty('report')) {
                obj['report'] = ApiClient.convertToType(data['report'], Object);
            }
        }
        return obj;
    }


}

/**
 * Access number.
 * @member {String} accessNumber
 */
Report.prototype['accessNumber'] = undefined;

/**
 * Symbol.
 * @member {String} symbol
 */
Report.prototype['symbol'] = undefined;

/**
 * CIK.
 * @member {String} cik
 */
Report.prototype['cik'] = undefined;

/**
 * Year.
 * @member {Number} year
 */
Report.prototype['year'] = undefined;

/**
 * Quarter.
 * @member {Number} quarter
 */
Report.prototype['quarter'] = undefined;

/**
 * Form type.
 * @member {String} form
 */
Report.prototype['form'] = undefined;

/**
 * Period start date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {Date} startDate
 */
Report.prototype['startDate'] = undefined;

/**
 * Period end date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {Date} endDate
 */
Report.prototype['endDate'] = undefined;

/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {Date} filedDate
 */
Report.prototype['filedDate'] = undefined;

/**
 * Accepted date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {Date} acceptedDate
 */
Report.prototype['acceptedDate'] = undefined;

/**
 * @member {Object} report
 */
Report.prototype['report'] = undefined;






export default Report;


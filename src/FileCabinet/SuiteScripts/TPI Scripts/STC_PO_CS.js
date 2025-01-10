/**
 *
 * @copyright Alex S. Ducken & The Parker Initiative 2024. All rights reserved.
 *
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define([],

function() {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {

    }

    /**
     * Function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @since 2015.2
     */
    function fieldChanged(scriptContext) {

    }

    /**
     * Function to be executed when field is slaved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     *
     * @since 2015.2
     */
    function postSourcing(scriptContext) {

    }

    /**
     * Function to be executed after sublist is inserted, removed, or edited.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function sublistChanged(scriptContext) {

    }

    /**
     * Function to be executed after line is selected.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @since 2015.2
     */
    function lineInit(scriptContext) {

    }

    /**
     * Validation function to be executed when field is changed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     * @param {string} scriptContext.fieldId - Field name
     * @param {number} scriptContext.lineNum - Line number. Will be undefined if not a sublist or matrix field
     * @param {number} scriptContext.columnNum - Line number. Will be undefined if not a matrix field
     *
     * @returns {boolean} Return true if field is valid
     *
     * @since 2015.2
     */
    function validateField(scriptContext) {

    }

    /**
     * Validation function to be executed when sublist line is committed.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateLine(scriptContext) {

    }

    /**
     * Validation function to be executed when sublist line is inserted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateInsert(scriptContext) {

    }

    /**
     * Validation function to be executed when record is deleted.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.sublistId - Sublist name
     *
     * @returns {boolean} Return true if sublist line is valid
     *
     * @since 2015.2
     */
    function validateDelete(scriptContext) {

    }

    //Defined Addresses
    const ADDRESSES = {
        1: ['SCT Manufacturing', '2721 Harvey St.', 'Hudson', 'WI', '54016'],
        2: ['SCT Manufacturing', '2745 Harvey St.', 'Hudson', 'WI', '54016'],
        3: ['SCT Manufacturing', '1301 Swasey St.', 'Hudson', 'WI', '54016']};


    /**
     * Validation function to be executed when record is saved.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @returns {boolean} Return true if record is valid
     *
     * @since 2015.2
     */
    function saveRecord(scriptContext) {
        try{
            let addressList = parseInt(scriptContext.currentRecord.getValue({fieldId: 'custbody_sctshipto'}));
            //Refactor Testing
            log.audit({title: 'Testing addressList', details: addressList});

            if(addressList !== 4){

                // Create the subrecord.
                let shipT = scriptContext.currentRecord.getSubrecord({
                    fieldId: 'shippingaddress'
                });

                // Set values on the subrecord.
                shipT.setValue({
                    fieldId: 'country',
                    value: 'US'
                });

                //Refactor Testing
                log.audit({title: 'Testing Sourcing', details: ADDRESSES[addressList][1]});

                shipT.setValue({
                    fieldId: 'city',
                    value: ADDRESSES[addressList][2]
                });

                shipT.setValue({
                    fieldId: 'state',
                    value: ADDRESSES[addressList][3]
                });

                shipT.setValue({
                    fieldId: 'zip',
                    value: ADDRESSES[addressList][4]
                });

                shipT.setValue({
                    fieldId: 'addr1',
                    value: ADDRESSES[addressList][1]
                });
                shipT.setValue({
                    fieldId: 'addressee',
                    value: ADDRESSES[addressList][0]
                });

                scriptContext.currentRecord.setValue({fieldId: 'shipoverride', value: 'F'});
                scriptContext.currentRecord.setValue({fieldId: 'shipoverride', value: 'T'});

            }

            return true;
        }catch (e) {
            log.error({title: 'Critical error in afterSubmit', details: e});
        }
    }

    return {
        saveRecord: saveRecord
    };
    
});

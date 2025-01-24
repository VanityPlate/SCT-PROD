/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([],
    
    () => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {
                try{
                        //Defined Addresses
                        const ADDRESSES = {
                                1: ['SCT Manufacturing', '2721 Harvey St.', 'Hudson', 'WI', '54016'],
                                2: ['SCT Manufacturing', '2745 Harvey St.', 'Hudson', 'WI', '54016'],
                                3: ['SCT Manufacturing', '1301 Swasey St.', 'Hudson', 'WI', '54016']};

                        let addressList = parseInt(scriptContext.newRecord.getValue({fieldId: 'custbody_sctshipto'}));
                        //Refactor Testing
                        log.audit({title: 'Testing addressList', details: addressList});

                        if(addressList === ){
                                    let recordObj = record.load({id: scriptContext.newRecord.id, });


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

                        }catch(e){
                        log.audit({title: 'Critical error in afterSubmit', details: e});
                }
        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });

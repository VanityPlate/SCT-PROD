/**
 *
 * @copyright The Parker Initiative & Alex S. Ducken 2024. All rights reserved.
 *
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/ui/serverWidget'],
    
    (serverWidget) => {
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
                try {
                        let woForm = scriptContext.form;
                        let isWip = scriptContext.newRecord.getValue({fieldId: 'iswip'});
                        //Validating work order is in correct state to add the reopen button
                        if (isWip == false && (scriptContext.type == 'view' || scriptContext.type == 'edit')  && scriptContext.newRecord.getValue({fieldId: 'status'}) == 'Closed'){
                                //Attaching Button and client script for reopening the work order
                                woForm.clientScriptModulePath = 'SuiteScripts/TPI Scripts/TEMPLAR_WorkOrder_CS.js';
                                woForm.addButton({
                                        id: 'custpage_reopen',
                                        label: 'Reopen WO',
                                        functionName: 'reOpen'
                                });
                        }
                }
                catch(error){
                        log.error({title: 'Critical Error in beforeLoad', details: error});
                }
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

        }

        return {beforeLoad}

    });

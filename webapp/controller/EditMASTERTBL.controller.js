sap.ui.define([
	"testsmartfilter/testsmartfilter/controller/BaseController",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(BaseController, History, MessageToast) {
	"use strict";

	return BaseController.extend("testsmartfilter.testsmartfilter.controller.EditMASTERTBL", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the add controller is instantiated.
		 * @public
		 */
		onInit: function() {

			// Register to the add route matched
			this.getRouter().getRoute("editMASTERTBL").attachPatternMatched(this._onRouteMatched, this);

		},

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		_onRouteMatched: function(oEvent) {

			//here goes your logic which will be executed when the "add" route is hit
			//will be done within the next unit

			var sObjectId =  oEvent.getParameter("arguments").objectId;
			var oView = this.getView();
			oView.bindElement({
				path : "/MASTERTBL(" + sObjectId + ")"	
			});
		},
		
		onCancel: function() {
			this.getModel().resetChanges();
			this.onNavBack();
		},

		/**
		 * Event handler for the save action
		 * @public
		 */
		onSave: function() {
			this.getModel().submitChanges();
			
			var sMessage = this.getResourceBundle().getText("SPRTBLUpdated", [this.getView().getBindingContext().getProperty("NAME")]);
			MessageToast.show(sMessage, {
				closeOnBrowserNavigation : false
			});		
			
			var sId = this.getView().getBindingContext().getProperty("ID");
			this.getRouter().navTo("mastertblobj", {
				objectId : sId
			}, true);
			
		},		

		/**
		 * Event handler for navigating back.
		 * It checks if there is a history entry. If yes, history.go(-1) will happen.
		 * If not, it will replace the current entry of the browser history with the worklist route.
		 * @public
		 */
		onNavBack : function() {
			//this.getModel().deleteCreatedEntry(this._oContext);

			var oHistory = History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				history.go(-1);
			} else {
				// Otherwise we go backwards with a forward history
				var bReplace = true;
				this.getRouter().navTo("mastertbl", {}, bReplace);
			}
		}

	});
});
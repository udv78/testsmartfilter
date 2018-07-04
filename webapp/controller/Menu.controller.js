sap.ui.define(["testsmartfilter/testsmartfilter/controller/BaseController",
'jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
	function(BaseController, jQuery, Controller, MessageToast) {
	"use strict";

	var PageController = BaseController.extend("testsmartfilter.testsmartfilter.controller.Menu", {
		press : function(evt) {
			MessageToast.show("The GenericTile is pressed.");
		},
		pressWorkList : function(evt) {
				this.getRouter().navTo("worklist");
		},
		pressMaterTbl : function(evt) {
				this.getRouter().navTo("mastertbl");
		}
		
	});

	return PageController;
});
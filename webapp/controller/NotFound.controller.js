sap.ui.define([
		"testsmartfilter/testsmartfilter/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("testsmartfilter.testsmartfilter.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);
/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"testsmartfilter/testsmartfilter/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"testsmartfilter/testsmartfilter/test/integration/pages/Worklist",
	"testsmartfilter/testsmartfilter/test/integration/pages/Object",
	"testsmartfilter/testsmartfilter/test/integration/pages/NotFound",
	"testsmartfilter/testsmartfilter/test/integration/pages/Browser",
	"testsmartfilter/testsmartfilter/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "testsmartfilter.testsmartfilter.view."
	});

	sap.ui.require([
		"testsmartfilter/testsmartfilter/test/integration/WorklistJourney",
		"testsmartfilter/testsmartfilter/test/integration/ObjectJourney",
		"testsmartfilter/testsmartfilter/test/integration/NavigationJourney",
		"testsmartfilter/testsmartfilter/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
"@fixture Bugs";
"@page https://uat.apolloadministration.adc.uk.com/";

"@test"["Bug- Testing- Supp2779"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '5.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Testing Bug - Supp2779");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using testing software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "-2"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(name:/^ctl\\d+\\$ContentPlaceHolder1\\$ddlAssessment$/).inputcontainer").find(" > option:nth(0)");
        };
        act.click(actionTarget);
    },
    '10.Click option "VirtualAC"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(VirtualAC)");
        };
        act.click(actionTarget);
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlVirtualSimulation$/)");
    },
    '12.Click option "-2"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(name:/^ctl\\d+\\$ContentPlaceHolder1\\$ddlVirtualSimulation$/).inputcontainer").find(" > option:nth(0)");
        };
        act.click(actionTarget);
    },
    '13.Click option "Strides Customer..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Strides Customer Engagement Manager UK)").eq(1);
        };
        act.click(actionTarget);
    },
    '14.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '15.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '16.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)");
    },
    '18.Click link "21"': function() {
        var actionTarget = function() {
            return $("#ui-datepicker-div").find(".ui-state-default.ui-state-highlight");
        };
        act.click(actionTarget);
    },
    '19.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '20.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '21.Click link "23"': function() {
        var actionTarget = function() {
            return $("#ui-datepicker-div").find(":containsExcludeChildren(23)").eq(1);
        };
        act.click(actionTarget);
    },
    '22.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '23.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '24.Click submit button "OK"': function() {
        act.click("#btnOkRatingScales");
    },
    '25.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '26.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '27.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '28.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '29.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '30.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '31.Click label "English"': function() {
        act.click(".dd-selected-text");
    },
    '32.Click label "Greek"': function() {
        var actionTarget = function() {
            return $("#languageSelector06116ad4e55d4cc1a81ce284b5bb8838").find(":containsExcludeChildren(Greek)").eq(0);
        };
        act.click(actionTarget);
    },
    '33.Click image button "Marking not started"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_gridUsers_ctl\\d+_lnkMarking$/)").eq(0);
        };
        act.click(actionTarget);
    },
    "34.Click image": function() {
        var actionTarget = function() {
            return $(".markActivity").find(" > img:nth(0)").eq(3);
        };
        act.click(actionTarget);
    }
};

"@test"["fix"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "Qatesting1");
    },
    "2.Press key TAB": function() {
        act.press("tab");
    },
    '3.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    "4.Press key ENTER": function() {
        act.press("enter");
    },
    '5.Select in input "ctl00$ContentPlaceH..."': function() {
        act.select(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", 10, 0);
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1", {
            caretPos: 0
        });
    },
    "7.Press key TAB": function() {
        act.press("tab");
    },
    '8.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    "9.Press key ENTER": function() {
        act.press("enter");
    },
    '10.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    "11.Press key Q": function() {
        act.press("q");
    },
    "12.Press key A": function() {
        act.press("a");
    },
    '13.Click option "QA auto testing"': function() {
        act.click(":containsExcludeChildren(QA auto testing)");
    },
    '14.Click select "Select an..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentType$/)");
    },
    '15.Click option "Graduate Dilemmas"': function() {
        act.click(":containsExcludeChildren(Graduate Dilemmas)");
    },
    '16.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "17.Click image": function() {
        act.click("#imgReportBlue");
    },
    '18.Hover over select "ctl00$ContentPlaceH..."': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '19.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '20.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '21.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '22.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '23.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '24.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '25.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '26.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};


"@require ../../modules/CurrentDateMixin.js";
"@fixture Basic_Create_VAC_Testing";
"@page https://uat.apolloadministration.adc.uk.com";

"@test"["Inbox Management Trainee Scheme"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Inbox Management Trainee Scheme");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "VirtualAC"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(VirtualAC)");
        };
        act.click(actionTarget);
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlVirtualSimulation$/)");
    },
    '11.Click option "Management Trainee..."': function() {
        act.click(":containsExcludeChildren(Management Trainee Scheme UK)");
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '13.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "OK"': function() {
        act.click("#btnOkRatingScales");
    },
    '21.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '22.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '23.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '24.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '25.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '26.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '27.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Report Aramec's Strategy Review (UK) - Report"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Report Arames Strategy review");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "VirtualAC"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(VirtualAC)");
        };
        act.click(actionTarget);
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlVirtualSimulation$/)");
    },
    '11.Click option "Aramec\'s Strategy..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Aramecs Strategy Review UK Report)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '13.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "OK"': function() {
        act.click("#btnOkRatingScales");
    },
    '21.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '22.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '23.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '24.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '25.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '26.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '27.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["DITL GC Regional Manager "] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "DITL GC Regional Manager");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "VirtualAC"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(VirtualAC)");
        };
        act.click(actionTarget);
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlVirtualSimulation$/)");
    },
    '11.Click option "GC Regional..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(GC Regional Manager UK)").eq(1);
        };
        act.click(actionTarget);
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '13.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "OK"': function() {
        act.click("#btnOkRatingScales");
    },
    '21.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '22.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '23.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '24.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '25.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '26.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '27.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["VAC weblinks test - FireFox Only"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "VAC weblinks test");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "VirtualAC"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(VirtualAC)");
        };
        act.click(actionTarget);
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlVirtualSimulation$/)");
    },
    '11.Click option "Aramec\'s Strategy..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Aramecs Strategy Review UK Report)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '13.Click option "Generate..."': function() {
        act.click(":containsExcludeChildren(Generate assessment web links that I will assign to Participants manually)");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '17.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Click submit button "OK"': function() {
        act.click("#btnOkRatingScales");
    },
    '19.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtQuantity$/)", "10");
    },
    '20.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '21.Click submit button "Download Web Links"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnDownload$/)");
    },
    '22.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};


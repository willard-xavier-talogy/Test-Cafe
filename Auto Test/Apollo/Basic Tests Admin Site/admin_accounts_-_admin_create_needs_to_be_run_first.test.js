"@require ../../modules/CurrentDateMixin.js";
"@fixture Admin Accounts - admin create needs to be run first";
"@page https://uat.apolloadministration.adc.uk.com/Login.aspx?set=1";



"@test"["QA testing Project account test"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qaproject");
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
    '5.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '6.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    '7.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkProjects$/)");
    },
    '8.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkCreateProject$/)");
    },
    '9.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "qa testing project coordinator account");
    },
    '10.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '12.Click option "Call Centre Dilemmas"': function() {
        act.click(":containsExcludeChildren(Call Centre Dilemmas)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '14.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '15.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '19.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '21.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Call Centre Staff)");
    },
    '22.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '23.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '24.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '25.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '26.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '27.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '28.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '29.Hover over link "Participants"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkParticipants$/)");
    },
    '30.Click link "View Participants"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkViewParticipants$/)");
    },
    '31.Click link "..."': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(3) > div:nth(0) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(5) > a:nth(0)");
    },
    '32.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '33.Hover over link "Administrators"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkStaff$/)");
    },
    '34.Click link "Manage..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateStaff$/)");
    },
    '35.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtForename$/)", "qa");
    },
    '36.Click submit button "Apply Filter"': function() {
        act.click("#btnFilter");
    },
    '38.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '39.Click link "Account Details"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewAccountDetails$/)");
    },
    '40.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '41.Click link "Email Templates"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkEmailTemplates$/)");
    },
    '42.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '43.Click link "MI Reports"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkMIReport$/)");
    },
    '44.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '45.Click link "SIFT Settings"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkSIFTSettings$/)");
    },
    '46.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '47.Click link "Usage Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkUsage$/)");
    },
    '48.Hover over link "My Settings"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkMysettings$/)");
    },
    '49.Click link "Change Time Zone"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkChangeTimeZone$/)");
    },
    "50.Click link": function() {
        act.click(".dd-selected");
    },
    "51.Click link": function() {
        var actionTarget = function() {
            return $(".dd-options.dd-click-off-close").find(" > li:nth(2) > a:nth(0)");
        };
        act.click(actionTarget);
    },
    "52.Click link": function() {
        act.click(".dd-selected");
    },
    '53.Click label "İngilizce"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ngilizce)").eq(0);
        };
        act.click(actionTarget);
    },
    '54.Click link "Home"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_home$/)");
    },
    '55.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["QA assessor account test"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qaassessor");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Hover over link "My Settings"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkMysettings$/)");
    },
    '5.Click link "Change Time Zone"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkChangeTimeZone$/)");
    },
    '6.Click link "Home"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_home$/)");
    },
    "7.Click link": function() {
        act.click(".dd-selected");
    },
    "8.Click link": function() {
        act.click(".dd-option.dd-option-selected");
    },
    '9.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["QA VAC data for assessor account"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing VAC assessor ");
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
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)");
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '19.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)",  TomorrowDateUK());
    },
    '20.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '21.Click option "qa assessor"': function() {
        act.click(":containsExcludeChildren(qa assessor)");
    },
    '22.Click submit button ">"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnAdd$/)");
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
    '31.Click link "Home"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_home$/)");
    },
    '32.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["QA Reg User account test"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qareg");
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
    '5.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '6.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    '7.Click span "Project Details"': function() {
        act.click(":containsExcludeChildren(Project Details)");
    },
    "8.Click link": function() {
        act.click(":attrRegExp(id:/^__tab_ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabSettings$/)");
    },
    '9.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkProjects$/)");
    },
    '10.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkCreateProject$/)");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing reg account");
    },
    '12.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '14.Click option "Administrative..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Administrative Dilemmas)").eq(0);
        };
        act.click(actionTarget);
    },
    '15.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '16.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '17.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '19.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '20.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '23.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '24.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '25.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Administrative Staff)");
    },
    '26.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '27.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '28.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '29.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '30.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '31.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '32.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '33.Click check box "on"': function() {
        var actionTarget = function() {
            return $("#1203721").find(":attrRegExp(name:/^ctl\\d+\\$ctl\\d+\\$ContentPlaceHolder1\\$tabStripProject\\$tabParticipants\\$cphParticipants\\$gridUsers\\$ctl\\d+\\$chkParticipant$/)");
        };
        act.click(actionTarget);
    },
    '34.Click select "ctl00$ctl00$Content..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_ddlAction$/)");
    },
    '35.Click option "Remove Participant"': function() {
        act.click(":containsExcludeChildren(Remove Participant)");
    },
    '36.Click submit button "Select"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_btnAction$/)");
    },
    '37.Click select "ctl00$ctl00$Content..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_ddlAction$/)");
    },
    '38.Click option "Add Existing..."': function() {
        act.click(":containsExcludeChildren(Add Existing Participants)");
    },
    '39.Click submit button "Select"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_btnAction$/)");
    },
    '40.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtForename$/)", "qa");
    },
    '41.Click submit button "Apply Filter"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");

    },
    '50.Click link "Home"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_breadcrumbbar$/)").find(":containsExcludeChildren(Home)");
        };
        act.click(actionTarget);
    },
    '51.Hover over link "Administrators"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkStaff$/)");
    },
    '52.Click link "Manage..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateStaff$/)");
    },
    '53.Click link "..."': function() {
        var actionTarget = function() {
            return $(".gridRow").find(" > td:nth(8) > a:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    '54.Click link "Home"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_breadcrumbbar$/)").find(":containsExcludeChildren(Home)");
        };
        act.click(actionTarget);
    },
    '55.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '56.Click link "Account Details"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewAccountDetails$/)");
    },
    '57.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '58.Click link "Email Templates"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkEmailTemplates$/)");
    },
    '59.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '60.Click link "MI Reports"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkMIReport$/)");
    },
    '61.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '62.Click link "SIFT Settings"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkSIFTSettings$/)");
    },
    '63.Hover over link "Account"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkClients$/)");
    },
    '64.Click link "Usage Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkUsage$/)");
    },
    '65.Hover over link "My Settings"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkMysettings$/)");
    },
    '66.Click link "Change Time Zone"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkChangeTimeZone$/)");
    },
    "67.Click link": function() {
        act.click(".dd-selected");
    },
    "68.Click link": function() {
        var actionTarget = function() {
            return $(".dd-options.dd-click-off-close").find(" > li:nth(3) > a:nth(0)");
        };
        act.click(actionTarget);
    },
    "69.Click link": function() {
        act.click(".dd-selected");
    },
    "70.Click link": function() {
        var actionTarget = function() {
            return $(".dd-options.dd-click-off-close").find(" > li:nth(0) > a:nth(0)");
        };
        act.click(actionTarget);
    },
    '71.Click link "Home"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_home$/)");
    },
    '72.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};
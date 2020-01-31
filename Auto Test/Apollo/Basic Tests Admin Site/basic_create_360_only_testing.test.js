"@require ../../modules/CurrentDateMixin.js";
"@fixture Basic_Create_360_only_Testing";
"@page https://uat.apolloadministration.adc.uk.com";

"@test"["360 Propel a"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing 360a");
    },
    '7.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '8.Click option "PSI 360"': function() {
        act.click(":containsExcludeChildren(PSI 360)");
    },
    '9.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)");
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", " Prople");
    },
    "12.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "13.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "el a");
    },
    '15.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '16.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlQuestionnaire$/)");
    },
    '17.Click option "BAM Nuttall 360..."': function() {
        act.click(":containsExcludeChildren(BAM Nuttall 360 Assessment 2012)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '20.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)", TomorrowDateUK());
    },
    '21.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '22.Click option "qa assessor"': function() {
        act.click(":containsExcludeChildren(qa assessor)");
    },
    '23.Click submit button ">"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnAdd$/)");
    },
    '25.Click submit button ">"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnAdd$/)");
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
    '33.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["360 LIVED English"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing 360 LIVED English");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created use");
    },
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "ing auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "LIVED 360"': function() {
        act.click(":containsExcludeChildren(LIVED 360)");
    },
    '12.Click link "Select"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ThreeSixtyLanguagePicker_gvwAvailable_ctl\\d+_lnkLanguageSelect$/)").eq(0);
        };
        act.click(actionTarget);
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '17.Click option "Line Manager"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Line Manager)").eq(0);
        };
        act.click(actionTarget);
    },
    '18.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '19.Click option "Peers"': function() {
        act.click(":containsExcludeChildren(Peers)");
    },
    '20.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '21.Click option "Direct Reports"': function() {
        act.click(":containsExcludeChildren(Direct Reports)");
    },
    '22.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '23.Click input "ctl00$ContentPlaceH..."': function() {
        act.click("#txtFirstRaterGroup");
    },
    '24.Click check box "on"': function() {
        act.click("#chkOpenTextQuestion1st");
    },
    '25.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type("#txtOpenTextQuestion1st", "Open question 1");
    },
    '26.Click check box "on"': function() {
        act.click("#chkOpenTextQuestion2nd");
    },
    '27.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type("#txtOpenTextQuestion2nd", "Open question 2");
    },
    '28.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '29.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '30.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '31.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '32.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '33.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '34.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '35.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["360 LIVED Turkish"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
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
    '6.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '7.Click option "LIVED 360"': function() {
        act.click(":containsExcludeChildren(LIVED 360)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing Li");
    },
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "360 LIVED Turkish");
    },
    '12.Click link "Select"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ThreeSixtyLanguagePicker_gvwAvailable_ctl\\d+_lnkLanguageSelect$/)").eq(1);
        };
        act.click(actionTarget);
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '17.Click option "Line Manager"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Line Manager)").eq(0);
        };
        act.click(actionTarget);
    },
    '18.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '21.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '22.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '23.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '24.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '25.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '26.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["360 LIVED Romanian"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
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
    '6.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '7.Click option "LIVED 360"': function() {
        act.click(":containsExcludeChildren(LIVED 360)");
    },
    '8.Click link "Select"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ThreeSixtyLanguagePicker_gvwAvailable_ctl\\d+_lnkLanguageSelect$/)").eq(2);
        };
        act.click(actionTarget);
    },
    '9.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA Testing 360 l");
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "LIVED Romanian");
    },
    '12.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '17.Click check box "on"': function() {
        act.click("#chkAdministratorSetsRaters");
    },
    '18.Click option "Peers"': function() {
        act.click(":containsExcludeChildren(Peers)");
    },
    '19.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '20.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
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

"@test"["360 LIVED Spanish"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
    },
    "2.Press key TAB": function() {
        act.press("tab");
    },
    '3.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '4.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '5.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '8.Click option "LIVED 360"': function() {
        act.click(":containsExcludeChildren(LIVED 360)");
    },
    '9.Click link "Select"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ThreeSixtyLanguagePicker_gvwAvailable_ctl\\d+_lnkLanguageSelect$/)").eq(3);
        };
        act.click(actionTarget);
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA testing Live");
    },
    "11.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "12.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "13.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "IVED 360 Spanish");
    },
    '15.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '16.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '17.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)");
    },
    '19.Click link "30"': function() {
        var actionTarget = function() {
            return $("#ui-datepicker-div").find(":containsExcludeChildren(30)");
        };
        act.click(actionTarget);
    },
    '20.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '21.Click option "Direct Reports"': function() {
        act.click(":containsExcludeChildren(Direct Reports)");
    },
    '22.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '23.Click option "Line Manager 2"': function() {
        act.click(":containsExcludeChildren(Line Manager 2)");
    },
    '24.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '25.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtFirstRaterGroup", "group 1");
    },
    "26.Press key TAB": function() {
        act.press("tab");
    },
    '27.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type("#txtFirstRaterGroupDescription", "testing group1");
    },
    "28.Press key TAB": function() {
        act.press("tab");
    },
    '29.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtSecondRaterGroup", "group 2");
    },
    "30.Press key TAB": function() {
        act.press("tab");
    },
    '31.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type("#txtSecondRaterGroupDescription", "testing group 2");
    },
    '32.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '33.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '34.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '35.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '36.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '37.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '38.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '39.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["360 Propel b"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "QA Testing 360 Propel b");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "PSI 360"': function() {
        act.click(":containsExcludeChildren(PSI 360)");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlQuestionnaire$/)");
    },
    '11.Click option "10 point rating..."': function() {
        act.click(":containsExcludeChildren(10 point rating scale)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Click check box "Invite When Launched"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_chkInviteWhenLaunched$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseDate360$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime360$/)");
    },
    '16.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '17.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '18.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '19.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '20.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '21.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '22.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '23.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};


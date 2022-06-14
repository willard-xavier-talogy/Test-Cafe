"@require ../../modules/CurrentDateMixin.js";
"@fixture Sending Emails - All Should Pass";
"@page https://uat.apolloadministration.adc.uk.com/";
"@test"["Sending 360 Propel a to-do Emails"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto25");
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

"@test"["Reset Admin Password Email"] = {
    '1.Click span "Forgotten or lost..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lblForgottenOrLostPassword$/)");
    },
    '2.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsernameForReset$/)", "qaemailpassowrd");
    },
    '3.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtEmailAddress$/)", "qa@examplepassword.com");
    },
    '4.Click submit button "Reset Password"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnResetPassword$/)");
    }
};

"@test"["360 Muiti Report Download"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto25");
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
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "keep");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click(".lnkNoHref[alt='Details']");
     },
    '12.Click check box "on"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_gridUsers_ctl\\d+_chkAllParticipants$/)");
    },
    '13.Click select "ctl00$ctl00$Content..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_ddlAction$/)");
    },
    '14.Click option "Download Multiple..."': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_ddlAction$/)").find(":containsExcludeChildren(Download Multiple Reports)");
        };
        act.click(actionTarget);
    },
    '15.Click submit button "Select"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_btnAction$/)");
    },
    '16.Click submit button "Download Reports"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabParticipants_cphParticipants_btnOkDownload$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
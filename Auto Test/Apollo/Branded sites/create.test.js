"@require ../../modules/CurrentDateMixin.js";
"@fixture Create_Branded_Assessments";
"@page https://uat.apolloadministration.adc.uk.com";

"@test"["Call Center Dilemmas - Tower Hamlets - Create"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click option "Tower Hamlets"': function() {
        act.click(":containsExcludeChildren(Tower Hamlets)");
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Call Centre Dilemmas"': function() {
        act.click(":containsExcludeChildren(Call Centre Dilemmas)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Call Centre Dilemmas - Tower Hamlets");
    },
    '11.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
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
    '17.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '18.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Call Centre Staff)");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Select in input "ctl00$ContentPlaceH..."': function() {
        act.select(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtQuantity$/)", 0, 0);
    },
    '21.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtQuantity$/)", "5");
    },
    '22.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '23.Click submit button "Download Web Links"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnDownload$/)");
    },
    '24.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["Graduate Dilemmas A - BOC - Create"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click option "BOC"': function() {
        act.click(":containsExcludeChildren(BOC)");
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Graduate Dilemmas..."': function() {
        act.click(":containsExcludeChildren(Graduate Dilemmas Form A)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Graduate Dilemmas A - BOC");
    },
    '11.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '13.Click option "Send invitations..."': function() {
        act.click(":containsExcludeChildren(Send invitations to Participants automatically)");
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
    '17.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '18.Click option "A1 - University..."': function() {
        act.click(":containsExcludeChildren(A1 University Students)");
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
    '26.Click link "Home"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ctl\\d+_breadcrumbbar$/)").find(":containsExcludeChildren(Home)").eq(0);
        };
        act.click(actionTarget);
    },
    '27.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["The Employability Questionnaire - Capita PD - Create"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click option "Capita People..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Capita People Development)").eq(0);
        };
        act.click(actionTarget);
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "The Employability..."': function() {
        act.click(":containsExcludeChildren(The Employability Questionnaire)");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '11.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Employability Questionnaire - Capita PD");
    },
    '13.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
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
    '19.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '20.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
    },
    '21.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '22.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '23.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '24.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '25.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '26.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '27.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '28.Click link "Home"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ctl\\d+_breadcrumbbar$/)").find(":containsExcludeChildren(Home)").eq(0);
        };
        act.click(actionTarget);
    },
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Constable BSQ v2  - Wiltshire Police - Create"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click option "Wiltshire Police..."': function() {
        act.click(":containsExcludeChildren(Wiltshire Police SIFT)");
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Police Constable..."': function() {
        act.click(":containsExcludeChildren(Police Constable Behavioural Styles Questionnaire v2)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police BSQv2 - Wilshire Police");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "t", {
            caretPos: 18
        });
    },
    '12.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '19.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
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
    '27.Click link "Home"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ctl\\d+_breadcrumbbar$/)").find(":containsExcludeChildren(Home)").eq(0);
        };
        act.click(actionTarget);
    },
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_linkLogout$/)");
    }
};


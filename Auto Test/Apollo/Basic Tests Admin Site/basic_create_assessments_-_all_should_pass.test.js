"@require ../../modules/CurrentDateMixin.js";
"@fixture Basic_Create_Assessments - All should Pass";
"@page https://uat.apolloadministration.adc.uk.com";

"@test"["Basic Admin Dilemmas"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Basic Admin Dil");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "emmas");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "Administrative..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Administrative Dilemmas)").eq(0);
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '19.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '20.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Administrative Staff)");
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
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
"@test"["Basic Ambulance Service Eligibilty Screen"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Basic Ambulance Service Eligibility Screen");
    },
    '8.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Ambulance Service..."': function() {
        act.click(":containsExcludeChildren(Ambulance Service Eligibility Screen)");
    },
    '11.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    "13.Click table cell": function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_DateRowCloseDate$/)").find(" > td:nth(1)");
        };
        act.click(actionTarget);
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "google");
    },
    '17.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '19.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic Ambulance Service SJT - Audio - New"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Basic Ambulance Service SJT - Audio - New");
    },
    '8.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Ambulance Service..."': function() {
        act.click(":containsExcludeChildren(Ambulance Service Situational Judgement Test Audio Version NEW)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 4
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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
    }
};
"@test"["Ambulance Service SJT Audio Version New"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Ambulance SJT Test - Audio Version NEW");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "Administrative..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Administrative Dilemmas)").eq(0);
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '19.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '20.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Administrative Staff)");
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
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
  
"@test"["Driving Examiner Situational Judgment Test"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Driving Examiner Situational Judgement Test");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "Driving Examiner..."': function() {
        act.click(":containsExcludeChildren(Driving Examiner Situational Judgment Test)");
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '18.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
    
        });    
        },
    '19.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '20.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Driving Standards Agency Staff)");
    },
    '21.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '22.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
    },
    '23.Click button "Next"': function() {
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
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Fire Rescue Service SJT"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Fire Rescue Service SJT Test");
            },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '7.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '8.Click option "Fire & Rescue..."': function() {
        act.click(":containsExcludeChildren(Fire Rescue Service Situational Judgement Test)");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '10.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '11.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
      },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["Fire Rescue Service BSQ"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Fire and Rescue Service BSQ Test");
    },
    '7.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '8.Click option "Fire and Rescue..."': function() {
        act.click(":containsExcludeChildren(Fire and Rescue Service Behavioural Styles Questionnaire)");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '10.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '11.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using ");
    },
    '12.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "auto software");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["G-Research BSQ"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "G-Research BSQ");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using Auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "G-Research..."': function() {
        act.click(":containsExcludeChildren(GResearch Behavioural Styles Questionnaire)");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '11.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '17.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '18.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["Health Education NW"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Health Education NW");
    },
    '7.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '8.Click option "Health Education..."': function() {
        act.click(":containsExcludeChildren(Health Education NW Values Behaviour Assessment)");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '10.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '11.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '17.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Click check box "on"': function() {
        act.click("#chkUsesRandom");
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

"@test"["ISS Healthcare SJT"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "ISS Healthcare SJT");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "ISS Healthcare SJT"': function() {
        act.click(":containsExcludeChildren(ISS Healthcare SJT)");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '11.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '17.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '18.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["Lived 360"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Lived 360");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
  
    },
    '10.Click option "LIVED 360"': function() {
        act.click(":containsExcludeChildren(LIVED 360)");
    },
    '11.Click link "Select"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ThreeSixtyLanguagePicker_gvwAvailable_ctl\\d+_lnkLanguageSelect$/)").eq(0);
        };
        act.click(actionTarget);
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
    '16.Click option "Line Manager"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Line Manager)").eq(0);
        };
        act.click(actionTarget);
    },
    '17.Click submit button ">"': function() {
        act.click("#btnAddRaterGroups");
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '20.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '21.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '22.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '23.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '24.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '25.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Met Police Service SJT"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Met Police Service SJT");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
      '10.Click option "Metropolitan..."': function() {
        act.click(":containsExcludeChildren(Metropolitan Police Service Situational Judgement Test)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 1
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["PMI Match"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "PMI Match");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
      '10.Click option "PMI Match"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)").find(":containsExcludeChildren(PMI Match)");
        };
        act.click(actionTarget);
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 2
        });
    },
    "16.Click table cell": function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_DateRowCloseDate$/)").find(" > td:nth(1)");
        };
        act.click(actionTarget);
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
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '21.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Managers and Senior Executives)");
    },
    '22.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '23.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
    },
    '24.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
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
    '31.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Call Handler SJT Test - Audio Version V1"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");

    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Call Handler SJT Test - Audio Version V1");
    },
    '8.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "Police Call..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Police Call Handler Situational Judgement Test Audio Version)").eq(0);
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 0
        });
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
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Call Handler SJT Test - Audio Version V2"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Call Handler SJT Test - Audio Version V2");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Police Call..."': function() {
        act.click(":containsExcludeChildren(Police Call Handler Situational Judgement Test Audio Version V2)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Police Call Handlers)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '21.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Constable BSQ V1"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Constable BSQ V1");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");

    },
    '10.Click option "Police Constable..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Police Constable Behavioural Styles Questionnaire)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 1
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 - Applicants"': function() {
        act.click(":containsExcludeChildren(Norm 1 Applicants)");
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

"@test"["Police Constable BSQ V2"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Constable BSQ V2");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
 
    },
    '10.Click option "Police Constable..."': function() {
        act.click(":containsExcludeChildren(Police Constable Behavioural Styles Questionnaire v2)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '20.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '21.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '22.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '23.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '24.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '25.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Constable BSQ V3"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },   
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Constable BSQ V3");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");

    },
    '10.Click option "Police Constable..."': function() {
        act.click(":containsExcludeChildren(Police Constable Behavioural Styles Questionnaire v3)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());

    },
    '23.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '24.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '25.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '26.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '27.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '28.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '29.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '30.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Constable SJT - Non Video"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },   
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Constable SJT - Non Video");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Police Constable..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Police Constable Situational Judgement Test)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 1
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 - Applicants"': function() {
        act.click(":containsExcludeChildren(Norm 1 Applicants)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '21.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Constable SJT - Video Version"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },   
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Constable SJT - Video Version");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Police Constable..."': function() {
        act.click(":containsExcludeChildren(Police Constable Situational Judgement Test Video Version)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 2
        });
  },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '21.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 Police Officers and Community members)");
    },
    '22.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '23.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
    },
    '24.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
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
    '31.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Police Sergeant SJT"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Police Sergeant SJT");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Police Sergeant..."': function() {
        act.click(":containsExcludeChildren(Police Sergeant Situational Judgement Test)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 1
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 - Applicants"': function() {
        act.click(":containsExcludeChildren(Norm 1 Applicants)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '21.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Smart Aptitude - Abstract Reasoning Text"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Smart Aptitude - Abstract Reasoning Test");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
   
    },
    '10.Click option "Smart Aptitude -..."': function() {
        act.click(":containsExcludeChildren(Smart Aptitude Abstract Reasoning Test)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Apprentices"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)").find(":containsExcludeChildren(Apprentices)");
        };
        act.click(actionTarget);
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

"@test"["Smart Aptitude - Numerical Reasoning Test"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Smart Aptitude - Numerical Reasoning Test");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto softwe");
    },
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "are");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
       },
    '12.Click option "Smart Aptitude -..."': function() {
        act.click(":containsExcludeChildren(Smart Aptitude Numerical Reasoning Test)");
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
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '21.Click option "Graduate Applicants"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Graduate Applicants)").eq(0);
        };
        act.click(actionTarget);
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
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Smart Aptitude - Verbal Reasoning Test"] = {
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
    '5.Hover over link "Create Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '6.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    }, 
    '6.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Smart Aptitude - Verbal Reasoning Text");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Smart Aptitude -..."': function() {
        act.click(":containsExcludeChildren(Smart Aptitude Verbal Reasoning Test)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Graduate Applicants"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Graduate Applicants)").eq(0);
        };
        act.click(actionTarget);
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

"@test"["Special Constable BSQ"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Special Constable BSQ");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Special Constable..."': function() {
        act.click(":containsExcludeChildren(Special Constable Behavioural Styles Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 4
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 - Applicants"': function() {
        act.click(":containsExcludeChildren(Norm 1 Applicants)");
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

"@test"["Special Constable SJT"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Special Constable SJT");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using Auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Special Constable..."': function() {
        act.click(":containsExcludeChildren(Special Constable Situational Judgement Test)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 - Applicants"': function() {
        act.click(":containsExcludeChildren(Norm 1 Applicants)");
    },
    '20.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '21.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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
    '29.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["The Employability Questionnaire"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The Employability Questionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");

    },
    '10.Click option "The Employability..."': function() {
        act.click(":containsExcludeChildren(The Employability Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["The Engagement Questionnaire"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The Engagement Qustionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "The Engagement..."': function() {
        act.click(":containsExcludeChildren(The Engagement Questionnaire)");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '16.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '17.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '19.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '20.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '22.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '23.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '24.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["The Hyde Group BSQ"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The Hyde Group BSQ");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The Hyde Group..."': function() {
        act.click(":containsExcludeChildren(The Hyde Group Behavioural Styles Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["The London Factor Assessment"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The London Factor Assessment");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The London Factor..."': function() {
        act.click(":containsExcludeChildren(The London Factor Assessment)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
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
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["The Resilience Questionnaire"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The Resilience Questionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The Resilience..."': function() {
        act.click(":containsExcludeChildren(The Resilience Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 1
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 2
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlNormGroup$/)");
    },
    '19.Click option "Norm 1 -..."': function() {
        act.click(":containsExcludeChildren(Norm 1 UK Working Adults)");
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

"@test"["Wrong date test"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The ThinkForward Questionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The ThinkForward..."': function() {
        act.click(":containsExcludeChildren(The ThinkForward Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", "31/410/2019");
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 4
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
    },
    '20.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    }
};

"@test"["The Think Forward Questionnaire"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The ThinkForward Questionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The ThinkForward..."': function() {
        act.click(":containsExcludeChildren(The ThinkForward Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 3
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 3
        });
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["The Think Forward Work Readiness Tracker"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "The ThinkForward Work Readiness Tracker");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "The ThinkForward..."': function() {
        act.click(":containsExcludeChildren(The ThinkForward Work Readiness Tracker)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 2
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlScoreScale$/)");
    },
    '19.Click option "Percentile"': function() {
        act.click(":containsExcludeChildren(Percentile)");
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

"@test"["TJX Motiv8 Questionnaire"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "TJX Motiv8 Questionnaire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "TJX Motiv8..."': function() {
        act.click(":containsExcludeChildren(TJX Motiv8 Questionnaire)");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessmentMode$/)");
    },
    '12.Click option "Assign..."': function() {
        act.click(":containsExcludeChildren(Assign Participants for supervised administration)");
    },
    '13.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateStartDate$/)", CurrentDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtStartTime$/)", {
            caretPos: 4
        });
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)", {
            caretPos: 4
        });
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Upload Multiple..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnUpload$/)");
    },
    '20.Click file button "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)");
    },
    '21.Upload "uploadpeopleforapolloV6.csv" file': function() {
        act.upload(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUploadFile$/)", "./uploads/uploadpeopleforapolloV6.csv");
    },
    '22.Click submit button "Upload File"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnSubmit$/)");
    },
    '23.Click button "Confirm"': function() {
        act.click("#btnConfirm");
    },
    '24.Click submit button "Launch Project"': function() {
        handleConfirm(true);
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '25.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
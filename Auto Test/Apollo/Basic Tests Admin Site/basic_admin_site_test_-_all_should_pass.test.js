"@fixture Basic_admin_site_test - All Should Pass";
"@page https://uat.apolloadministration.adc.uk.com/login.aspx?ReturnUrl=%2fDefault.aspx";

"@test"["Wrong username and password"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "wrongname");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "badpassword");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    }
};

"@test"["Languages drop down"] = {
    "1.Click link": function() {
        act.click(".dd-selected");
    },
    '2.Click label "US English"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(US English)").eq(0);
        };
        act.click(actionTarget);
    },
    '3.Click label "US English"': function() {
        act.click(".dd-selected-text");
    },
    '4.Click label "Turkish"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Turkish)").eq(0);
        };
        act.click(actionTarget);
    },
    "5.Click link": function() {
        act.click(".dd-selected");
    },
    '6.Click label "Romence"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Romence)").eq(0);
        };
        act.click(actionTarget);
    },
    "7.Click link": function() {
        act.click(".dd-selected");
    },
    '8.Click label "Portugheză"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Portughez)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click link": function() {
        act.click(".dd-selected");
    },
    '10.Click label "Iatliano"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Iatliano)").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click link": function() {
        act.click(".dd-selected");
    },
    '12.Click label "Spagnolo"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Spagnolo)").eq(0);
        };
        act.click(actionTarget);
    },
    "13.Click link": function() {
        act.click(".dd-selected");
    },
    '14.Click label "Francés"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Francés)").eq(0);
        };
        act.click(actionTarget);
    },
    "15.Click link": function() {
        act.click(".dd-selected");
    },
    '16.Click label "Japonais"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Japonais)").eq(0);
        };
        act.click(actionTarget);
    },
    "17.Click link": function() {
        act.click(".dd-selected");
    },
    '18.Click label "German"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(German)").eq(0);
        };
        act.click(actionTarget);
    },
    '19.Click label "Deutsch"': function() {
        act.click(".dd-selected-text");
    },
    '20.Click label "Englisch"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Englisch)").eq(0);
        };
        act.click(actionTarget);
    }
};

"@test"["Bad user reset password"] = {
    '1.Click span "Forgotten or lost..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lblForgottenOrLostPassword$/)");
    },
    '2.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsernameForReset$/)", "baduser");
    },
    '3.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtEmailAddress$/)", "baduser@example.com");
    },
    '4.Click submit button "Reset Password"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnResetPassword$/)");
    },
    '5.Click submit button "Cancel"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ApolloNETButton1$/)");
    }
};

"@test"["Legal Notice"] = {
    '1.Click span "Legal Notices"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lblLegalNotices$/)");
    },
    '2.Click span "Privacy Policy"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkprivacy$/)");
    },
    '3.Click span "Privacy Policy"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkprivacy$/)");
    },
    '4.Click span "Terms of Business"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnktermsandconditions$/)");
    },
    '5.Click span "Terms of Business"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnktermsandconditions$/)");
    },
    '6.Click span "Copyright Statement"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkcopyright$/)");
    },
    '7.Click span "Copyright Statement"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkcopyright$/)");
    },
    '8.Click span "Ethical Use of..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkethical$/)");
    },
    '9.Click span "Ethical Use of..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_lnkethical$/)");
    },
    '10.Click link "Back To Login"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogin$/)");
    }
};

"@test"["a&dc PSI link"] = {
    '1.Click <strong> "a&dc - a..."': function() {
        act.click(":containsExcludeChildren(adc a PSI business)");
    }
};





"@test"["No close date test"] = {
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
    '7.Click link "Home"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_home$/)");
    },
    '8.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '21.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '22.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "ambulance");
    },
    '23.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '24.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    '25.Click span "Project Details"': function() {
        act.click(":containsExcludeChildren(Project Details)");
    },
    '26.Click span "Project Settings"': function() {
        act.click(":containsExcludeChildren(Project Settings)");
    },
    '27.Click button "Save"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_ContentPlaceHolder1_tabStripProject_tabSettings_ContentPlaceHolder1_btnNext$/)");
    },
    '28.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
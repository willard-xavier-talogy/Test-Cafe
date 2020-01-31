"@require ../../modules/CurrentDateMixin.js";
"@fixture Other Branded create tests";
"@page https://uat.apolloadministration.adc.uk.com/";

"@test"["Avon FRS Eligibility"] = {
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
    '5.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "Create Project"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkCreateProject$/)");
    },
    '8.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Avon Fire &..."': function() {
        act.click(":containsExcludeChildren(Avon Fire Rescue Service Eligibility Screen)");
    },
    '11.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Avon Fire & Rescue Service Eligibility");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);

    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "google");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '21.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Cheshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Cheshire");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Cheshire Fire &..."': function() {
        act.click(":containsExcludeChildren(Cheshire Fire Rescue Service Eligibility Screen)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", " Fire & re");
    },
    "11.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "12.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Rescue FRS Eligibility");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '16.12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "ws@example.com");
    },
    '19.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '20.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "google");
    },
    '21.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '22.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '23.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Cumbria FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Cumbria");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Cumbria Fire &..."': function() {
        act.click(":containsExcludeChildren(Cumbria Fire Rescue Service Eligibility Screen)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", " Fire & Rescue FRS Eligibility");
    },
    '11.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '12.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '20.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Devon & Somerset FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Devon & Somerset Fire & Recue Eligibility");
    },
    '7.Click text area "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "s", {
            caretPos: 26
        });
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "Devon & Somerset..."': function() {
        act.click(":containsExcludeChildren(Devon Somerset Fire Rescue Service Eligibility Screen)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '21.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Dorset & Wiltshire FRS Eligibility"] = {
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
    '7.Click option "Dorset & Wiltshire..."': function() {
        act.click(":containsExcludeChildren(Dorset Wiltshire Fire Rescue Service Eligibility Screen)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Dorset & Wiltshire Fire & Rescue FRS Eligibility");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());

    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);

    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["Durham & Darlington FRS Eligibility"] = {
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
    '7.Click option "Durham &..."': function() {
        act.click(":containsExcludeChildren(Durham Darlington Fire Rescue Service Eligibility Screen)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Durham & Darlington Fire & Resuce Eligibility");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Gogg");
    },
    "17.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "18.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '19.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "ogle");
    },
    '20.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '21.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '22.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Durham & Darlington FRS Apprentice Eligibility"] = {
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
    '7.Click option "Durham &..."': function() {
        act.click(":containsExcludeChildren(Durham Darlington FRS Apprentice Eligibility Screen)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Durham & Darlington FRE");
    },
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "s");
    },
    "11.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "S Apprentice Eligibility");
    },
    '13.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '14.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '17.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '19.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);

    },
    '20.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '21.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '22.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '23.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Kent Fire & Rescue FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Kent Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Kent Fire &..."': function() {
        act.click(":containsExcludeChildren(Kent Fire Rescue Service Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["North Wales FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "North Wales");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "North Wales Fire..."': function() {
        act.click(":containsExcludeChildren(North Wales Fire Rescue Service Eligibility Screen)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", " Fire & Rescue Eligibility");
    },
    '11.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '12.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '20.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Oxfordshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Oxfordshire Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Oxfordshire Fire &..."': function() {
        act.click(":containsExcludeChildren(Oxfordshire Fire Rescue Service Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["Royal Berkshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Royal Berkshire Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Royal Berkshire..."': function() {
        act.click(":containsExcludeChildren(Royal Berkshire Fire Rescue Service Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());

    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["Shropshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Shropshire Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "Shropshire Fire &..."': function() {
        act.click(":containsExcludeChildren(Shropshire Fire Rescue Service Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },   
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["South Yorkshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "South Yorj");
    },
    "7.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "kshire Fire & Rescue Eligibility");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto sfotware");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "South Yorkshire..."': function() {
        act.click(":containsExcludeChildren(South Yorkshire Fire Rescue Service Eligibility Screen)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '21.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["South Yorkshire On-call FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "South Yorkshire Fire & Rescue On-call Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "South Yorkshire..."': function() {
        act.click(":containsExcludeChildren(South Yorkshire FRS OnCall Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
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

"@test"["Surrey FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "Surrey Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '9.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '10.Click option "Surrey Fire &..."': function() {
        act.click(":containsExcludeChildren(Surrey Fire Rescue Service Eligibility Screen)");
    },
    '11.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '12.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '14.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '18.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '19.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '20.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["West Midlands FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "West Midlands Fire & Resuce Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Created using auto software");
    },
    '8.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '9.Click option "West Midlands Fire..."': function() {
        act.click(":containsExcludeChildren(West Midlands Fire Rescue Service Eligibility Screen)");
    },
    '10.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '11.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());

    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '15.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '17.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '18.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    }
};

"@test"["West Yorkshire FRS Eligibility"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectName$/)", "West Yorkshire Fire & Rescue Eligibility");
    },
    '7.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "Create ");
    },
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '9.Type in text area "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtProjectDesc$/)", "d using auto software");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlAssessment$/)");
    },
    '11.Click option "West Yorkshire..."': function() {
        act.click(":containsExcludeChildren(West Yorkshire Fire Rescue Service Eligibility Screen)");
    },
    '12.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '13.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)");
    },
    '14.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtDateDeadline$/)", TomorrowDateUK());
    },
    '15.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtCloseTime$/)");
    },
    '16.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtContactEmail$/)", "qa@example.com");
    },
    '17.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type("#txtEntryUrl", "AS" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '18.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ucEligibilityControl_txtExitUrl$/)", "Google");
    },
    '19.Click button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnNext$/)");
    },
    '20.Click submit button "Launch"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnLaunch$/)");
    },
    '21.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};


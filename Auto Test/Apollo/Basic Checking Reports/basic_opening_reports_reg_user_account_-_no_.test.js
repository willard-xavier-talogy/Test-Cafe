"@fixture Basic Opening Reports Reg User Account - No ";
"@page https://uat.apolloadministration.adc.uk.com/login.aspx?ReturnUrl=%2fDefault.aspx";
"@auth qano:Brown72house";

"@test"["Basic opening Call Centre Dilemmas report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Call Centre Dilemmas");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Ambulance Service SJT Audio Version New report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Ambulance SJT Test - Audio");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"[" Basic opening Basic Admin Dilemmas reports"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Basic Admin Dilemmas");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Customer Service Dilemmas report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
    '6.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '7.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Customer Service Dilemmas");
    },
    '8.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '9.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "10.Click image": function() {
        act.click("#imgReportBlue");
    },
    '11.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '12.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '13.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '14.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '15.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '16.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '17.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '18.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Driving Examiner Situational Judgment Test report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Driving Examiner");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Fire Rescue Service BSQ report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Fire and Rescue Service");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".gridRow").find(" > td:nth(13) > img:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Fire Rescue Service BSQ  + reports Fire Rescue Service SJT report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Fire Rescue Service SJT");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening G-Research BSQ report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "G-Research BSQ");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Graduate Dilemmas A report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Graduate Dilemmas A");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Health Education NW reports"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Health Education NW");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Management Dilemmas report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
 
    },
    '5.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '6.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '7.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Management Dilemmas");
    },
    '9.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '10.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        act.click("#imgReportBlue");
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '13.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '14.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '15.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '16.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '17.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '18.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '19.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Met Police Service SJT report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Met Police Service SJT");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening PMI Match report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "PMI Match");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessment Report"': function() {
        act.click(":containsExcludeChildren(Assessment Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Call Handler SJT Test - Audio Version V2 report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Call Handler SJT Test - Audio Version V2");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Constable BSQ V1 report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable BSQ V1");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '8.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    
    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Constable BSQ V2 report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable BSQ V2");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");

    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Constable BSQ V3 report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable BSQ V3");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Constable SJT - non Video Version report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable SJT - No ");
    },
    "7.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "n Video");
    },
    '9.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '10.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        act.click("#imgReportBlue");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '14.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Constable SJT video version report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable SJT -Video Version");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", " ", {
            caretPos: 22
        });
    },
    '9.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '10.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    "11.Click image": function() {
        act.click("#imgReportBlue");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '14.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening Police Sergeant SJT report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police sergeant");
    },
    "7.Click table cell": function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_upnFilter$/)").find(" > table:nth(0) > tbody:nth(0) > tr:nth(0) > td:nth(6)");
        };
        act.click(actionTarget);
    },
    '8.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '9.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "10.Click image": function() {
        act.click("#imgReportBlue");
    },
    '11.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '12.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '13.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};



"@test"["Basic opening Special Constable SJT report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Special constable sjt");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening TJX Motiv8 Questionnaire report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "tjx");
    },
    "7.Press key ENTER": function() {
        act.press("enter");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Baisc opening The Employability Questionnaire report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "employability questionnaire");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening The Employability Questionnaire report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "employability questionnaire");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening The Resilience Questionnaire report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "resilience");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '12.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '13.Click option "Assessor Report"': function() {
        act.click(":containsExcludeChildren(Assessor Report)");
    },
    '14.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '15.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '16.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening The ThinkForward Questionnaire report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "thinkforward questionnaire");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '11.Click option "Participant..."': function() {
        act.click(":containsExcludeChildren(Participant Feedback Report)");
    },
    '12.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '13.Click select "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_ddlReports$/)");
    },
    '14.Click option "Assessor Feedback..."': function() {
        act.click(":containsExcludeChildren(Assessor Feedback Report)");
    },
    '15.Click submit button "View Report"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnView$/)");
    },
    '16.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '17.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};

"@test"["Basic opening The Thinkforward Work Readiness Tracker report"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qano");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "thinkforward work");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    "9.Click image": function() {
        act.click("#imgReportBlue");
    },
    '10.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '11.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};
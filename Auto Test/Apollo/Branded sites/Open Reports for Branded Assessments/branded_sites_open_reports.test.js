"@fixture Branded sites open reports";
"@page https://uat.apolloadministration.adc.uk.com/login.aspx?ReturnUrl=%2fDefault.aspx";

"@test"["Wilshire Police - Open report "] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Hover over select "ctl00$ddAccounts"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '6.Click option "Wiltshire Police..."': function() {
        act.click(":containsExcludeChildren(Wiltshire Police SIFT)");
    },
    '7.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '8.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '9.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(12) > img:nth(0)");
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

"@test"["Capita PD - Open report "] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "qatesting1");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '3.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '4.Hover over select "ctl00$ddAccounts"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '5.Click select "ctl00$ddAccounts"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ddAccounts$/)");
    },
    '6.Click option "Capita People..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Capita People Development)").eq(0);
        };
        act.click(actionTarget);
    },
    '7.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '8.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '9.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(12) > img:nth(0)");
    },
    "10.Click image": function() {
        act.click("#imgReportBlue");
    },
    '11.Click submit button "Back"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnBack$/)");
    },
    '12.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_linkLogout$/)");
    }
};


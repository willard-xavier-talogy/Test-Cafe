"@fixture Basic Running Assessments - All Should Pass";
"@page https://uat.apolloadministration.adc.uk.com";

"@test"["Ambulance Service SJT Audio Version New  - Running "] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "ambulance sjt");
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
    '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");

    },
    '17.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '18.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '19.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '22.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '23.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '24.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '25.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '26.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '28.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    "29.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(2) > td:nth(5)");
        };
        act.click(actionTarget);
    },
    '30.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '31.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '32.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '33.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '34.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '35.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '36.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '37.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '38.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '39.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '40.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '41.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '42.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '43.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '44.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '45.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '46.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '47.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '48.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '49.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '50.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '51.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '52.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '55.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '56.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '57.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '60.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '61.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '62.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '63.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '64.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '65.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '66.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '67.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '68.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '69.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '70.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '71.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '72.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '73.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "74.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(1) > td:nth(5)");
        };
        act.click(actionTarget);
    },
    '75.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '76.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '77.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '78.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '79.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '80.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '81.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '82.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '83.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '84.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '85.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '86.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '87.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '88.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '91.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '92.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '93.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '96.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '97.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '98.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '101.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '102.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '103.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '106.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '107.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '108.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "110.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(1) > td:nth(5)");
        };
        act.click(actionTarget);
    },
    '111.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '112.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '113.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '114.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '115.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '116.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '117.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '118.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '119.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '120.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '121.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '122.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '123.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '124.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '125.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '126.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '127.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '128.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '129.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '130.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '131.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '132.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '133.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '134.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Basic Admin Dilemmas - Running"] = {
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
    '4.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Basic admin dilemmas");
    },
    '5.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '6.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '13.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '14.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '15.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '16.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '17.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '18.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '19.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '20.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '21.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '22.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '23.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '24.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '25.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '26.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '27.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '28.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '29.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '30.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '31.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '32.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '33.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '34.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '35.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '36.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '37.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '38.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '41.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '42.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '43.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '44.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '45.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '46.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '47.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '48.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '49.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '50.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '51.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '52.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '53.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '54.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '55.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '56.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '57.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '58.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '59.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '60.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '61.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '62.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '63.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '64.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '65.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '66.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '67.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '68.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '69.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '70.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '71.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '72.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '73.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '74.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "75.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(1) > td:nth(1)");
        };
        act.click(actionTarget);
    },
    '76.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '77.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '78.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '79.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '80.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '81.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '82.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '83.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '84.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '87.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    "88.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(3) > td:nth(1)");
        };
        act.click(actionTarget);
    },
    '89.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '90.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '91.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '92.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '93.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '94.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '95.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '96.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '97.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '98.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '99.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '100.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '101.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '102.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '103.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '104.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '105.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '106.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '107.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '108.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '109.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '110.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '111.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '112.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '113.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '114.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    "115.Click table cell": function() {
        var actionTarget = function() {
            return $("#tableOptions").find(" > tbody:nth(0) > tr:nth(4) > td:nth(1)");
        };
        act.click(actionTarget);
    },
    '116.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '118.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '119.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '120.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '121.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '122.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '123.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '124.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '125.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '126.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '127.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '128.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '129.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '130.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '131.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Basic Ambulance Service SJT - Audio - New - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "SJT - Audio - New");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
    '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '18.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '28.Click button "Next"': function() {
        act.click("#ContextNext");
    },
    '29.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '30.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '31.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '32.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '33.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '34.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '35.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '36.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '37.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '38.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '39.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '40.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '41.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '42.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '43.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '44.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '45.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '46.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '47.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '48.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '49.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '50.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '51.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '52.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '55.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '56.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '57.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '60.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '61.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '62.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '63.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '64.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '65.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '66.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '67.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '68.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '69.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '70.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '71.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '72.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '73.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '74.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '75.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '76.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '77.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '78.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '79.Click button "Next"': function() {
        act.click("#ContextNext");
    },
    '80.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '81.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '82.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '83.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '84.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '85.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '86.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '87.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '88.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '91.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '92.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '93.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '96.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '97.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '98.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '101.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '102.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '103.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '106.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '107.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '108.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '111.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '112.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '113.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '114.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '115.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '116.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '117.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '118.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '119.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '120.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '121.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '122.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '123.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '124.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '125.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '126.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '127.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '128.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '129.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '131.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '132.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '133.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '134.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};
"@test"["Driving Examiner Situational Judgment Test - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Driving Examiner");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '17.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '21.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '22.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '23.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '24.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '25.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '26.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '27.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '28.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '29.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '30.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '32.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '33.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '34.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '35.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '36.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '37.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '38.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '39.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '42.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '43.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '44.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '45.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '46.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '47.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '48.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '49.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '50.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '51.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '52.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '53.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '54.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '55.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '56.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '57.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '58.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '59.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '60.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '61.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '62.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '63.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '64.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '67.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '68.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '69.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '72.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '73.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '74.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '77.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '78.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '79.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '80.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '81.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '82.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '83.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '84.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '87.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '88.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '89.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '92.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '93.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '94.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '95.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '96.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '97.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '98.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '99.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '100.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '101.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '102.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '103.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '104.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '105.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '106.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '107.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '108.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '109.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '110.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '111.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '112.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '113.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '114.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '115.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '116.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '117.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '118.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '119.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '120.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '121.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '122.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '123.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '124.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '125.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '126.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '127.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '128.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Fire Rescue Service BSQ  - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Fire Rescue Service BSQ");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)");
    },
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "11.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '12.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '13.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", " and", {
            caretPos: 4
        });
    },
    '14.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '15.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '21.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '22.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '23.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '24.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '25.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '26.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '27.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '28.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '29.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4026']").eq(0);
        };
        act.click(actionTarget);
    },
    '30.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4027']").eq(0);
        };
        act.click(actionTarget);
    },
    '31.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4028']").eq(0);
        };
        act.click(actionTarget);
    },
    '32.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4029']").eq(0);
        };
        act.click(actionTarget);
    },
    '33.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '34.Click image "Down"': function() {
        act.click("#btnDown");
    },
    '35.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(1);
        };
        act.click(actionTarget);
    },
    '36.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(2);
        };
        act.click(actionTarget);
    },
    '37.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '38.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4030']").eq(0);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4031']").eq(3);
        };
        act.click(actionTarget);
    },
    '40.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4032']").eq(2);
        };
        act.click(actionTarget);
    },
    '41.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4033']").eq(1);
        };
        act.click(actionTarget);
    },
    '42.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '43.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4034']").eq(6);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4035']").eq(4);
        };
        act.click(actionTarget);
    },
    '45.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4036']").eq(5);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4037']").eq(3);
        };
        act.click(actionTarget);
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4038']").eq(2);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4039']").eq(5);
        };
        act.click(actionTarget);
    },
    '50.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4040']").eq(4);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4041']").eq(6);
        };
        act.click(actionTarget);
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4042']").eq(6);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4043']").eq(3);
        };
        act.click(actionTarget);
    },
    '55.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4044']").eq(2);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4045']").eq(1);
        };
        act.click(actionTarget);
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4046']").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4047']").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4048']").eq(4);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4049']").eq(5);
        };
        act.click(actionTarget);
    },
    '62.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '63.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4050']").eq(6);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4051']").eq(6);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4052']").eq(5);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4053']").eq(5);
        };
        act.click(actionTarget);
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click image "Up"': function() {
        var actionTarget = function() {
            return $("#pairsTable1").find("[alt='Up']");
        };
        act.click(actionTarget);
    },
    '69.Click image "Up"': function() {
        var actionTarget = function() {
            return $("#pairsTable2").find("[alt='Up']");
        };
        act.click(actionTarget);
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4054']").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4055']").eq(4);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4056']").eq(2);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4057']").eq(2);
        };
        act.click(actionTarget);
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click image "Up"': function() {
        act.click("#btnUp");
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4058']").eq(6);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4059']").eq(0);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4060']").eq(1);
        };
        act.click(actionTarget);
    },
    '81.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4061']").eq(5);
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4062']").eq(6);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4063']").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4064']").eq(1);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4065']").eq(2);
        };
        act.click(actionTarget);
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4066']").eq(6);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4067']").eq(2);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4068']").eq(4);
        };
        act.click(actionTarget);
    },
    '91.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4069']").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4070']").eq(0);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4071']").eq(2);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4072']").eq(1);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4073']").eq(5);
        };
        act.click(actionTarget);
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4074']").eq(6);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4075']").eq(5);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4076']").eq(4);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4077']").eq(3);
        };
        act.click(actionTarget);
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4078']").eq(2);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4079']").eq(4);
        };
        act.click(actionTarget);
    },
    '105.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4080']").eq(3);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4081']").eq(1);
        };
        act.click(actionTarget);
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4082']").eq(6);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4083']").eq(3);
        };
        act.click(actionTarget);
    },
    '110.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4084']").eq(5);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4085']").eq(4);
        };
        act.click(actionTarget);
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4086']").eq(5);
        };
        act.click(actionTarget);
    },
    '114.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4087']").eq(6);
        };
        act.click(actionTarget);
    },
    '115.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4088']").eq(5);
        };
        act.click(actionTarget);
    },
    '116.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4089']").eq(4);
        };
        act.click(actionTarget);
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "118.Click image": function() {
        var actionTarget = function() {
            return $(".tiesTableCol3").find(" > img:nth(1)").eq(1);
        };
        act.click(actionTarget);
    },
    '119.Click button "Next"': function() {
        handleConfirm(true);
        act.click("#btnNext");
    },
    '120.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4090']").eq(2);
        };
        act.click(actionTarget);
    },
    '121.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4091']").eq(4);
        };
        act.click(actionTarget);
    },
    '122.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4092']").eq(3);
        };
        act.click(actionTarget);
    },
    '123.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4093']").eq(1);
        };
        act.click(actionTarget);
    },
    '124.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '125.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4094']").eq(6);
        };
        act.click(actionTarget);
    },
    '126.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4095']").eq(5);
        };
        act.click(actionTarget);
    },
    '127.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4096']").eq(4);
        };
        act.click(actionTarget);
    },
    '128.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4097']").eq(3);
        };
        act.click(actionTarget);
    },
    '129.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '130.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4098']").eq(2);
        };
        act.click(actionTarget);
    },
    '131.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4099']").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4100']").eq(5);
        };
        act.click(actionTarget);
    },
    '133.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4101']").eq(6);
        };
        act.click(actionTarget);
    },
    '134.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '135.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4102']").eq(6);
        };
        act.click(actionTarget);
    },
    "136.Click table cell": function() {
        var actionTarget = function() {
            return $("#quadTable").find(" > tbody:nth(0) > tr:nth(2) > td:nth(5)");
        };
        act.click(actionTarget);
    },
    '137.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4104']").eq(2);
        };
        act.click(actionTarget);
    },
    '138.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4105']").eq(1);
        };
        act.click(actionTarget);
    },
    '139.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '140.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4106']").eq(0);
        };
        act.click(actionTarget);
    },
    '141.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4107']").eq(2);
        };
        act.click(actionTarget);
    },
    '142.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4108']").eq(1);
        };
        act.click(actionTarget);
    },
    '143.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4109']").eq(4);
        };
        act.click(actionTarget);
    },
    '144.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '145.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4110']").eq(6);
        };
        act.click(actionTarget);
    },
    '146.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4111']").eq(5);
        };
        act.click(actionTarget);
    },
    '147.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4112']").eq(4);
        };
        act.click(actionTarget);
    },
    '148.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4113']").eq(3);
        };
        act.click(actionTarget);
    },
    '149.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '150.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4114']").eq(2);
        };
        act.click(actionTarget);
    },
    '151.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4115']").eq(3);
        };
        act.click(actionTarget);
    },
    '152.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4116']").eq(5);
        };
        act.click(actionTarget);
    },
    '153.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4117']").eq(6);
        };
        act.click(actionTarget);
    },
    '154.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '155.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4118']").eq(6);
        };
        act.click(actionTarget);
    },
    '156.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4119']").eq(5);
        };
        act.click(actionTarget);
    },
    '157.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4120']").eq(4);
        };
        act.click(actionTarget);
    },
    '158.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='4121']").eq(3);
        };
        act.click(actionTarget);
    },
    '159.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '160.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '161.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Fire Rescue Service SJT Test - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Fire Rescue Service SJT");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '19.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '20.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '21.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '22.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '23.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '24.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '25.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '26.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '27.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '28.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '29.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '30.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '32.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '33.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '34.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '35.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '36.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '37.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '38.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '39.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '40.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '41.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '42.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '43.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '44.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '45.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "47.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionARow").find(".sjtoption-parent").eq(0);
        };
        act.click(actionTarget);
    },
    '48.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '49.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '50.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '51.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '52.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '53.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '54.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '55.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '56.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '57.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '58.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '59.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '60.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '61.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '62.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '63.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '64.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '65.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '66.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '67.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    "68.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionBRow").find(".sjtoption-parent").eq(2);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '70.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '71.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '74.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '75.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '76.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '79.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '80.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '81.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '84.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '85.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '86.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    "89.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionBRow").find(".sjtoption-parent").eq(1);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '91.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '94.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '95.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '96.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '99.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '100.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '101.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "103.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionARow").find(".sjtoption-parent").eq(3);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '105.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    "106.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionDRow").find(".sjtoption-parent").eq(1);
        };
        act.click(actionTarget);
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '109.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '110.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '111.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '114.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '115.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '116.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "118.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionARow").find(".sjtoption-parent").eq(1);
        };
        act.click(actionTarget);
    },
    '119.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    "120.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionCRow").find(".sjtoption-parent").eq(1);
        };
        act.click(actionTarget);
    },
    '121.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '122.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '123.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '124.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '125.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '126.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '127.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '128.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '129.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '130.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '131.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '132.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '133.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '134.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '135.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["G-Research BSQ - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "G-Research");
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
 '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '17.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '21.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '22.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3607']").eq(4);
        };
        act.click(actionTarget);
    },
    '23.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3609']").eq(3);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3610']").eq(5);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3608']").eq(6);
        };
        act.click(actionTarget);
    },
    '26.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3614']").eq(6);
        };
        act.click(actionTarget);
    },
    '28.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3612']").eq(6);
        };
        act.click(actionTarget);
    },
    '29.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3613']").eq(6);
        };
        act.click(actionTarget);
    },
    '30.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3611']").eq(6);
        };
        act.click(actionTarget);
    },
    '31.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '32.Click image "Down"': function() {
        act.click("#btnDown");
    },
    '33.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(1);
        };
        act.click(actionTarget);
    },
    '34.Click image "Up"': function() {
        var actionTarget = function() {
            return $("[alt='Up']").eq(1);
        };
        act.click(actionTarget);
    },
    '35.Click image "Up"': function() {
        var actionTarget = function() {
            return $("[alt='Up']").eq(2);
        };
        act.click(actionTarget);
    },
    '36.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '37.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3615']").eq(4);
        };
        act.click(actionTarget);
    },
    '38.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3617']").eq(4);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3618']").eq(3);
        };
        act.click(actionTarget);
    },
    '40.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3616']").eq(3);
        };
        act.click(actionTarget);
    },
    '41.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '42.Click image "Down"': function() {
        var actionTarget = function() {
            return $("#pairsTable1").find("[alt='Down']");
        };
        act.click(actionTarget);
    },
    '43.Click image "Down"': function() {
        var actionTarget = function() {
            return $("#pairsTable2").find("[alt='Down']");
        };
        act.click(actionTarget);
    },
    '44.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '45.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3622']").eq(2);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3621']").eq(4);
        };
        act.click(actionTarget);
    },
    '47.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3620']").eq(3);
        };
        act.click(actionTarget);
    },
    '48.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3619']").eq(1);
        };
        act.click(actionTarget);
    },
    '49.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '50.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3626']").eq(4);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3624']").eq(5);
        };
        act.click(actionTarget);
    },
    '52.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3623']").eq(6);
        };
        act.click(actionTarget);
    },
    '53.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3625']").eq(2);
        };
        act.click(actionTarget);
    },
    '54.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '55.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3628']").eq(2);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3629']").eq(3);
        };
        act.click(actionTarget);
    },
    '57.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3627']").eq(6);
        };
        act.click(actionTarget);
    },
    '58.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3630']").eq(5);
        };
        act.click(actionTarget);
    },
    '59.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '60.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3634']").eq(0);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3631']").eq(1);
        };
        act.click(actionTarget);
    },
    '62.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3632']").eq(2);
        };
        act.click(actionTarget);
    },
    '63.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3633']").eq(3);
        };
        act.click(actionTarget);
    },
    '64.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '65.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3637']").eq(6);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3638']").eq(5);
        };
        act.click(actionTarget);
    },
    '67.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3635']").eq(4);
        };
        act.click(actionTarget);
    },
    '68.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3636']").eq(5);
        };
        act.click(actionTarget);
    },
    '69.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '70.Click image "Up"': function() {
        act.click("#btnUp");
    },
    '71.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '72.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3641']").eq(2);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3640']").eq(4);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3639']").eq(3);
        };
        act.click(actionTarget);
    },
    '75.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3642']").eq(1);
        };
        act.click(actionTarget);
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3643']").eq(6);
        };
        act.click(actionTarget);
    },
    '78.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3645']").eq(5);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3646']").eq(4);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3644']").eq(3);
        };
        act.click(actionTarget);
    },
    '81.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '82.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3649']").eq(3);
        };
        act.click(actionTarget);
    },
    '83.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3650']").eq(4);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3647']").eq(1);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3648']").eq(0);
        };
        act.click(actionTarget);
    },
    '86.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '87.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3654']").eq(6);
        };
        act.click(actionTarget);
    },
    '88.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3653']").eq(5);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3651']").eq(4);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3652']").eq(3);
        };
        act.click(actionTarget);
    },
    '91.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '92.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3656']").eq(2);
        };
        act.click(actionTarget);
    },
    '93.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3657']").eq(3);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3655']").eq(4);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3658']").eq(5);
        };
        act.click(actionTarget);
    },
    '96.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '97.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3661']").eq(6);
        };
        act.click(actionTarget);
    },
    '98.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3659']").eq(5);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3660']").eq(4);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3662']").eq(3);
        };
        act.click(actionTarget);
    },
    '101.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '102.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3665']").eq(2);
        };
        act.click(actionTarget);
    },
    '103.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3663']").eq(1);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3666']").eq(0);
        };
        act.click(actionTarget);
    },
    '105.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3664']").eq(4);
        };
        act.click(actionTarget);
    },
    '106.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '107.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3669']").eq(6);
        };
        act.click(actionTarget);
    },
    '108.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3670']").eq(5);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3667']").eq(2);
        };
        act.click(actionTarget);
    },
    '110.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3668']").eq(1);
        };
        act.click(actionTarget);
    },
    '111.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '112.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3672']").eq(4);
        };
        act.click(actionTarget);
    },
    '113.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3673']").eq(5);
        };
        act.click(actionTarget);
    },
    '114.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3674']").eq(3);
        };
        act.click(actionTarget);
    },
    '115.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3671']").eq(2);
        };
        act.click(actionTarget);
    },
    '116.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '117.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3678']").eq(6);
        };
        act.click(actionTarget);
    },
    '118.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3677']").eq(5);
        };
        act.click(actionTarget);
    },
    '119.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3675']").eq(4);
        };
        act.click(actionTarget);
    },
    '120.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3676']").eq(3);
        };
        act.click(actionTarget);
    },
    '121.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '122.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3681']").eq(2);
        };
        act.click(actionTarget);
    },
    '123.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3680']").eq(3);
        };
        act.click(actionTarget);
    },
    '124.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3682']").eq(4);
        };
        act.click(actionTarget);
    },
    '125.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3679']").eq(5);
        };
        act.click(actionTarget);
    },
    '126.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '127.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3683']").eq(6);
        };
        act.click(actionTarget);
    },
    '128.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3685']").eq(5);
        };
        act.click(actionTarget);
    },
    '129.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3686']").eq(4);
        };
        act.click(actionTarget);
    },
    '130.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3684']").eq(3);
        };
        act.click(actionTarget);
    },
    '131.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '132.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3687']").eq(1);
        };
        act.click(actionTarget);
    },
    '133.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3688']").eq(4);
        };
        act.click(actionTarget);
    },
    '134.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3689']").eq(2);
        };
        act.click(actionTarget);
    },
    '135.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3690']").eq(5);
        };
        act.click(actionTarget);
    },
    '136.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '137.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3694']").eq(6);
        };
        act.click(actionTarget);
    },
    '138.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3692']").eq(3);
        };
        act.click(actionTarget);
    },
    '139.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3693']").eq(5);
        };
        act.click(actionTarget);
    },
    '140.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3691']").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '142.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3698']").eq(2);
        };
        act.click(actionTarget);
    },
    '143.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3696']").eq(3);
        };
        act.click(actionTarget);
    },
    '144.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3695']").eq(1);
        };
        act.click(actionTarget);
    },
    '145.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3697']").eq(6);
        };
        act.click(actionTarget);
    },
    '146.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '147.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3699']").eq(6);
        };
        act.click(actionTarget);
    },
    '148.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3702']").eq(5);
        };
        act.click(actionTarget);
    },
    '149.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3700']").eq(3);
        };
        act.click(actionTarget);
    },
    '150.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3701']").eq(2);
        };
        act.click(actionTarget);
    },
    '151.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '152.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '153.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["ISS Healthcare SJT - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "ISS Healthcare");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '13.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '14.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '15.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '16.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '16.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '17.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '18.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2880").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '19.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2881").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '20.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2882").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '21.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2879").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '22.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '23.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '24.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '25.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2815").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '26.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2816").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '27.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2817").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '28.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2818").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '29.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '30.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2819").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '31.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2820").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '32.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2821").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '33.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2822").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '34.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '35.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2823").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '36.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2824").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '37.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2825").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '38.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2826").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '39.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '40.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '41.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2827").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '42.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2828").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '43.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2829").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '44.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2830").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '45.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '46.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2831").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '47.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2832").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '48.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2833").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '49.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2834").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '50.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '51.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2835").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '52.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2836").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '53.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2837").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '54.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2838").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '55.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '56.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '57.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2839").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '58.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2840").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '59.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2841").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '60.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2842").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '61.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '62.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2843").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '63.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2844").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '64.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2845").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '65.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2846").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '66.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '67.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2847").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '68.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2848").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '69.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2849").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '70.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2850").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '71.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '72.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2851").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '73.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2852").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '74.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2853").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '75.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2854").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '76.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '77.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '78.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2855").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '79.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2856").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '80.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2857").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '81.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2858").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '82.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '83.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2859").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '84.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2860").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '85.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2861").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '86.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2862").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '87.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '88.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2863").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '89.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2864").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '90.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2865").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '91.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2866").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '92.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '93.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '94.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2867").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '95.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2868").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '96.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2869").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '97.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2870").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '98.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '99.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2871").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '100.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2872").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '101.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2873").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '102.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2874").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '103.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '104.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2875").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '105.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2876").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '106.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2877").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '107.Click span "Very Effective"': function() {
        var actionTarget = function() {
            return $("#radioSet2878").find(":containsExcludeChildren(Very Effective)");
        };
        act.click(actionTarget);
    },
    '108.Click span "Next"': function() {
        act.click(":containsExcludeChildren(Next)");
    },
    '109.Click submit button "Complete"': function() {
        act.click("#btnComplete");
    },
    '110.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Smart Aptitude - Abstract Reasoning Text - Running "] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "abstract");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '13.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '14.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '15.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '16.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '17.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    "18.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "19.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '20.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "21.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '22.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "23.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '24.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "25.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '26.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "27.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '28.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "29.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '30.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "31.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '32.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "33.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '34.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "35.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '36.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "37.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '38.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "39.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '40.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "41.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '42.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "43.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '44.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "45.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '46.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "47.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '48.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "49.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '50.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "51.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '52.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "53.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '54.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "55.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '56.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    "57.Click image": inIFrame($("#iFrameAssessment"), function() {
        var actionTarget = function() {
            return $(".QuestionAnswer").find(" > label:nth(0) > img:nth(0)").eq(4);
        };
        act.click(actionTarget);
    }),
    '58.Click submit button "Next"': inIFrame($("#iFrameAssessment"), function() {
        act.click("#btnNext");
    }),
    '59.Click submit button "Return to Task List"': function() {
        act.click("#btnReturnToTaskList");
    },
    '60.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};



"@test"["The Employability Questionnaire - Running"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto25");
    },
    '2.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Usedf0r");
    },
    "3.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '4.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "t3sting1");
    },
    '5.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '6.Type in password input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtPassword$/)", "Brown72house");
    },
    '7.Click submit button "Login"': function() {
        act.click("#btnLogin");
    },
    '8.Hover over link "Project"': function() {
        act.hover(":attrRegExp(id:/^ctl\\d+_lnkProjects$/)");
    },
    '9.Click link "View Projects"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkViewProjects$/)");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "employability");
    },
    '11.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '12.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
  },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        

    },
    '19.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '20.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '21.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '22.Click radio button "A3:Neither Agree..."': function() {
        act.click("#optA_3");
    },
    "23.Click table cell": function() {
        var actionTarget = function() {
            return $("#tr_OptionB").find(" > td:nth(3)");
        };
        act.click(actionTarget);
    },
    '24.Click radio button "B3:Neither Agree..."': function() {
        act.click("#optB_3");
    },
    '25.Click radio button "C3:Neither Agree..."': function() {
        act.click("#optC_3");
    },
    '26.Click radio button "D3:Neither Agree..."': function() {
        act.click("#optD_3");
    },
    '27.Click radio button "E3:Neither Agree..."': function() {
        act.click("#optE_3");
    },
    '28.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '29.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext3$/)");
    },
    '30.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '31.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '32.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '33.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '34.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '35.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '36.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '37.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '38.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '39.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '40.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '41.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '42.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '43.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '44.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '45.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '46.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '49.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '50.Click radio button "Agree"': function() {
        act.click("#optC4");

    },
    '52.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '55.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '56.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '57.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '58.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '59.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '60.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '61.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '62.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '63.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '64.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '67.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '68.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '69.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '70.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '71.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '72.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '73.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '74.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '75.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '76.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '79.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '80.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '81.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '82.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '83.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '84.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '85.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '86.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '87.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '88.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '91.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '92.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '93.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '94.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '95.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '96.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '97.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '98.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '99.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '100.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '101.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '102.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '103.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '104.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '105.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '106.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '109.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '110.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '111.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '112.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '113.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '114.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '115.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '116.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '117.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '118.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '119.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '120.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '121.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '122.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '123.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '124.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '125.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '120.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '121.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '122.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '123.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '124.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '125.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '126.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '127.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '128.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Met Police Service SJT - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "met police service sjt");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");

    },
    '20.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '21.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '22.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '23.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '24.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '25.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '26.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '27.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '28.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '29.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '30.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '31.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '32.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '33.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '34.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '35.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '36.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '37.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '38.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '39.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '42.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '43.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '44.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '45.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '46.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '47.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '48.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '49.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '50.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '51.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '52.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '53.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '54.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '55.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '56.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '57.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '58.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '59.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '60.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '61.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '62.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '63.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '64.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '67.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '68.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '69.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '72.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '73.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '74.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '77.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '78.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '79.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '80.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '81.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '82.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '83.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '84.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '87.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '88.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '89.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '92.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '93.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '94.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '95.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '96.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '97.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '98.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '99.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '100.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '101.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '102.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '103.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '104.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '105.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '106.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '107.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '108.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '109.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '110.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '111.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '112.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '113.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '114.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '115.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '116.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '117.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '118.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '119.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '120.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '121.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '122.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '123.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '124.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '125.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '126.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '127.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '128.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '129.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '130.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '131.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '132.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '133.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '134.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["PMI Match - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "PMI match");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '17.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '18.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '19.Click radio button "I AGREE"': function() {
        act.click("#Honesty_Accepted");
    },
    '20.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '21.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '22.Click radio button "A3:Neither Agree..."': function() {
        act.click("#optA_3");
    },
    '23.Click radio button "B3:Neither Agree..."': function() {
        act.click("#optB_3");
    },
    '24.Click radio button "C3:Neither Agree..."': function() {
        act.click("#optC_3");
    },
    '25.Click radio button "D3:Neither Agree..."': function() {
        act.click("#optD_3");
    },
    '26.Click radio button "E3:Neither Agree..."': function() {
        act.click("#optE_3");
    },
    '27.Click radio button "E3:Neither Agree..."': function() {
        act.click("#optF_3");
    },
    '28.Click radio button "E3:Neither Agree..."': function() {
        act.click("#optG_3");
    },
    '29.Click radio button "E3:Neither Agree..."': function() {
        act.click("#optH_3");
    },
    '30.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '31.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloNETButton2$/)");
    },
    '32.Click radio button "A4:Agree"': function() {
        act.click("[name='optA'][title='A4:Agree']");
    },
    '33.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '34.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '35.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '36.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '37.Click radio button "E4:Agree"': function() {
        act.click("[name='optF'][title='E4:Agree']");
    },
    '38.Click radio button "E4:Agree"': function() {
        act.click("[name='optG'][title='E4:Agree']");
    },
    '39.Click radio button "E4:Agree"': function() {
        act.click("[name='optH'][title='E4:Agree']");
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '42.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '43.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '44.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '45.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '46.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '47.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optG'][title='E3:Neither Agree nor Disagree']");
    },
    '48.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optH'][title='E3:Neither Agree nor Disagree']");
    },
    '49.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '50.Click radio button "A2:Disagree"': function() {
        act.click("[name='optA'][title='A2:Disagree']");
    },
    '51.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '52.Click radio button "C2:Disagree"': function() {
        act.click("[name='optC'][title='C2:Disagree']");
    },
    '53.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '54.Click radio button "E2:Disagree"': function() {
        act.click("[name='optE'][title='E2:Disagree']");
    },
    '55.Click radio button "E2:Disagree"': function() {
        act.click("[name='optF'][title='E2:Disagree']");
    },
    '56.Click radio button "E2:Disagree"': function() {
        act.click("[name='optG'][title='E2:Disagree']");
    },
    '57.Click radio button "E2:Disagree"': function() {
        act.click("[name='optH'][title='E2:Disagree']");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '60.Click radio button "B5:Strongly Agree"': function() {
        act.click("[name='optB'][title='B5:Strongly Agree']");
    },
    '61.Click radio button "C5:Strongly Agree"': function() {
        act.click("[name='optC'][title='C5:Strongly Agree']");
    },
    '62.Click radio button "D5:Strongly Agree"': function() {
        act.click("[name='optD'][title='D5:Strongly Agree']");
    },
    '63.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optE'][title='E5:Strongly Agree']");
    },
    '64.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '65.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optG'][title='E5:Strongly Agree']");
    },
    '66.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optH'][title='E5:Strongly Agree']");
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '69.Click radio button "B1:Strongly Disagree"': function() {
        act.click("[name='optB'][title='B1:Strongly Disagree']");
    },
    '70.Click radio button "C1:Strongly Disagree"': function() {
        act.click("[name='optC'][title='C1:Strongly Disagree']");
    },
    '71.Click radio button "D1:Strongly Disagree"': function() {
        act.click("[name='optD'][title='D1:Strongly Disagree']");
    },
    '72.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '73.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optF'][title='E1:Strongly Disagree']");
    },
    '74.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optG'][title='E1:Strongly Disagree']");
    },
    '75.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optH'][title='E1:Strongly Disagree']");
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '78.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '79.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '80.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '81.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '82.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '83.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optG'][title='E3:Neither Agree nor Disagree']");
    },
    '84.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optH'][title='E3:Neither Agree nor Disagree']");
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "A2:Disagree"': function() {
        act.click("[name='optA'][title='A2:Disagree']");
    },
    '87.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '88.Click radio button "C2:Disagree"': function() {
        act.click("[name='optC'][title='C2:Disagree']");
    },
    '89.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '90.Click radio button "E2:Disagree"': function() {
        act.click("[name='optE'][title='E2:Disagree']");
    },
    '91.Click radio button "E2:Disagree"': function() {
        act.click("[name='optF'][title='E2:Disagree']");
    },
    '92.Click radio button "E2:Disagree"': function() {
        act.click("[name='optG'][title='E2:Disagree']");
    },
    '93.Click radio button "E2:Disagree"': function() {
        act.click("[name='optH'][title='E2:Disagree']");
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "A4:Agree"': function() {
        act.click("[name='optA'][title='A4:Agree']");
    },
    '96.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '97.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '98.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '101.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '102.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '103.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Call Handler SJT Test - Audio Version V1 - Running"] = {
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
    '12.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "call handler sjt test - audio version v1");


    },
    '28.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '29.Click image "Details"': function() {
        act.click(".lnkNoHref[alt='Details']");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        

    },
    '35.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '24.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '25.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '26.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '27.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '28.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '29.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '30.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '32.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '33.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '34.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '35.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '36.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '37.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '38.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '41.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '42.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '43.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '44.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '45.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '47.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '48.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '49.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '50.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '51.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '52.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '55.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '56.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '57.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '58.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '59.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '60.Click radio button "Effective"': function() {
        act.click("#optG4");
    },
    '61.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '62.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '63.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '64.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '65.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '66.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '67.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '68.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '69.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '70.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '71.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '72.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '73.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '74.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '77.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '78.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '79.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '80.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '81.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '84.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '85.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '86.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '87.Click radio button "Fairly Effective"': function() {
        act.click("#optE3");
    },
    '88.Click radio button "Fairly Effective"': function() {
        act.click("#optF3");
    },
    '89.Click radio button "Fairly Effective"': function() {
        act.click("#optG3");
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '92.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '93.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '94.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '95.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '96.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '97.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '98.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '99.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '100.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '101.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '104.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '105.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '106.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '107.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '108.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '111.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '112.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '113.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '114.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '115.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '116.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '117.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '118.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '119.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '120.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '121.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '122.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '123.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '124.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '125.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '126.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '127.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '128.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '129.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '130.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '131.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '132.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '133.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '134.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '135.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '136.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '137.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '138.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '139.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '140.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '141.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '142.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '143.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '144.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '145.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '146.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '147.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '148.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '149.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '150.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '151.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '152.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '153.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '154.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '155.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '156.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '157.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '158.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '159.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '160.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '161.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '162.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '163.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '164.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '165.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '166.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '167.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '168.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '169.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '170.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '171.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '172.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '173.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '174.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '175.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '176.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '177.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '178.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '179.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    "180.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionBRow").find(".sjtoption-parent").eq(3);
        };
        act.click(actionTarget);
    },
    '181.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '182.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '183.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '184.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '185.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '186.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '187.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '188.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '189.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '190.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '191.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '192.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '193.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '194.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '195.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '196.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '197.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '198.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '199.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '200.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '201.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '202.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '203.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '204.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '205.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '206.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '207.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '208.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '209.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '210.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '211.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '212.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '213.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '214.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '215.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '216.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '217.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '218.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '219.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '220.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '221.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '222.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '223.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '224.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '225.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '226.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '227.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '228.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '229.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '230.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '231.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '232.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '233.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '234.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '235.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '236.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '237.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '238.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '239.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '240.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '241.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '242.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '243.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '244.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '245.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '246.Click radio button "Effective"': function() {
        act.click("#optG4");
    },
    '247.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '248.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '249.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '250.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '251.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '252.Click radio button "Effective"': function() {
        act.click("#optE4");
    },
    '253.Click radio button "Effective"': function() {
        act.click("#optF4");
    },
    '254.Click radio button "Effective"': function() {
        act.click("#optG4");
    },
    '255.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '256.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '257.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '258.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Police Call Handler SJT Test - Audio Version V2 - Running"] = {
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '18.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '22.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '23.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '24.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '25.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '26.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '27.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '28.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '29.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '30.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '31.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '32.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '33.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '34.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '35.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '36.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '37.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '38.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '39.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '40.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '41.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '42.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '43.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '44.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '45.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '46.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '47.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '48.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '49.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '50.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '51.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '52.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '55.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '56.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '57.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '60.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '61.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '62.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '63.Click button "Next"': function() {
        act.click("#btnNext");
    },
    "64.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionARow").find(".sjtoption-parent").eq(3);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '66.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '67.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '68.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '69.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '70.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '71.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '72.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '73.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '74.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '75.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '76.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '77.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '78.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '79.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '80.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '81.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '82.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '83.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '84.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '85.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '86.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '87.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '88.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '89.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '90.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '91.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '92.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '93.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '94.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '95.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '96.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '97.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '98.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '99.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '100.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '101.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '102.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '103.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '104.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '105.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '106.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '107.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '108.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '109.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '110.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '111.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '112.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '113.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '114.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '115.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '116.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '117.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '118.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '119.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '120.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '121.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '122.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '123.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '124.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '125.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '126.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '127.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Constable BSQ V1 - Running"] = {
    '1.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtUsername$/)", "QAAuto25");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable BQ");
    },
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '9.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "SQ V1");
    },
    '10.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
   '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '18.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '19.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '20.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '21.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '22.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '23.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '24.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '25.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '26.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1346']").eq(6);
        };
        act.click(actionTarget);
    },
    '27.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1347']").eq(5);
        };
        act.click(actionTarget);
    },
    '28.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1348']").eq(4);
        };
        act.click(actionTarget);
    },
    '29.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1349']").eq(2);
        };
        act.click(actionTarget);
    },
    '30.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1350']").eq(2);
        };
        act.click(actionTarget);
    },
    '32.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1351']").eq(3);
        };
        act.click(actionTarget);
    },
    '33.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1352']").eq(4);
        };
        act.click(actionTarget);
    },
    '34.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1353']").eq(5);
        };
        act.click(actionTarget);
    },
    '35.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '36.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1354']").eq(6);
        };
        act.click(actionTarget);
    },
    '37.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1355']").eq(5);
        };
        act.click(actionTarget);
    },
    '38.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1356']").eq(4);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1357']").eq(3);
        };
        act.click(actionTarget);
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1358']").eq(3);
        };
        act.click(actionTarget);
    },
    '42.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1359']").eq(4);
        };
        act.click(actionTarget);
    },
    '43.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1360']").eq(5);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1361']").eq(6);
        };
        act.click(actionTarget);
    },
    '45.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '46.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1362']").eq(1);
        };
        act.click(actionTarget);
    },
    '47.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1363']").eq(2);
        };
        act.click(actionTarget);
    },
    '48.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1364']").eq(3);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1365']").eq(4);
        };
        act.click(actionTarget);
    },
    '50.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '51.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1366']").eq(6);
        };
        act.click(actionTarget);
    },
    '52.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1367']").eq(5);
        };
        act.click(actionTarget);
    },
    '53.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1368']").eq(4);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1369']").eq(3);
        };
        act.click(actionTarget);
    },
    '55.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '56.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1370']").eq(0);
        };
        act.click(actionTarget);
    },
    '57.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1371']").eq(1);
        };
        act.click(actionTarget);
    },
    '58.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1372']").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1373']").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '61.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1374']").eq(5);
        };
        act.click(actionTarget);
    },
    '62.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1375']").eq(4);
        };
        act.click(actionTarget);
    },
    '63.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1376']").eq(3);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1377']").eq(2);
        };
        act.click(actionTarget);
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1378']").eq(1);
        };
        act.click(actionTarget);
    },
    '67.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1379']").eq(2);
        };
        act.click(actionTarget);
    },
    '68.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1380']").eq(3);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1381']").eq(4);
        };
        act.click(actionTarget);
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1382']").eq(5);
        };
        act.click(actionTarget);
    },
    '72.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1383']").eq(4);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1384']").eq(3);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1385']").eq(2);
        };
        act.click(actionTarget);
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1386']").eq(2);
        };
        act.click(actionTarget);
    },
    '77.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1387']").eq(3);
        };
        act.click(actionTarget);
    },
    '78.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1388']").eq(4);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1389']").eq(5);
        };
        act.click(actionTarget);
    },
    '80.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '81.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1390']").eq(6);
        };
        act.click(actionTarget);
    },
    '82.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1391']").eq(5);
        };
        act.click(actionTarget);
    },
    '83.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1392']").eq(4);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1393']").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1394']").eq(1);
        };
        act.click(actionTarget);
    },
    '87.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1395']").eq(2);
        };
        act.click(actionTarget);
    },
    '88.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1396']").eq(3);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1397']").eq(4);
        };
        act.click(actionTarget);
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1398']").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1399']").eq(2);
        };
        act.click(actionTarget);
    },
    '93.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1400']").eq(1);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1401']").eq(0);
        };
        act.click(actionTarget);
    },
    '95.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '96.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1402']").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1403']").eq(3);
        };
        act.click(actionTarget);
    },
    '98.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1404']").eq(4);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1405']").eq(5);
        };
        act.click(actionTarget);
    },
    '100.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '101.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1406']").eq(1);
        };
        act.click(actionTarget);
    },
    '102.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1407']").eq(2);
        };
        act.click(actionTarget);
    },
    '103.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1408']").eq(3);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1409']").eq(4);
        };
        act.click(actionTarget);
    },
    '105.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '106.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1410']").eq(6);
        };
        act.click(actionTarget);
    },
    '107.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1411']").eq(5);
        };
        act.click(actionTarget);
    },
    '108.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1412']").eq(4);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1413']").eq(3);
        };
        act.click(actionTarget);
    },
    '110.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '111.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1414']").eq(3);
        };
        act.click(actionTarget);
    },
    '112.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1415']").eq(4);
        };
        act.click(actionTarget);
    },
    '113.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1416']").eq(5);
        };
        act.click(actionTarget);
    },
    '114.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1417']").eq(6);
        };
        act.click(actionTarget);
    },
    '115.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '116.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '117.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '118.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Constable BSQ V2 - Running"] = {
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '18.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '21.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '22.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '23.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3023']").eq(0);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3024']").eq(1);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3025']").eq(2);
        };
        act.click(actionTarget);
    },
    '26.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3026']").eq(3);
        };
        act.click(actionTarget);
    },
    '27.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '28.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3027']").eq(6);
        };
        act.click(actionTarget);
    },
    '29.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3028']").eq(5);
        };
        act.click(actionTarget);
    },
    '30.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3029']").eq(4);
        };
        act.click(actionTarget);
    },
    '31.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3030']").eq(3);
        };
        act.click(actionTarget);
    },
    '32.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '33.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3031']").eq(2);
        };
        act.click(actionTarget);
    },
    '34.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3032']").eq(3);
        };
        act.click(actionTarget);
    },
    '35.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3033']").eq(4);
        };
        act.click(actionTarget);
    },
    '36.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3034']").eq(5);
        };
        act.click(actionTarget);
    },
    '37.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '38.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3035']").eq(2);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3036']").eq(1);
        };
        act.click(actionTarget);
    },
    '40.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3037']").eq(4);
        };
        act.click(actionTarget);
    },
    '41.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3038']").eq(5);
        };
        act.click(actionTarget);
    },
    '42.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '43.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3039']").eq(6);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3040']").eq(5);
        };
        act.click(actionTarget);
    },
    '45.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3041']").eq(1);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3042']").eq(2);
        };
        act.click(actionTarget);
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3043']").eq(4);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3044']").eq(3);
        };
        act.click(actionTarget);
    },
    '50.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3045']").eq(2);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3046']").eq(1);
        };
        act.click(actionTarget);
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3047']").eq(1);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3048']").eq(2);
        };
        act.click(actionTarget);
    },
    '55.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3049']").eq(5);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3050']").eq(6);
        };
        act.click(actionTarget);
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3051']").eq(6);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3052']").eq(5);
        };
        act.click(actionTarget);
    },
    '60.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3053']").eq(2);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3054']").eq(1);
        };
        act.click(actionTarget);
    },
    '62.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '63.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3055']").eq(0);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3056']").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3057']").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3058']").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3059']").eq(6);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3060']").eq(5);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3061']").eq(4);
        };
        act.click(actionTarget);
    },
    '71.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3062']").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3063']").eq(3);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3064']").eq(4);
        };
        act.click(actionTarget);
    },
    '75.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3065']").eq(5);
        };
        act.click(actionTarget);
    },
    '76.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3066']").eq(6);
        };
        act.click(actionTarget);
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3067']").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3068']").eq(1);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3069']").eq(5);
        };
        act.click(actionTarget);
    },
    '81.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3070']").eq(5);
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click image "Down"': function() {
        act.click("#btnDown");
    },
    '84.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '85.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3071']").eq(6);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3072']").eq(4);
        };
        act.click(actionTarget);
    },
    '87.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3073']").eq(2);
        };
        act.click(actionTarget);
    },
    '88.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3074']").eq(1);
        };
        act.click(actionTarget);
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3075']").eq(1);
        };
        act.click(actionTarget);
    },
    '91.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3076']").eq(2);
        };
        act.click(actionTarget);
    },
    '92.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3077']").eq(3);
        };
        act.click(actionTarget);
    },
    '93.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3078']").eq(4);
        };
        act.click(actionTarget);
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3079']").eq(6);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3080']").eq(5);
        };
        act.click(actionTarget);
    },
    '97.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3081']").eq(4);
        };
        act.click(actionTarget);
    },
    '98.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3082']").eq(3);
        };
        act.click(actionTarget);
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3083']").eq(1);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3084']").eq(2);
        };
        act.click(actionTarget);
    },
    '102.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3085']").eq(3);
        };
        act.click(actionTarget);
    },
    '103.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3086']").eq(4);
        };
        act.click(actionTarget);
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3087']").eq(6);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3088']").eq(5);
        };
        act.click(actionTarget);
    },
    '107.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3089']").eq(4);
        };
        act.click(actionTarget);
    },
    '108.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3090']").eq(3);
        };
        act.click(actionTarget);
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3091']").eq(1);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3092']").eq(2);
        };
        act.click(actionTarget);
    },
    "112.Click table cell": function() {
        var actionTarget = function() {
            return $("#quadTable").find(" > tbody:nth(0) > tr:nth(3) > td:nth(1)");
        };
        act.click(actionTarget);
    },
    "113.Click table cell": function() {
        var actionTarget = function() {
            return $("#quadTable").find(" > tbody:nth(0) > tr:nth(4) > td:nth(4)");
        };
        act.click(actionTarget);
    },
    '114.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '115.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '116.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '117.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Constable BSQ V3 - Running"] = {
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '13.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '14.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '15.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '16.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '17.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '19.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '23.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5013']").eq(0);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5014']").eq(2);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5015']").eq(3);
        };
        act.click(actionTarget);
    },
    '26.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5016']").eq(4);
        };
        act.click(actionTarget);
    },
    '27.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '28.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5017']").eq(2);
        };
        act.click(actionTarget);
    },
    '29.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5018']").eq(3);
        };
        act.click(actionTarget);
    },
    '30.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5019']").eq(4);
        };
        act.click(actionTarget);
    },
    '31.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5020']").eq(5);
        };
        act.click(actionTarget);
    },
    '32.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '33.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5021']").eq(6);
        };
        act.click(actionTarget);
    },
    '34.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5022']").eq(5);
        };
        act.click(actionTarget);
    },
    '35.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5023']").eq(4);
        };
        act.click(actionTarget);
    },
    '36.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5024']").eq(3);
        };
        act.click(actionTarget);
    },
    '37.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '38.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5025']").eq(0);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5026']").eq(2);
        };
        act.click(actionTarget);
    },
    '40.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5027']").eq(4);
        };
        act.click(actionTarget);
    },
    '41.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5028']").eq(5);
        };
        act.click(actionTarget);
    },
    '42.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '43.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5029']").eq(6);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5030']").eq(5);
        };
        act.click(actionTarget);
    },
    '45.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5031']").eq(4);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5032']").eq(3);
        };
        act.click(actionTarget);
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5033']").eq(3);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5034']").eq(4);
        };
        act.click(actionTarget);
    },
    '50.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5035']").eq(5);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5036']").eq(6);
        };
        act.click(actionTarget);
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5037']").eq(2);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5038']").eq(1);
        };
        act.click(actionTarget);
    },
    '55.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5039']").eq(4);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5040']").eq(5);
        };
        act.click(actionTarget);
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5041']").eq(6);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5042']").eq(5);
        };
        act.click(actionTarget);
    },
    '60.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5043']").eq(4);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5044']").eq(3);
        };
        act.click(actionTarget);
    },
    '62.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '63.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5045']").eq(0);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5046']").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5047']").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5048']").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5049']").eq(6);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5050']").eq(5);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5051']").eq(4);
        };
        act.click(actionTarget);
    },
    '71.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5052']").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5053']").eq(3);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5054']").eq(4);
        };
        act.click(actionTarget);
    },
    '75.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5055']").eq(2);
        };
        act.click(actionTarget);
    },
    '76.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5056']").eq(1);
        };
        act.click(actionTarget);
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5057']").eq(4);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5058']").eq(5);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5059']").eq(1);
        };
        act.click(actionTarget);
    },
    '81.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5060']").eq(0);
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5061']").eq(3);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5062']").eq(4);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5063']").eq(2);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5064']").eq(1);
        };
        act.click(actionTarget);
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5065']").eq(6);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5066']").eq(6);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5067']").eq(6);
        };
        act.click(actionTarget);
    },
    '91.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5068']").eq(6);
        };
        act.click(actionTarget);
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(1);
        };
        act.click(actionTarget);
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5069']").eq(3);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5070']").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5071']").eq(5);
        };
        act.click(actionTarget);
    },
    '98.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5072']").eq(6);
        };
        act.click(actionTarget);
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5073']").eq(6);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5074']").eq(5);
        };
        act.click(actionTarget);
    },
    '102.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5075']").eq(4);
        };
        act.click(actionTarget);
    },
    '103.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5076']").eq(3);
        };
        act.click(actionTarget);
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5077']").eq(1);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5078']").eq(0);
        };
        act.click(actionTarget);
    },
    '107.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5079']").eq(4);
        };
        act.click(actionTarget);
    },
    '108.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5080']").eq(5);
        };
        act.click(actionTarget);
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5081']").eq(4);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5082']").eq(3);
        };
        act.click(actionTarget);
    },
    '112.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5083']").eq(2);
        };
        act.click(actionTarget);
    },
    '113.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5084']").eq(1);
        };
        act.click(actionTarget);
    },
    '114.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '115.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5085']").eq(3);
        };
        act.click(actionTarget);
    },
    '116.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5086']").eq(4);
        };
        act.click(actionTarget);
    },
    '117.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5087']").eq(5);
        };
        act.click(actionTarget);
    },
    '118.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5088']").eq(6);
        };
        act.click(actionTarget);
    },
    '119.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '120.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5089']").eq(2);
        };
        act.click(actionTarget);
    },
    '121.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5090']").eq(1);
        };
        act.click(actionTarget);
    },
    '122.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5091']").eq(4);
        };
        act.click(actionTarget);
    },
    '123.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5092']").eq(5);
        };
        act.click(actionTarget);
    },
    '124.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '125.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5093']").eq(6);
        };
        act.click(actionTarget);
    },
    '126.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5094']").eq(5);
        };
        act.click(actionTarget);
    },
    '127.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5095']").eq(4);
        };
        act.click(actionTarget);
    },
    '128.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5096']").eq(3);
        };
        act.click(actionTarget);
    },
    '129.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '130.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5097']").eq(3);
        };
        act.click(actionTarget);
    },
    '131.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5098']").eq(4);
        };
        act.click(actionTarget);
    },
    '132.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5099']").eq(1);
        };
        act.click(actionTarget);
    },
    '133.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5100']").eq(1);
        };
        act.click(actionTarget);
    },
    '134.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '135.Click image "Down"': function() {
        act.click("#btnDown");
    },
    '136.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '137.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5101']").eq(6);
        };
        act.click(actionTarget);
    },
    '138.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5102']").eq(5);
        };
        act.click(actionTarget);
    },
    '139.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5103']").eq(4);
        };
        act.click(actionTarget);
    },
    '140.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5104']").eq(3);
        };
        act.click(actionTarget);
    },
    '141.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '142.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5105']").eq(2);
        };
        act.click(actionTarget);
    },
    '143.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5106']").eq(3);
        };
        act.click(actionTarget);
    },
    '144.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5107']").eq(4);
        };
        act.click(actionTarget);
    },
    '145.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5108']").eq(5);
        };
        act.click(actionTarget);
    },
    '146.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '147.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '148.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '149.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Constable SJT - Non Video - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable SJT - Non video");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '11.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '18.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '22.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '23.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '24.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '25.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '26.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '27.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '28.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '29.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '30.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '31.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '32.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '33.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '34.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '35.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '36.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '37.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '38.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '39.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '40.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '41.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '42.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '43.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '44.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '45.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '47.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '48.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '49.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '50.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '51.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '52.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '53.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '54.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '55.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '56.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '57.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '58.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '59.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '60.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '61.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '62.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '63.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '64.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '65.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '66.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '67.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '68.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '69.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '70.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '71.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '72.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '73.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '74.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '75.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '78.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '79.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '80.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '81.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '82.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '83.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '84.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '85.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '86.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '87.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '88.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '89.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '90.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '91.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '92.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '93.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '94.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '95.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '96.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '97.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '98.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '99.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '100.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '101.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '102.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '103.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '104.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '105.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '106.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '107.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '108.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '109.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '110.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '111.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '112.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '113.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '114.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '115.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '116.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '117.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '118.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '119.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '120.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '121.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '122.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '123.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '124.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '125.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '126.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '127.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '128.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '129.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '130.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Constable SJT - Video Version - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Constable SJT - Video");
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
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '18.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '22.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '23.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '24.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '25.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '26.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '27.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '28.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '29.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '30.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '31.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '32.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '33.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    "34.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionBRow").find(".sjtoption-parent").eq(2);
        };
        act.click(actionTarget);
    },
    '35.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '36.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '37.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '38.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '39.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '40.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '41.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '42.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '43.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '44.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '45.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '46.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '49.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '50.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '51.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '54.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '55.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '56.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '59.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '60.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '61.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '62.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '63.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '64.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '65.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '66.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '69.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '70.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '71.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '74.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '75.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '76.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '79.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '80.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '81.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "Counter-productive"': function() {
        act.click("#optA1");
    },
    '84.Click radio button "Counter-productive"': function() {
        act.click("#optB1");
    },
    '85.Click radio button "Counter-productive"': function() {
        act.click("#optC1");
    },
    '86.Click radio button "Counter-productive"': function() {
        act.click("#optD1");
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "Effective"': function() {
        act.click("#optA4");
    },
    '89.Click radio button "Effective"': function() {
        act.click("#optB4");
    },
    '90.Click radio button "Effective"': function() {
        act.click("#optC4");
    },
    '91.Click radio button "Effective"': function() {
        act.click("#optD4");
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '94.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '95.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '96.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '99.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '100.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '101.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '104.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    "105.Click table cell": function() {
        var actionTarget = function() {
            return $("#OptionCRow").find(".sjtoption-parent").eq(2);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '109.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '110.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '111.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "Ineffective"': function() {
        act.click("#optA2");
    },
    '114.Click radio button "Fairly Effective"': function() {
        act.click("#optB3");
    },
    '115.Click radio button "Ineffective"': function() {
        act.click("#optC2");
    },
    '116.Click radio button "Fairly Effective"': function() {
        act.click("#optD3");
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '118.Click radio button "Fairly Effective"': function() {
        act.click("#optA3");
    },
    '119.Click radio button "Ineffective"': function() {
        act.click("#optB2");
    },
    '120.Click radio button "Fairly Effective"': function() {
        act.click("#optC3");
    },
    '121.Click radio button "Ineffective"': function() {
        act.click("#optD2");
    },
    '122.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '123.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '124.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '125.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '126.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["Police Sergeant SJT - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Police Sergeant SLT");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", {
            caretPos: 18
        });
    },
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '10.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "J", {
            caretPos: 17
        });
    },
    '11.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '12.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '18.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '19.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '20.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '21.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '22.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '23.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '24.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '25.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '26.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '27.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '28.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '29.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '30.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '31.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '32.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '33.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '34.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '35.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '36.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '37.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '38.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '41.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '42.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '43.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '44.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '45.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '46.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '47.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '48.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '49.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '50.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '51.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '52.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '53.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '54.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '55.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '56.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '57.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '58.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '59.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '60.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '61.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '62.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '63.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '64.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '65.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '66.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '67.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '68.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '69.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '70.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '71.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '72.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '73.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '74.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '75.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '76.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '77.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '78.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '79.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '80.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '81.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '82.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '83.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '84.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '85.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '86.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '87.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '88.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '91.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '92.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '93.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '96.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '97.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '98.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '99.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '100.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '101.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '102.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '103.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '106.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '107.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '108.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '111.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '112.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '113.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '114.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '115.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '116.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '117.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '118.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '119.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '120.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '121.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '122.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '123.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '124.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '125.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '126.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '127.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '128.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '129.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '130.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '131.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '132.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Special Constable BSQ - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "special constable bsq");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '17.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '21.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '22.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1873']").eq(6);
        };
        act.click(actionTarget);
    },
    '23.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1874']").eq(5);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1875']").eq(5);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1876']").eq(6);
        };
        act.click(actionTarget);
    },
    '26.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click image "Up"': function() {
        act.click("#btnUp");
    },
    '28.Click image "Down"': function() {
        var actionTarget = function() {
            return $("#pairsTable2").find("[alt='Down']");
        };
        act.click(actionTarget);
    },
    '29.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '30.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1877']").eq(0);
        };
        act.click(actionTarget);
    },
    '31.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1878']").eq(1);
        };
        act.click(actionTarget);
    },
    '32.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1879']").eq(2);
        };
        act.click(actionTarget);
    },
    '33.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1880']").eq(3);
        };
        act.click(actionTarget);
    },
    '34.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '35.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1881']").eq(6);
        };
        act.click(actionTarget);
    },
    '36.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1882']").eq(5);
        };
        act.click(actionTarget);
    },
    '37.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1883']").eq(4);
        };
        act.click(actionTarget);
    },
    '38.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1884']").eq(3);
        };
        act.click(actionTarget);
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1885']").eq(2);
        };
        act.click(actionTarget);
    },
    '41.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1886']").eq(3);
        };
        act.click(actionTarget);
    },
    '42.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1887']").eq(4);
        };
        act.click(actionTarget);
    },
    '43.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1888']").eq(5);
        };
        act.click(actionTarget);
    },
    '44.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '45.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1889']").eq(6);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1890']").eq(5);
        };
        act.click(actionTarget);
    },
    '47.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1891']").eq(4);
        };
        act.click(actionTarget);
    },
    '48.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1892']").eq(3);
        };
        act.click(actionTarget);
    },
    '49.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '50.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1893']").eq(3);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1894']").eq(4);
        };
        act.click(actionTarget);
    },
    '52.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1895']").eq(5);
        };
        act.click(actionTarget);
    },
    '53.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1896']").eq(6);
        };
        act.click(actionTarget);
    },
    '54.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '55.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1897']").eq(1);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1898']").eq(0);
        };
        act.click(actionTarget);
    },
    '57.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1899']").eq(3);
        };
        act.click(actionTarget);
    },
    '58.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1900']").eq(4);
        };
        act.click(actionTarget);
    },
    '59.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '60.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1901']").eq(6);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1902']").eq(5);
        };
        act.click(actionTarget);
    },
    '62.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1903']").eq(4);
        };
        act.click(actionTarget);
    },
    '63.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1904']").eq(4);
        };
        act.click(actionTarget);
    },
    '64.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '65.Click image "Up"': function() {
        act.click("#btnUp");
    },
    '66.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '67.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1905']").eq(3);
        };
        act.click(actionTarget);
    },
    '68.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1906']").eq(4);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1907']").eq(2);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1908']").eq(5);
        };
        act.click(actionTarget);
    },
    '71.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '72.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1909']").eq(2);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1910']").eq(4);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1911']").eq(2);
        };
        act.click(actionTarget);
    },
    '75.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1912']").eq(5);
        };
        act.click(actionTarget);
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click button "Next"': function() {
        handleConfirm(true);
        act.click("#btnNext");
    },
    '78.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1913']").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1914']").eq(3);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1915']").eq(4);
        };
        act.click(actionTarget);
    },
    '81.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1916']").eq(5);
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1917']").eq(5);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1918']").eq(4);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1919']").eq(3);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1920']").eq(2);
        };
        act.click(actionTarget);
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1921']").eq(2);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1922']").eq(3);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1923']").eq(1);
        };
        act.click(actionTarget);
    },
    '91.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1924']").eq(0);
        };
        act.click(actionTarget);
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1925']").eq(4);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1926']").eq(5);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1927']").eq(3);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1928']").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1929']").eq(3);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1930']").eq(4);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1931']").eq(5);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1932']").eq(6);
        };
        act.click(actionTarget);
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1933']").eq(6);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1934']").eq(5);
        };
        act.click(actionTarget);
    },
    '105.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1935']").eq(4);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1936']").eq(3);
        };
        act.click(actionTarget);
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1937']").eq(2);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1938']").eq(3);
        };
        act.click(actionTarget);
    },
    '110.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1939']").eq(4);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1940']").eq(5);
        };
        act.click(actionTarget);
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1941']").eq(5);
        };
        act.click(actionTarget);
    },
    '114.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1942']").eq(4);
        };
        act.click(actionTarget);
    },
    '115.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1943']").eq(3);
        };
        act.click(actionTarget);
    },
    '116.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1944']").eq(2);
        };
        act.click(actionTarget);
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '118.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '119.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["Special Constable SJT - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "special constable sjt");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
	    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '17.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '19.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '21.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '22.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '23.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '24.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '25.Click submit button "Start Test"': function() {
        act.click("#btnStartTest");
    },
    '26.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '27.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '28.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '29.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '30.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    "32.Rclick html": function() {
        act.rclick("html");
    },
    '33.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '34.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '35.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '36.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '37.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '38.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '39.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '40.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '41.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '42.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '43.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '44.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '45.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '47.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '48.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '49.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '50.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '51.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '52.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '53.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '54.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '55.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '56.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '57.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '58.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '59.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '60.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '61.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '62.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '63.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '64.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '65.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '66.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '67.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '68.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '69.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '70.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '71.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '72.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '73.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '74.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '75.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '78.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '79.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '80.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '81.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '82.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '83.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '84.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '85.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '86.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '87.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '88.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '89.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '90.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '91.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '92.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '93.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '94.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '95.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '96.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '97.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '98.Click radio button "B5:Very Effective"': function() {
        act.click("[name='optB'][title='B5:Very Effective']");
    },
    '99.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '100.Click radio button "D5:Very Effective"': function() {
        act.click("[name='optD'][title='D5:Very Effective']");
    },
    '101.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '102.Click radio button "A4:Effective"': function() {
        act.click("[name='optA'][title='A4:Effective']");
    },
    '103.Click radio button "B4:Effective"': function() {
        act.click("[name='optB'][title='B4:Effective']");
    },
    '104.Click radio button "C4:Effective"': function() {
        act.click("[name='optC'][title='C4:Effective']");
    },
    '105.Click radio button "D4:Effective"': function() {
        act.click("[name='optD'][title='D4:Effective']");
    },
    '106.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '107.Click radio button "A3:Slightly..."': function() {
        act.click("[name='optA'][title='A3:Slightly Effective']");
    },
    '108.Click radio button "B3:Slightly..."': function() {
        act.click("[name='optB'][title='B3:Slightly Effective']");
    },
    '109.Click radio button "C3:Slightly..."': function() {
        act.click("[name='optC'][title='C3:Slightly Effective']");
    },
    '110.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '111.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '112.Click radio button "A2:Ineffective"': function() {
        act.click("[name='optA'][title='A2:Ineffective']");
    },
    '113.Click radio button "B2:Ineffective"': function() {
        act.click("[name='optB'][title='B2:Ineffective']");
    },
    '114.Click radio button "C2:Ineffective"': function() {
        act.click("[name='optC'][title='C2:Ineffective']");
    },
    '115.Click radio button "D2:Ineffective"': function() {
        act.click("[name='optD'][title='D2:Ineffective']");
    },
    '116.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '117.Click radio button "A1:Counter-producti..."': function() {
        act.click("[name='optA'][title='A1:Counter-productive']");
    },
    '118.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '119.Click radio button "C1:Counter-producti..."': function() {
        act.click("[name='optC'][title='C1:Counter-productive']");
    },
    '120.Click radio button "D1:Counter-producti..."': function() {
        act.click("[name='optD'][title='D1:Counter-productive']");
    },
    '121.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '122.Click radio button "A5:Very Effective"': function() {
        act.click("[name='optA'][title='A5:Very Effective']");
    },
    '123.Click radio button "B1:Counter-producti..."': function() {
        act.click("[name='optB'][title='B1:Counter-productive']");
    },
    '124.Click radio button "C5:Very Effective"': function() {
        act.click("[name='optC'][title='C5:Very Effective']");
    },
    '125.Click radio button "D3:Slightly..."': function() {
        act.click("[name='optD'][title='D3:Slightly Effective']");
    },
    '126.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '127.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '128.Click submit button "Exit Test"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '129.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["TJX Motiv8 Questionnaire - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "tjx motiv8");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click radio button "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Honesty_Accepted$/)");
    },
    '17.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '19.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '21.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStart$/)");
    },
    '22.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5189']").eq(6);
        };
        act.click(actionTarget);
    },
    '23.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5190']").eq(6);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5191']").eq(6);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5192']").eq(6);
        };
        act.click(actionTarget);
    },
    '26.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click image "Down"': function() {
        act.click("#btnDown");
    },
    '28.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(1);
        };
        act.click(actionTarget);
    },
    '29.Click image "Down"': function() {
        var actionTarget = function() {
            return $("[alt='Down']").eq(2);
        };
        act.click(actionTarget);
    },
    '30.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5193']").eq(1);
        };
        act.click(actionTarget);
    },
    '32.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5194']").eq(4);
        };
        act.click(actionTarget);
    },
    '33.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5195']").eq(3);
        };
        act.click(actionTarget);
    },
    '34.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5196']").eq(6);
        };
        act.click(actionTarget);
    },
    '35.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '36.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5197']").eq(6);
        };
        act.click(actionTarget);
    },
    '37.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5198']").eq(5);
        };
        act.click(actionTarget);
    },
    '38.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5199']").eq(4);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5200']").eq(3);
        };
        act.click(actionTarget);
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5201']").eq(0);
        };
        act.click(actionTarget);
    },
    '42.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5202']").eq(1);
        };
        act.click(actionTarget);
    },
    '43.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5203']").eq(2);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5204']").eq(3);
        };
        act.click(actionTarget);
    },
    '45.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '46.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5205']").eq(6);
        };
        act.click(actionTarget);
    },
    '47.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5206']").eq(5);
        };
        act.click(actionTarget);
    },
    '48.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5207']").eq(4);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5208']").eq(3);
        };
        act.click(actionTarget);
    },
    '50.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '51.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5209']").eq(5);
        };
        act.click(actionTarget);
    },
    '52.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5210']").eq(3);
        };
        act.click(actionTarget);
    },
    '53.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5211']").eq(2);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5212']").eq(4);
        };
        act.click(actionTarget);
    },
    '55.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '56.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5213']").eq(1);
        };
        act.click(actionTarget);
    },
    '57.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5214']").eq(5);
        };
        act.click(actionTarget);
    },
    '58.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5215']").eq(4);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5216']").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '61.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5217']").eq(6);
        };
        act.click(actionTarget);
    },
    '62.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5218']").eq(3);
        };
        act.click(actionTarget);
    },
    '63.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5219']").eq(5);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5220']").eq(4);
        };
        act.click(actionTarget);
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5221']").eq(2);
        };
        act.click(actionTarget);
    },
    '67.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5222']").eq(4);
        };
        act.click(actionTarget);
    },
    '68.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5223']").eq(3);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5224']").eq(5);
        };
        act.click(actionTarget);
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5225']").eq(6);
        };
        act.click(actionTarget);
    },
    '72.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5226']").eq(5);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5227']").eq(4);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5228']").eq(3);
        };
        act.click(actionTarget);
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5229']").eq(2);
        };
        act.click(actionTarget);
    },
    '77.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5230']").eq(3);
        };
        act.click(actionTarget);
    },
    '78.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5231']").eq(4);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5232']").eq(5);
        };
        act.click(actionTarget);
    },
    '80.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '81.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5233']").eq(6);
        };
        act.click(actionTarget);
    },
    '82.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5234']").eq(3);
        };
        act.click(actionTarget);
    },
    '83.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5235']").eq(4);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5236']").eq(2);
        };
        act.click(actionTarget);
    },
    '85.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '86.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5237']").eq(2);
        };
        act.click(actionTarget);
    },
    '87.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5238']").eq(4);
        };
        act.click(actionTarget);
    },
    '88.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5239']").eq(3);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5240']").eq(2);
        };
        act.click(actionTarget);
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click image "Up"': function() {
        act.click("#btnUp");
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5241']").eq(2);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5242']").eq(3);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5243']").eq(4);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5244']").eq(5);
        };
        act.click(actionTarget);
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5245']").eq(5);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5246']").eq(4);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5247']").eq(3);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5248']").eq(2);
        };
        act.click(actionTarget);
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5249']").eq(2);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5250']").eq(4);
        };
        act.click(actionTarget);
    },
    '105.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5251']").eq(3);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5252']").eq(5);
        };
        act.click(actionTarget);
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5253']").eq(6);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5254']").eq(5);
        };
        act.click(actionTarget);
    },
    '110.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5255']").eq(4);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5256']").eq(3);
        };
        act.click(actionTarget);
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5257']").eq(2);
        };
        act.click(actionTarget);
    },
    '114.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5258']").eq(3);
        };
        act.click(actionTarget);
    },
    '115.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5259']").eq(4);
        };
        act.click(actionTarget);
    },
    '116.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5260']").eq(5);
        };
        act.click(actionTarget);
    },
    '117.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '118.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5261']").eq(6);
        };
        act.click(actionTarget);
    },
    '119.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5262']").eq(5);
        };
        act.click(actionTarget);
    },
    '120.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5263']").eq(4);
        };
        act.click(actionTarget);
    },
    '121.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5264']").eq(3);
        };
        act.click(actionTarget);
    },
    '122.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '123.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5265']").eq(2);
        };
        act.click(actionTarget);
    },
    '124.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5266']").eq(4);
        };
        act.click(actionTarget);
    },
    '125.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5267']").eq(3);
        };
        act.click(actionTarget);
    },
    '126.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5268']").eq(1);
        };
        act.click(actionTarget);
    },
    '127.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '128.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5269']").eq(6);
        };
        act.click(actionTarget);
    },
    '129.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5270']").eq(5);
        };
        act.click(actionTarget);
    },
    '130.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5271']").eq(4);
        };
        act.click(actionTarget);
    },
    '131.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5272']").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '133.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5273']").eq(2);
        };
        act.click(actionTarget);
    },
    '134.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5274']").eq(3);
        };
        act.click(actionTarget);
    },
    '135.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5275']").eq(4);
        };
        act.click(actionTarget);
    },
    '136.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5276']").eq(5);
        };
        act.click(actionTarget);
    },
    '137.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '138.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5277']").eq(6);
        };
        act.click(actionTarget);
    },
    '139.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5278']").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5279']").eq(0);
        };
        act.click(actionTarget);
    },
    '141.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5280']").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '143.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5281']").eq(4);
        };
        act.click(actionTarget);
    },
    '144.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5282']").eq(5);
        };
        act.click(actionTarget);
    },
    '145.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5283']").eq(3);
        };
        act.click(actionTarget);
    },
    '146.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='5284']").eq(2);
        };
        act.click(actionTarget);
    },
    '147.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '148.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '149.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The Engagement Questionnaire - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "engagement");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click(".lnkNoHref[alt='Details']");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '16.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '17.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '19.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '20.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1263']").eq(3);
        };
        act.click(actionTarget);
    },
    '21.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1264']").eq(3);
        };
        act.click(actionTarget);
    },
    '22.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1265']").eq(3);
        };
        act.click(actionTarget);
    },
    '23.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1266']").eq(3);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1267']").eq(3);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1268']").eq(3);
        };
        act.click(actionTarget);
    },
    '26.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '27.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1269']").eq(4);
        };
        act.click(actionTarget);
    },
    '28.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1270']").eq(4);
        };
        act.click(actionTarget);
    },
    '29.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1271']").eq(4);
        };
        act.click(actionTarget);
    },
    '30.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1272']").eq(4);
        };
        act.click(actionTarget);
    },
    '31.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1273']").eq(4);
        };
        act.click(actionTarget);
    },
    '32.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1274']").eq(4);
        };
        act.click(actionTarget);
    },
    '33.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '34.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1275']").eq(5);
        };
        act.click(actionTarget);
    },
    '35.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1276']").eq(5);
        };
        act.click(actionTarget);
    },
    '36.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1277']").eq(5);
        };
        act.click(actionTarget);
    },
    '37.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1278']").eq(5);
        };
        act.click(actionTarget);
    },
    '38.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1279']").eq(5);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1280']").eq(5);
        };
        act.click(actionTarget);
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1281']").eq(6);
        };
        act.click(actionTarget);
    },
    '42.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1282']").eq(6);
        };
        act.click(actionTarget);
    },
    '43.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1283']").eq(6);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1284']").eq(6);
        };
        act.click(actionTarget);
    },
    '45.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1285']").eq(6);
        };
        act.click(actionTarget);
    },
    '46.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1286']").eq(6);
        };
        act.click(actionTarget);
    },
    '47.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '48.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1287']").eq(0);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1288']").eq(0);
        };
        act.click(actionTarget);
    },
    '50.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1289']").eq(0);
        };
        act.click(actionTarget);
    },
    '51.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1290']").eq(0);
        };
        act.click(actionTarget);
    },
    '52.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1291']").eq(0);
        };
        act.click(actionTarget);
    },
    '53.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1292']").eq(0);
        };
        act.click(actionTarget);
    },
    '54.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '55.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1293']").eq(1);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1294']").eq(1);
        };
        act.click(actionTarget);
    },
    '57.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1295']").eq(1);
        };
        act.click(actionTarget);
    },
    '58.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1296']").eq(1);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1297']").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1298']").eq(1);
        };
        act.click(actionTarget);
    },
    '61.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '62.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1299']").eq(2);
        };
        act.click(actionTarget);
    },
    '63.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1300']").eq(2);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1301']").eq(2);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1302']").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1303']").eq(2);
        };
        act.click(actionTarget);
    },
    '67.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1304']").eq(2);
        };
        act.click(actionTarget);
    },
    '68.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '69.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1305']").eq(6);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1306']").eq(0);
        };
        act.click(actionTarget);
    },
    '71.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1308']").eq(5);
        };
        act.click(actionTarget);
    },
    '72.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1309']").eq(3);
        };
        act.click(actionTarget);
    },
    '73.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1307']").eq(4);
        };
        act.click(actionTarget);
    },
    '74.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1310']").eq(1);
        };
        act.click(actionTarget);
    },
    '77.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1311']").eq(3);
        };
        act.click(actionTarget);
    },
    '78.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1312']").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1313']").eq(4);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1314']").eq(5);
        };
        act.click(actionTarget);
    },
    '81.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1315']").eq(5);
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1316']").eq(0);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1317']").eq(1);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1318']").eq(2);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1319']").eq(3);
        };
        act.click(actionTarget);
    },
    '87.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1320']").eq(4);
        };
        act.click(actionTarget);
    },
    '88.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1321']").eq(4);
        };
        act.click(actionTarget);
    },
    '89.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '90.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '91.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1322']").eq(6);
        };
        act.click(actionTarget);
    },
    '92.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1323']").eq(5);
        };
        act.click(actionTarget);
    },
    '93.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1324']").eq(6);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1325']").eq(5);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "7"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1326']").eq(6);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1327']").eq(5);
        };
        act.click(actionTarget);
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1328']").eq(0);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1329']").eq(1);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1330']").eq(2);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1331']").eq(3);
        };
        act.click(actionTarget);
    },
    '102.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1332']").eq(4);
        };
        act.click(actionTarget);
    },
    '103.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='1333']").eq(5);
        };
        act.click(actionTarget);
    },
    '104.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '105.Click submit button "Submit"': function() {
        act.click("#btnSubmit");
    },
    '106.Click submit button "Return to Task List"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnReturn$/)");
    },
    '107.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    },
    '108.Click link "Login"': function() {
        act.click("#ApolloHyperLink1");
    }
};

"@test"["The Hyde Group BSQ - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Hyde Group BSQ");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '7.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '16.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '17.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '18.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '19.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '20.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '21.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStartTest$/)");
    },
    '22.Click radio button "I value other..."': function() {
        act.click("#rblStatementGroup0_2");
    },
    '23.Click radio button "I behave in..."': function() {
        act.click("#rblStatementGroup1_0");
    },
    '24.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '25.Click radio button "It is important..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '26.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup4_1");
    },
    '27.Click radio button "I do not..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '28.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '29.Click radio button "I am reluctant..."': function() {
        act.click("#rblStatementGroup7_2");
    },
    '30.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup8_1");
    },
    '31.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup9_1");
    },
    '32.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '33.Click radio button "As long as..."': function() {
        act.click("#rblStatementGroup0_2");
    },
    '34.Click radio button "I will only..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '35.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '36.Click radio button "I follow a..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '37.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '38.Click radio button "I enjoy helping..."': function() {
        act.click("#rblStatementGroup5_2");
    },
    '39.Click radio button "I enjoy finding..."': function() {
        act.click("#rblStatementGroup6_2");
    },
    '40.Click radio button "I change the..."': function() {
        act.click("#rblStatementGroup7_2");
    },
    '41.Click radio button "As long as..."': function() {
        act.click("#rblStatementGroup8_2");
    },
    '42.Click radio button "I build rapport..."': function() {
        act.click("#rblStatementGroup9_2");
    },
    '43.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '44.Click radio button "I don’t like..."': function() {
        act.click("#rblStatementGroup0_0");
    },
    '45.Click radio button "I usually try..."': function() {
        act.click("#rblStatementGroup1_0");
    },
    '46.Click radio button "If something seems..."': function() {
        act.click("#rblStatementGroup2_0");
    },
    '47.Click radio button "I seek assistance..."': function() {
        act.click("#rblStatementGroup3_0");
    },
    '48.Click radio button "I am patient..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '49.Click radio button "I don’t make..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '50.Click radio button "I help other..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '51.Click radio button "I get straight..."': function() {
        act.click("#rblStatementGroup7_0");
    },
    '52.Click radio button "I avoid making..."': function() {
        act.click("#rblStatementGroup8_0");
    },
    '53.Click radio button "I would rather..."': function() {
        act.click("#rblStatementGroup9_0");
    },
    '54.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '55.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup0_1");
    },
    '56.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '57.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '58.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup3_1");
    },
    '59.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup4_1");
    },
    '60.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '61.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '62.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup7_1");
    },
    '63.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup8_1");
    },
    '64.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup9_1");
    },
    '65.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '66.Click radio button "I sometimes find..."': function() {
        act.click("#rblStatementGroup0_2");
    },
    '67.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '68.Click radio button "I enjoy applying..."': function() {
        act.click("#rblStatementGroup2_0");
    },
    '69.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup3_1");
    },
    '70.Click radio button "It is important..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '71.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '72.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '73.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup7_1");
    },
    '74.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup8_2");
    },
    '75.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup9_1");
    },
    '76.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '77.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup0_1");
    },
    '78.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '79.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '80.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup3_1");
    },
    '81.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup4_1");
    },
    '82.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '83.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '84.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup7_1");
    },
    '85.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup8_1");
    },
    '86.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup9_1");
    },
    '87.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '88.Click radio button "I will hide..."': function() {
        act.click("#rblStatementGroup0_2");
    },
    '89.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '90.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '91.Click radio button "I will not..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '92.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '93.Click radio button "I am never..."': function() {
        act.click("#rblStatementGroup5_2");
    },
    '94.Click radio button "I prefer for..."': function() {
        act.click("#rblStatementGroup6_2");
    },
    '95.Click radio button "I monitor my..."': function() {
        act.click("#rblStatementGroup7_2");
    },
    '96.Click radio button "I consult with..."': function() {
        act.click("#rblStatementGroup8_2");
    },
    '97.Click radio button "I will tell..."': function() {
        act.click("#rblStatementGroup9_2");
    },
    '98.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '99.Click radio button "I expect other..."': function() {
        act.click("#rblStatementGroup0_0");
    },
    '100.Click radio button "I am careful..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '101.Click radio button "I believe that..."': function() {
        act.click("#rblStatementGroup2_0");
    },
    '102.Click radio button "I usually expect..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '103.Click radio button "I follow a..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '104.Click radio button "I focus my..."': function() {
        act.click("#rblStatementGroup5_2");
    },
    '105.Click radio button "I am a..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '106.Click radio button "I talk to..."': function() {
        act.click("#rblStatementGroup7_2");
    },
    '107.Click radio button "I ensure I..."': function() {
        act.click("#rblStatementGroup8_0");
    },
    '108.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup9_2");
    },
    '109.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '110.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '111.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The London Factor Assessment - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "The London Factor");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
	    '15.Click button "Login"': function() {
        act.click("#btnSubmit")
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '21.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
    },
    '22.Click submit button "Continue"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '23.Click submit button "Next"': function() {
        act.click("#btnNext");
    },
    '24.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnStartTest$/)");
    },
    '25.Click radio button "I am sensitive..."': function() {
        act.click("#rblStatementGroup1_0");
    },
    '26.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '27.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '28.Click radio button "I prefer to..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '29.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '30.Click radio button "I take time..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '31.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '32.Click radio button "I tend to..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '33.Click radio button "I thrive in..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '34.Click radio button "I am very..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '35.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '36.Click radio button "I try new..."': function() {
        act.click("#rblStatementGroup5_2");
    },
    '37.Click radio button "My emotions have..."': function() {
        act.click("#rblStatementGroup6_2");
    },
    '38.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '39.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '40.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '41.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup3_1");
    },
    '42.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup4_1");
    },
    '43.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '44.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '45.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '46.Click radio button "I enjoy certainty."': function() {
        act.click("#rblStatementGroup1_0");
    },
    '47.Click radio button "I make decisions..."': function() {
        act.click("#rblStatementGroup2_0");
    },
    '48.Click radio button "I am quick..."': function() {
        act.click("#rblStatementGroup3_0");
    },
    '49.Click radio button "I find it..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '50.Click radio button "I am always..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '51.Click radio button "I take a..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '52.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '53.Click radio button "I enjoy travelling..."': function() {
        act.click("#rblStatementGroup1_0");
    },
    '54.Click radio button "I take time..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '55.Click radio button "I prefer to..."': function() {
        act.click("#rblStatementGroup3_0");
    },
    '56.Click radio button "Other people would..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '57.Click radio button "I speak to..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '58.Click radio button "I’m wary of..."': function() {
        act.click("#rblStatementGroup6_2");
    },
    '59.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '60.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '61.Click radio button "I prefer to..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '62.Click radio button "Stereotypes exist..."': function() {
        act.click("#rblStatementGroup3_0");
    },
    '63.Click radio button "I am someone..."': function() {
        act.click("#rblStatementGroup4_2");
    },
    '64.Click radio button "I prefer tried..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '65.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '66.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '67.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup1_1");
    },
    '68.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup2_1");
    },
    '69.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup3_1");
    },
    '70.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup4_1");
    },
    '71.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '72.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '73.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '74.Click radio button "I treat everyone..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '75.Click radio button "People would say..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '76.Click radio button "It is important..."': function() {
        act.click("#rblStatementGroup3_0");
    },
    '77.Click radio button "Other people would..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '78.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup5_1");
    },
    '79.Click radio button "Neutral"': function() {
        act.click("#rblStatementGroup6_1");
    },
    '80.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '81.Click radio button "I do things..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '82.Click radio button "I seek out..."': function() {
        act.click("#rblStatementGroup2_0");
    },
    '83.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '84.Click radio button "It takes me..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '85.Click radio button "I make people..."': function() {
        act.click("#rblStatementGroup5_2");
    },
    '86.Click radio button "I expect others..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '87.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '88.Click radio button "I like to..."': function() {
        act.click("#rblStatementGroup1_2");
    },
    '89.Click radio button "I enjoy listening..."': function() {
        act.click("#rblStatementGroup2_2");
    },
    '90.Click radio button "I do not..."': function() {
        act.click("#rblStatementGroup3_2");
    },
    '91.Click radio button "I value being..."': function() {
        act.click("#rblStatementGroup4_0");
    },
    '92.Click radio button "Sometimes, I’m too..."': function() {
        act.click("#rblStatementGroup5_0");
    },
    '93.Click radio button "I tell people..."': function() {
        act.click("#rblStatementGroup6_0");
    },
    '94.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext$/)");
    },
    '95.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '96.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The Resilience Questionnaire  - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "The Resilience Questionnsire");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click input "ctl00$ContentPlaceH..."': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)");
    },
    "9.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "10.Press key BACKSPACE": function() {
        act.press("backspace");
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "naire");
    },
    '15.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '16.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
   },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '24.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '25.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '26.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '27.Click radio button "A1:Strongly Disagree"': function() {
        act.click("#optA_1");
    },
    '28.Click radio button "B2:Disagree"': function() {
        act.click("#optB_2");
    },
    '29.Click radio button "C3:Neither Agree..."': function() {
        act.click("#optC_3");
    },
    '30.Click radio button "D4:Agree"': function() {
        act.click("#optD_4");
    },
    '31.Click radio button "E5:Strongly Agree"': function() {
        act.click("#optE_5");
    },
    '32.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '33.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloNETButton2$/)");
    },
    '34.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '35.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '36.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '37.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '38.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '41.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '42.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '43.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '44.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '45.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '46.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '47.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '48.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '49.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '50.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optE'][title='E5:Strongly Agree']");
    },
    '51.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '52.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '53.Click radio button "B5:Strongly Agree"': function() {
        act.click("[name='optB'][title='B5:Strongly Agree']");
    },
    '54.Click radio button "C5:Strongly Agree"': function() {
        act.click("[name='optC'][title='C5:Strongly Agree']");
    },
    '55.Click radio button "D5:Strongly Agree"': function() {
        act.click("[name='optD'][title='D5:Strongly Agree']");
    },
    '56.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optE'][title='E5:Strongly Agree']");
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '59.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '60.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '61.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '62.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '63.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '64.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '65.Click radio button "B1:Strongly Disagree"': function() {
        act.click("[name='optB'][title='B1:Strongly Disagree']");
    },
    '66.Click radio button "C1:Strongly Disagree"': function() {
        act.click("[name='optC'][title='C1:Strongly Disagree']");
    },
    '67.Click radio button "D1:Strongly Disagree"': function() {
        act.click("[name='optD'][title='D1:Strongly Disagree']");
    },
    '68.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '69.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '70.Click radio button "A2:Disagree"': function() {
        act.click("[name='optA'][title='A2:Disagree']");
    },
    '71.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '72.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '73.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '74.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '75.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '76.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '77.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '78.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '79.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '80.Click radio button "E2:Disagree"': function() {
        act.click("[name='optE'][title='E2:Disagree']");
    },
    '81.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '82.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '83.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '84.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '85.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '86.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '89.Click radio button "B5:Strongly Agree"': function() {
        act.click("[name='optB'][title='B5:Strongly Agree']");
    },
    '90.Click radio button "C5:Strongly Agree"': function() {
        act.click("[name='optC'][title='C5:Strongly Agree']");
    },
    '91.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '92.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '93.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '94.Click radio button "A4:Agree"': function() {
        act.click("[name='optA'][title='A4:Agree']");
    },
    '95.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '96.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '97.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '98.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '99.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '100.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '101.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The Think Forward Questionnaire - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "ThinkForward");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Type in input "ctl00$ContentPlaceH..."': function() {
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", " Questionnaire");
    },
    '9.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '10.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '16.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '17.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '18.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '19.Click radio button "A4:Agree"': function() {
        act.click("#optA_4");
    },
    '20.Click radio button "B4:Agree"': function() {
        act.click("#optB_4");
    },
    '21.Click radio button "C4:Agree"': function() {
        act.click("#optC_4");
    },
    '22.Click radio button "D4:Agree"': function() {
        act.click("#optD_4");
    },
    '23.Click radio button "E4:Agree"': function() {
        act.click("#optE_4");
    },
    '24.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '25.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext3$/)");
    },
    '26.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '27.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '28.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '29.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '30.Click radio button "E2:Disagree"': function() {
        act.click("[name='optE'][title='E2:Disagree']");
    },
    '31.Click radio button "E2:Disagree"': function() {
        act.click("[name='optF'][title='E2:Disagree']");
    },
    '32.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '33.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '34.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '35.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '36.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '37.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '38.Click radio button "E4:Agree"': function() {
        act.click("[name='optF'][title='E4:Agree']");
    },
    '39.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '40.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '41.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '42.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '43.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '44.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '45.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '47.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '48.Click radio button "B5:Strongly Agree"': function() {
        act.click("[name='optB'][title='B5:Strongly Agree']");
    },
    '49.Click radio button "C5:Strongly Agree"': function() {
        act.click("[name='optC'][title='C5:Strongly Agree']");
    },
    '50.Click radio button "D5:Strongly Agree"': function() {
        act.click("[name='optD'][title='D5:Strongly Agree']");
    },
    '51.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '52.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '53.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '54.Click radio button "A2:Disagree"': function() {
        act.click("[name='optA'][title='A2:Disagree']");
    },
    '55.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '56.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '57.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '58.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '59.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '60.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '61.Click radio button "A4:Agree"': function() {
        act.click("[name='optA'][title='A4:Agree']");
    },
    '62.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '63.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '64.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '65.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '66.Click radio button "E4:Agree"': function() {
        act.click("[name='optF'][title='E4:Agree']");
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '69.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '70.Click radio button "C2:Disagree"': function() {
        act.click("[name='optC'][title='C2:Disagree']");
    },
    '71.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '72.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '73.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optF'][title='E1:Strongly Disagree']");
    },
    '74.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '75.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '76.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '77.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '78.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '79.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optE'][title='E5:Strongly Agree']");
    },
    '80.Click radio button "E4:Agree"': function() {
        act.click("[name='optF'][title='E4:Agree']");
    },
    '81.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '82.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '83.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '84.Click radio button "C4:Agree"': function() {
        act.click("[name='optC'][title='C4:Agree']");
    },
    '85.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '86.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '87.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '88.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '89.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '90.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    "91.Click label": function() {
        var actionTarget = function() {
            return $("#tr_OptionC").find(".btnLabel").eq(2);
        };
        act.click(actionTarget);
    },
    '92.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '93.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '94.Click radio button "E4:Agree"': function() {
        act.click("[name='optF'][title='E4:Agree']");
    },
    '95.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '96.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '97.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '98.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '99.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '100.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '101.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "A1:Strongly Disagree"': function() {
        act.click("[name='optA'][title='A1:Strongly Disagree']");
    },
    '104.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '105.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '106.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '107.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '108.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '109.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '110.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '111.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    "112.Click label": function() {
        var actionTarget = function() {
            return $("#tr_OptionC").find(".btnLabel").eq(2);
        };
        act.click(actionTarget);
    },
    '113.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '114.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '115.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '116.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '117.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The Think Forward Work Readiness Tracker - Running"] = {
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
        act.type(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_txtFilterProjectName$/)", "Work Readiness Tracker");
    },
    '7.Click submit button "Apply Filter"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ContentPlaceHolder1_btnFilter$/)");
    },
    '8.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(13) > img:nth(0)");
    },
   '9 select supervised admin code': function() {
        this.password  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '11.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcom)");
    },
    '12.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1Example1bwx2");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(this.password);
        
    },
    '14.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '15.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '16.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '17.Click radio button "A1:Strongly Disagree"': function() {
        act.click("#optA_1");
    },
    '18.Click radio button "B2:Disagree"': function() {
        act.click("#optB_2");
    },
    '19.Click radio button "C3:Neither Agree..."': function() {
        act.click("#optC_3");
    },
    '20.Click radio button "D4:Agree"': function() {
        act.click("#optD_4");
    },
    '21.Click radio button "E4:Agree"': function() {
        act.click("#optE_4");
    },
    '22.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '23.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext3$/)");
    },
    '24.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '25.Click radio button "B5:Strongly Agree"': function() {
        act.click("[name='optB'][title='B5:Strongly Agree']");
    },
    '26.Click radio button "C5:Strongly Agree"': function() {
        act.click("[name='optC'][title='C5:Strongly Agree']");
    },
    '27.Click radio button "D5:Strongly Agree"': function() {
        act.click("[name='optD'][title='D5:Strongly Agree']");
    },
    '28.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optE'][title='E5:Strongly Agree']");
    },
    '29.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '30.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '31.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '32.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '33.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '34.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '35.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '36.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '37.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '38.Click radio button "A2:Disagree"': function() {
        act.click("[name='optA'][title='A2:Disagree']");
    },
    '39.Click radio button "B2:Disagree"': function() {
        act.click("[name='optB'][title='B2:Disagree']");
    },
    '40.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '41.Click radio button "D4:Agree"': function() {
        act.click("[name='optD'][title='D4:Agree']");
    },
    '42.Click radio button "E4:Agree"': function() {
        act.click("[name='optE'][title='E4:Agree']");
    },
    '43.Click radio button "E5:Strongly Agree"': function() {
        act.click("[name='optF'][title='E5:Strongly Agree']");
    },
    '44.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '45.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '46.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '47.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '48.Click radio button "D2:Disagree"': function() {
        act.click("[name='optD'][title='D2:Disagree']");
    },
    '49.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optE'][title='E1:Strongly Disagree']");
    },
    '50.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '51.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '52.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '53.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '54.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '55.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '56.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '57.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optF'][title='E3:Neither Agree nor Disagree']");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "A5:Strongly Agree"': function() {
        act.click("[name='optA'][title='A5:Strongly Agree']");
    },
    '60.Click radio button "B4:Agree"': function() {
        act.click("[name='optB'][title='B4:Agree']");
    },
    '61.Click radio button "C3:Neither Agree..."': function() {
        act.click("[name='optC'][title='C3:Neither Agree nor Disagree']");
    },
    '62.Click radio button "D3:Neither Agree..."': function() {
        act.click("[name='optD'][title='D3:Neither Agree nor Disagree']");
    },
    '63.Click radio button "E2:Disagree"': function() {
        act.click("[name='optE'][title='E2:Disagree']");
    },
    '64.Click radio button "E1:Strongly Disagree"': function() {
        act.click("[name='optF'][title='E1:Strongly Disagree']");
    },
    '65.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '66.Click radio button "A3:Neither Agree..."': function() {
        act.click("[name='optA'][title='A3:Neither Agree nor Disagree']");
    },
    '67.Click radio button "B3:Neither Agree..."': function() {
        act.click("[name='optB'][title='B3:Neither Agree nor Disagree']");
    },
    '68.Click radio button "C2:Disagree"': function() {
        act.click("[name='optC'][title='C2:Disagree']");
    },
    "69.Click label": function() {
        var actionTarget = function() {
            return $("#tr_OptionD").find(".btnLabel").eq(3);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "E3:Neither Agree..."': function() {
        act.click("[name='optE'][title='E3:Neither Agree nor Disagree']");
    },
    '71.Click radio button "E2:Disagree"': function() {
        act.click("[name='optF'][title='E2:Disagree']");
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '74.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '75.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};






































var supervisedAdminCode;
"@fixture Running Branded Assessments";
"@page https://uat.apolloadministration.adc.uk.com/login.aspx?ReturnUrl=%2fDefault.aspx";
"@test"["Police Constable BSQ v2  - Wiltshire Police - Running"] = {
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
    '6.Click image "Details"': function() {
        var actionTarget = function() {
            return $(".lnkNoHref[alt='Details']").eq(0);
        };
        act.click(actionTarget);
    },
    '9 select supervised admin code': function() {
        localStorage["Code"]  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '9.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcomwiltshirepolice)");
    },
    '10.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1example1bwx8");
    },
    '11.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
"14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(localStorage["Code"]);
        localStorage.clear();
},
    '13.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '16.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '17.Click label "I AGREE"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_ApolloLabel1$/)");
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
    '23.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3023']").eq(2);
        };
        act.click(actionTarget);
    },
    '24.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3024']").eq(3);
        };
        act.click(actionTarget);
    },
    '25.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3025']").eq(4);
        };
        act.click(actionTarget);
    },
    '26.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3026']").eq(5);
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
    '33.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3031']").eq(4);
        };
        act.click(actionTarget);
    },
    '34.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3032']").eq(3);
        };
        act.click(actionTarget);
    },
    '35.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3033']").eq(6);
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
    '38.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3035']").eq(1);
        };
        act.click(actionTarget);
    },
    '39.Click radio button "0"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3036']").eq(0);
        };
        act.click(actionTarget);
    },
    '40.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3037']").eq(2);
        };
        act.click(actionTarget);
    },
    '41.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3038']").eq(3);
        };
        act.click(actionTarget);
    },
    '42.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '43.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3039']").eq(4);
        };
        act.click(actionTarget);
    },
    '44.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3040']").eq(3);
        };
        act.click(actionTarget);
    },
    '45.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3041']").eq(6);
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
    '48.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3043']").eq(2);
        };
        act.click(actionTarget);
    },
    '49.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3044']").eq(3);
        };
        act.click(actionTarget);
    },
    '50.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3045']").eq(4);
        };
        act.click(actionTarget);
    },
    "51.Click table cell": function() {
        var actionTarget = function() {
            return $("#quadTable").find(" > tbody:nth(0) > tr:nth(4) > td:nth(6)");
        };
        act.click(actionTarget);
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3047']").eq(6);
        };
        act.click(actionTarget);
    },
    '54.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3048']").eq(5);
        };
        act.click(actionTarget);
    },
    '55.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3049']").eq(4);
        };
        act.click(actionTarget);
    },
    '56.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3050']").eq(3);
        };
        act.click(actionTarget);
    },
    '57.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '58.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3051']").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3052']").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3053']").eq(5);
        };
        act.click(actionTarget);
    },
    '61.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3054']").eq(6);
        };
        act.click(actionTarget);
    },
    '62.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '63.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3055']").eq(6);
        };
        act.click(actionTarget);
    },
    '64.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3056']").eq(4);
        };
        act.click(actionTarget);
    },
    '65.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3057']").eq(3);
        };
        act.click(actionTarget);
    },
    '66.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3058']").eq(2);
        };
        act.click(actionTarget);
    },
    '67.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '68.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3059']").eq(3);
        };
        act.click(actionTarget);
    },
    '69.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3060']").eq(4);
        };
        act.click(actionTarget);
    },
    '70.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3061']").eq(5);
        };
        act.click(actionTarget);
    },
    '71.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3062']").eq(6);
        };
        act.click(actionTarget);
    },
    '72.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '73.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3063']").eq(2);
        };
        act.click(actionTarget);
    },
    '74.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3064']").eq(1);
        };
        act.click(actionTarget);
    },
    '75.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3065']").eq(5);
        };
        act.click(actionTarget);
    },
    '76.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3066']").eq(4);
        };
        act.click(actionTarget);
    },
    '77.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '78.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3067']").eq(6);
        };
        act.click(actionTarget);
    },
    '79.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3068']").eq(5);
        };
        act.click(actionTarget);
    },
    '80.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3069']").eq(4);
        };
        act.click(actionTarget);
    },
    "81.Click table cell": function() {
        var actionTarget = function() {
            return $("#quadTable").find(" > tbody:nth(0) > tr:nth(4) > td:nth(4)");
        };
        act.click(actionTarget);
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3071']").eq(2);
        };
        act.click(actionTarget);
    },
    '84.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3072']").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3073']").eq(4);
        };
        act.click(actionTarget);
    },
    '86.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3074']").eq(5);
        };
        act.click(actionTarget);
    },
    '87.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '88.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3075']").eq(6);
        };
        act.click(actionTarget);
    },
    '89.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3076']").eq(5);
        };
        act.click(actionTarget);
    },
    '90.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3077']").eq(4);
        };
        act.click(actionTarget);
    },
    '91.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3078']").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '93.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3079']").eq(3);
        };
        act.click(actionTarget);
    },
    '94.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3080']").eq(4);
        };
        act.click(actionTarget);
    },
    '95.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3081']").eq(5);
        };
        act.click(actionTarget);
    },
    '96.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3082']").eq(6);
        };
        act.click(actionTarget);
    },
    '97.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '98.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3083']").eq(2);
        };
        act.click(actionTarget);
    },
    '99.Click radio button "1"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3084']").eq(1);
        };
        act.click(actionTarget);
    },
    '100.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3085']").eq(5);
        };
        act.click(actionTarget);
    },
    '101.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3086']").eq(6);
        };
        act.click(actionTarget);
    },
    '102.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '103.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3087']").eq(6);
        };
        act.click(actionTarget);
    },
    '104.Click radio button "5"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3088']").eq(5);
        };
        act.click(actionTarget);
    },
    '105.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3089']").eq(4);
        };
        act.click(actionTarget);
    },
    '106.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3090']").eq(3);
        };
        act.click(actionTarget);
    },
    '107.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '108.Click radio button "2"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3091']").eq(2);
        };
        act.click(actionTarget);
    },
    '109.Click radio button "3"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3092']").eq(3);
        };
        act.click(actionTarget);
    },
    '110.Click radio button "4"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3093']").eq(4);
        };
        act.click(actionTarget);
    },
    '111.Click radio button "6"': function() {
        var actionTarget = function() {
            return $("[name='aspnetForm']").find("[name='3094']").eq(6);
        };
        act.click(actionTarget);
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnFinish$/)");
    },
    '114.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};

"@test"["The Employability Questionnaire - Capita PD - Running"] = {
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
    '6.Click image "Details"': function() {
        act.click("body > form:nth(0) > div:nth(4) > div:nth(4) > div:nth(2) > div:nth(2) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(12) > img:nth(0)");
    },
    '9 select supervised admin code': function() {
        localStorage["Code"]  = $(".SupervisedPasswordPanel")[0].innerHTML.split("\"")[1];
    },
    '10.Press key combination CTRL+C': function() {
        act.press("ctrl+c");
    },
    '9.Click link "https://uat.apollo...."': function() {
        act.click(":containsExcludeChildren(httpsuatapolloadcukcomcapita)");
    },
    '10.Type in input "Username*"': function() {
        act.type("#txtUsername", "QAwx1example1bwx23");
    },
    '13.Click password input "Password*"': function() {
        act.click("#txtPassword");
    },
    "14.Press key combination CTRL+V": function() {
        $("#txtPassword").val(localStorage["Code"]);
        localStorage.clear();
    },
    '15.Click button "Login"': function() {
        act.click("#btnSubmit");
    },
    '14.Click submit button "Start"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_Tasks_ctl\\d+_btnSelectTask$/)");
    },
    '15.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext1$/)");
    },
    '16.Click radio button "A1:Strongly Disagree"': function() {
        act.click("#optA_1");
    },
    '17.Click radio button "B1:Strongly Disagree"': function() {
        act.click("#optB_1");
    },
    '18.Click radio button "C1:Strongly Disagree"': function() {
        act.click("#optC_1");
    },
    '19.Click radio button "D1:Strongly Disagree"': function() {
        act.click("#optD_1");
    },
    '20.Click radio button "E1:Strongly Disagree"': function() {
        act.click("#optE_1");
    },
    '21.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext2$/)");
    },
    '22.Click submit button "Next"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnNext3$/)");
    },
    '23.Click radio button "Disagree"': function() {
        act.click("#optA2");
    },
    '24.Click radio button "Disagree"': function() {
        act.click("#optB2");
    },
    '25.Click radio button "Disagree"': function() {
        act.click("#optC2");
    },
    '26.Click radio button "Disagree"': function() {
        act.click("#optD2");
    },
    '27.Click radio button "Disagree"': function() {
        act.click("#optE2");
    },
    '28.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '29.Click radio button "Neither Agree nor..."': function() {
        act.click("#optA3");
    },
    '30.Click radio button "Neither Agree nor..."': function() {
        act.click("#optB3");
    },
    '31.Click radio button "Neither Agree nor..."': function() {
        act.click("#optC3");
    },
    '32.Click radio button "Neither Agree nor..."': function() {
        act.click("#optD3");
    },
    '33.Click radio button "Neither Agree nor..."': function() {
        act.click("#optE3");
    },
    '34.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '35.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '36.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '37.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '38.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '39.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '40.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '41.Click radio button "Strongly Agree"': function() {
        act.click("#optA5");
    },
    '42.Click radio button "Strongly Agree"': function() {
        act.click("#optB5");
    },
    '43.Click radio button "Strongly Agree"': function() {
        act.click("#optC5");
    },
    '44.Click radio button "Strongly Agree"': function() {
        act.click("#optD5");
    },
    '45.Click radio button "Strongly Agree"': function() {
        act.click("#optE5");
    },
    '46.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '47.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '48.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '49.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '50.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '51.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '52.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '53.Click radio button "Neither Agree nor..."': function() {
        act.click("#optA3");
    },
    '54.Click radio button "Neither Agree nor..."': function() {
        act.click("#optB3");
    },
    '55.Click radio button "Neither Agree nor..."': function() {
        act.click("#optC3");
    },
    '56.Click radio button "Neither Agree nor..."': function() {
        act.click("#optD3");
    },
    '57.Click radio button "Neither Agree nor..."': function() {
        act.click("#optE3");
    },
    '58.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '59.Click radio button "Disagree"': function() {
        act.click("#optA2");
    },
    '60.Click radio button "Disagree"': function() {
        act.click("#optB2");
    },
    '61.Click radio button "Disagree"': function() {
        act.click("#optC2");
    },
    '62.Click radio button "Disagree"': function() {
        act.click("#optD2");
    },
    '63.Click radio button "Disagree"': function() {
        act.click("#optE2");
    },
    '64.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '65.Click radio button "Strongly Disagree"': function() {
        act.click("#optA1");
    },
    '66.Click radio button "Strongly Disagree"': function() {
        act.click("#optB1");
    },
    '67.Click radio button "Strongly Disagree"': function() {
        act.click("#optC1");
    },
    '68.Click radio button "Strongly Disagree"': function() {
        act.click("#optD1");
    },
    '69.Click radio button "Strongly Disagree"': function() {
        act.click("#optE1");
    },
    '70.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '71.Click radio button "Disagree"': function() {
        act.click("#optA2");
    },
    '72.Click radio button "Disagree"': function() {
        act.click("#optB2");
    },
    '73.Click radio button "Disagree"': function() {
        act.click("#optC2");
    },
    '74.Click radio button "Disagree"': function() {
        act.click("#optD2");
    },
    '75.Click radio button "Disagree"': function() {
        act.click("#optE2");
    },
    '76.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '77.Click radio button "Neither Agree nor..."': function() {
        act.click("#optA3");
    },
    '78.Click radio button "Neither Agree nor..."': function() {
        act.click("#optB3");
    },
    '79.Click radio button "Neither Agree nor..."': function() {
        act.click("#optC3");
    },
    '80.Click radio button "Neither Agree nor..."': function() {
        act.click("#optD3");
    },
    '81.Click radio button "Neither Agree nor..."': function() {
        act.click("#optE3");
    },
    '82.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '83.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '84.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '85.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '86.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '87.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '88.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '89.Click radio button "Strongly Agree"': function() {
        act.click("#optA5");
    },
    '90.Click radio button "Strongly Agree"': function() {
        act.click("#optB5");
    },
    '91.Click radio button "Strongly Agree"': function() {
        act.click("#optC5");
    },
    '92.Click radio button "Strongly Agree"': function() {
        act.click("#optD5");
    },
    '93.Click radio button "Strongly Agree"': function() {
        act.click("#optE5");
    },
    '94.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '95.Click radio button "Agree"': function() {
        act.click("#optA4");
    },
    '96.Click radio button "Agree"': function() {
        act.click("#optB4");
    },
    '97.Click radio button "Agree"': function() {
        act.click("#optC4");
    },
    '98.Click radio button "Agree"': function() {
        act.click("#optD4");
    },
    '99.Click radio button "Agree"': function() {
        act.click("#optE4");
    },
    '100.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '101.Click radio button "Neither Agree nor..."': function() {
        act.click("#optA3");
    },
    '102.Click radio button "Neither Agree nor..."': function() {
        act.click("#optB3");
    },
    '103.Click radio button "Neither Agree nor..."': function() {
        act.click("#optC3");
    },
    '104.Click radio button "Neither Agree nor..."': function() {
        act.click("#optD3");
    },
    '105.Click radio button "Neither Agree nor..."': function() {
        act.click("#optE3");
    },
    '106.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '107.Click radio button "Disagree"': function() {
        act.click("#optA2");
    },
    '108.Click radio button "Disagree"': function() {
        act.click("#optB2");
    },
    '109.Click radio button "Disagree"': function() {
        act.click("#optC2");
    },
    '110.Click radio button "Disagree"': function() {
        act.click("#optD2");
    },
    '111.Click radio button "Disagree"': function() {
        act.click("#optE2");
    },
    '112.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '113.Click radio button "Strongly Disagree"': function() {
        act.click("#optA1");
    },
    '114.Click radio button "Strongly Disagree"': function() {
        act.click("#optB1");
    },
    '115.Click radio button "Strongly Disagree"': function() {
        act.click("#optC1");
    },
    '116.Click radio button "Strongly Disagree"': function() {
        act.click("#optD1");
    },
    '117.Click radio button "Strongly Disagree"': function() {
        act.click("#optE1");
    },
    '118.Click button "Next"': function() {
        act.click("#btnNext");
    },
    '119.Click submit button "Submit"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnSubmit$/)");
    },
    '120.Click submit button "Finish"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_MainContent_btnExit$/)");
    },
    '121.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_lnkLogout$/)");
    }
};


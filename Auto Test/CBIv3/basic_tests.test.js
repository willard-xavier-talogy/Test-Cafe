"@fixture Basic Tests";
"@page https://uat.cbismart.com/Login.aspx";

"@test"["CBIv3 - Admin site test"] = {
    '1.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "willard.xavier@adc.uk.com");
    },
    '4.Type in password input "Password:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtPassword$/)", "Ev1ldead1");
    },
    '5.Click link "Login"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnLogin$/)");
    },
    '6.Type in input "Root$Main$ctl00$txt..."': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtName$/)", "qa");
    },
    "7.Press key ENTER": function() {
        act.press("enter");
    },
    '8.Click link "QA testing"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnName_1$/)");
    },
    '9.Click link "Configurations"': function() {
        act.click(":containsExcludeChildren(Configurations)");
    },
    '10.Click link "Languages"': function() {
        act.click(":containsExcludeChildren(Languages)");
    },
    '11.Click link "Import / Export"': function() {
        act.click(":containsExcludeChildren(Import Export)");
    },
    '12.Click link "Role grouping 1..."': function() {
        act.click(":containsExcludeChildren(Role grouping 1 Job Role Level)");
    },
    '13.Click link "Competency groups"': function() {
        act.click(":containsExcludeChildren(Competency groups)");
    },
    '14.Click link "Competencies"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Competencies)").eq(0);
        };
        act.click(actionTarget);
    },
    '15.Click link "Questions"': function() {
        act.click(":containsExcludeChildren(Questions)");
    },
    '16.Click link "Behavioural..."': function() {
        act.click(":containsExcludeChildren(Behavioural indicators)");
    },
    '17.Click link "Client specific CMS"': function() {
        act.click(":containsExcludeChildren(Client specific CMS)");
    },
    '18.Click link "Client specific..."': function() {
        act.click(":containsExcludeChildren(Client specific interview guide)");
    },
    '19.Click link "Client users"': function() {
        act.click(":containsExcludeChildren(Client users)");
    },
    '20.Click link "User category 1..."': function() {
        act.click(":containsExcludeChildren(User category 1 User category 1)");
    },
    '21.Click link "User category 2..."': function() {
        act.click(":containsExcludeChildren(User category 2 User category 2)");
    },
    '22.Click link "Email Templates"': function() {
        act.click(":containsExcludeChildren(Email Templates)");
    },
    '23.Click link "Settings"': function() {
        act.click(":containsExcludeChildren(Settings)");
    },
    '24.Click link "Clients"': function() {
        act.click(":containsExcludeChildren(Clients)");
    }
};

"@test"["CBIv3 - Admin user create with problems"] = {
    '1.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "willard.xavier@adc.uk.com");
    },
    '2.Type in password input "Password:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtPassword$/)", "Ev1ldead1");
    },
    '3.Click link "Login"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnLogin$/)");
    },
    '4.Type in input "Root$Main$ctl00$txt..."': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtName$/)", "qa");
    },
    '5.Click submit button "Search"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSearch$/)");
    },
      '8.Click link "QA testing"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnName_1$/)");
    },
    '7.Click link "Client users"': function() {
        act.click(":containsExcludeChildren(Client users)");
    },
    '8.Click submit button "Add New"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnAddNew$/)");
    },
    '9.Type in input "First name:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtFirstName$/)", "QA");
    },
    "10.Click div": function() {
        act.click(".content-area-wrapper");
    },
    '11.Type in input "Last name:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtLastName$/)", "Testing");
    },
    '12.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "qa@example.com");
    },
    "13.Click div": function() {
        act.click(".content-area");
    },
    '14.Click select "Root$Main$ctl00$lst..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstUserCategory1$/)");
    },
    '15.Click option "---Select---"': function() {
        var actionTarget = function() {
            return $(":attrRegExp(id:/^Main_ctl\\d+_lstUserCategory1$/)").find(":containsExcludeChildren(Select)");
        };
        act.click(actionTarget);
    },
    '16.Click select "Root$Main$ctl00$lst..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstUserCategory2$/)");
    },
    '17.Click select "Root$Main$ctl00$lst..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstClientLanguage$/)");
    },
    '18.Click option "English"': function() {
        act.click(":containsExcludeChildren(English)");
    },
    '19.Click submit button "Save"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSave$/)");
    },
    '20.Drag paragraph "- Please select..."': function() {
        var actionTarget = function() {
            return $("#alertify").find(":containsExcludeChildren(Please select user type)");
        };
        act.drag(actionTarget, -240, -5, {
            offsetX: 281,
            offsetY: 29
        });
    },
    "21.Click div": function() {
        act.click("#alertify-cover");
    },
    '22.Click submit button "OK"': function() {
        act.click("#alertify-ok");
    },
    '23.Click radio button "Admin"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstIsAdmin_0$/)");
    },
    '24.Click submit button "Save"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSave$/)");
    },
    '25.Click submit button "OK"': function() {
        act.click("#alertify-ok");
    },
    '26.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "69", {
            caretPos: 10
        });
    },
    '27.Click submit button "Save"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSave$/)");
    },
    '28.Click link "Clients"': function() {
        var actionTarget = function() {
            return $("#form2").find(":containsExcludeChildren(Clients)");
        };
        act.click(actionTarget);
    }
};

"@test"["CBIv3 - Create User with problems"] = {
    '1.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "willard.xavier@adc.uk.com");
    },
    '2.Type in password input "Password:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtPassword$/)", "Ev1ldead1");
    },
    '3.Click link "Login"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnLogin$/)");
    },
    '4.Type in input "Root$Main$ctl00$txt..."': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtName$/)", "qa");
    },
    '5.Click submit button "Search"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSearch$/)");
    },
       '8.Click link "QA testing"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnName_1$/)");
    },
    '7.Click link "Client users"': function() {
        act.click(":containsExcludeChildren(Client users)");
    },
    '8.Click submit button "Add New"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnAddNew$/)");
    },
    '9.Click radio button "User"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstIsAdmin_1$/)");
    },
    '10.Type in input "First name:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtFirstName$/)", "qa");
    },
    "11.Click div": function() {
        var actionTarget = function() {
            return $(".label").eq(3);
        };
        act.click(actionTarget);
    },
    '12.Type in input "Last name:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtLastName$/)", "User");
    },
    '13.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "qauser@exap");
    },
    "14.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '15.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "maple.com");
    },
    '16.Click input "Email:"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", {
            caretPos: 11
        });
    },
    "17.Press key RIGHT": function() {
        act.press("right");
    },
    "18.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    '19.Click select "Root$Main$ctl00$lst..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstClientLanguage$/)");
    },
    '20.Click option "English"': function() {
        act.click(":containsExcludeChildren(English)");
    },
    '21.Click submit button "Save"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnSave$/)");
    },
    '22.Click link "Clients"': function() {
        var actionTarget = function() {
            return $("#form2").find(":containsExcludeChildren(Clients)");
        };
        act.click(actionTarget);
    }
};

"@test"["CBIv3 - Create basic interview guide"] = {
    '1.Type in input "Email:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtEmail$/)", "willard.xavier@adc.uk.com");
    },
    '2.Type in password input "Password:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtPassword$/)", "Ev1ldead1");
    },
    '3.Click link "Login"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnLogin$/)");
    },
    '4.Type in input "Root$Main$ctl00$txt..."': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtName$/)", "qa");
    },
    "5.Press key ENTER": function() {
        act.press("enter");
    },
    '6.Click link "QA testing"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnName_1$/)");
    },
    '7.Click link "Client users"': function() {
        act.click(":containsExcludeChildren(Client users)");
    },
    '8.Click submit button "Impersonate"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnImpersonate_0$/)");
    },
    '9.Click link "New Interview"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnNewInterview$/)");
    },
    '10.Click submit button "OK"': function() {
        act.click("#alertify-ok");
    },
    '11.Click link "Select"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_btnSelectCommand_0$/)");
    },
    '12.Click <h3> "Leadership..."': function() {
        act.click(":containsExcludeChildren(Leadership Competencies Selected)");
    },
    '13.Click check box "Trustworthy"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstGrouping_gridList_0_chkSelect_0$/)");
    },
    '14.Click check box "Customer Focused"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_lstGrouping_gridList_0_chkSelect_1$/)");
    },
    '15.Click link "Next"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnNext$/)");
    },
    "16.Click <h3>": function() {
        var actionTarget = function() {
            return $(".main-column").find(" > h3:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    '17.Click check box "Give an example..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_lstQuestion_0_gridList_0_chkSelect_0$/)");
    },
    '18.Click check box "Describe a..."': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_gridList_lstQuestion_0_gridList_0_chkSelect_1$/)");
    },
    '19.Click link "Next"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnNext$/)");
    },
    '20.Type in input "Root$Main$ctl01$gri..."': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_gridInterviewers_txtName_0$/)", "qa");
    },
    '21.Type in input "Name of candidate:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtNameOfCandidate$/)", "John");
    },
    '22.Type in input "Job role:"': function() {
        act.type(":attrRegExp(id:/^Main_ctl\\d+_txtJobRole$/)", "Sales");
    },
    '23.Click link "Next"': function() {
        act.click(":attrRegExp(id:/^Main_ctl\\d+_btnNext$/)");
    },
    '24.Click link "Control panel"': function() {
        var actionTarget = function() {
            return $("#form2").find(":containsExcludeChildren(Control panel)");
        };
        act.click(actionTarget);
    },
    '25.Click link "Logout"': function() {
        act.click(":attrRegExp(id:/^ctl\\d+_ctl\\d+_lnkLogout$/)");
    }
};


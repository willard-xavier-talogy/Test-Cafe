"@fixture Basic tests Create event";
"@page https://uat.evaluate.adc.uk.com/";

"@test"["Create basic event"] = {
    "1.Type in input": function() {
        act.type("#username", "qama.autotesting");
    },
    "2.Type in password input": function() {
        act.type("#password", "Brown72house$");
    },
    '3.Click submit button "Login"': function() {
        act.click(":containsExcludeChildren(Login)");
    },
    'Click modal if showing': function() {
        var $element = $(".bootbox.modal");
        var actionTarget;
        if ($element.length > 0) {
            actionTarget = function() {
                return $(".bootbox.modal").find(".btn-primary");
            };
        } else {
            actionTarget = function() {
                return $("body");
            };
        }
        act.click(actionTarget);
    },
    '4.Click link "Projects"': function() {
        var actionTarget = function() {
            return $("#client-projects-tab").find(":containsExcludeChildren(Projects)");
        };
        act.click(actionTarget);
    },
    "5.Click <i>": function() {
        var actionTarget = function() {
            return $("#projects").find(".search.glyphicon.glyphicon-search");
        };
        act.click(actionTarget);
    },
    "6.Type in input": function() {
        act.type(".tablesorter-filter[data-column='0'][placeholder='Client name']", "auto");
    },
    '7.Click submit button "Archive"': function() {
        act.click(".btn.btn-sm.btn-border-danger.archive[data-title='qa auto testing']");
    },
    '8.Click button "OK"': function() {
        act.click(":containsExcludeChildren(OK)");
    },
    '9.Click button "OK"': function() {
        act.click(":containsExcludeChildren(OK)");
    },
    '10.Click submit button "Add"': function() {
        act.click("#project-add");
    },
    "11.Type in input": function() {
        var actionTarget = function() {
            return $("#project").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "qa auto testing");
    },
    '12.Click submit button "Next"': function() {
        act.click("#project-next");
    },
    "13.Click select": function() {
        var actionTarget = function() {
            return $("#project").find("[data-model='type'].form-control");
        };
        act.click(actionTarget);
    },
    '14.Click option "Development Centre"': function() {
        act.click(":containsExcludeChildren(Development Centre)");
    },
    "15.Type in text area": function() {
        var actionTarget = function() {
            return $("#project").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "Created using auto software");
    },
    "16.Type in input": function() {
        act.type("[data-model='score_1_hint'].form-control", "hint one");
    },
    "17.Type in input": function() {
        act.type("[data-model='score_2_hint'].form-control", "hint two");
    },
    "18.Type in input": function() {
        act.type("[data-model='score_3_hint'].form-control", "hint three");
    },
    "19.Type in input": function() {
        act.type("[data-model='score_4_hint'].form-control", "hint four");
    },
    '20.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "22.Click select": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='type'].form-control");
        };
        act.click(actionTarget);
    },
    '23.Click option "Exercise"': function() {
        act.click(":containsExcludeChildren(Exercise)");
    },
    "24.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "auto exercise 1");
    },
    "25.Type in text area": function() {
        act.type("[data-model='document_intro_notes'].form-control", "Welcome candidate auto text");
    },
    '26.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-document-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "28.Click select": function() {
        act.click("[data-model='type'].document_type.input-sm.form-control");
    },
    '29.Click option "Assessor"': function() {
        var actionTarget = function() {
            return $("select.document_type").find(":containsExcludeChildren(Assessor)");
        };
        act.click(actionTarget);
    },
    "30.Type in input": function() {
        act.type("[data-model='name'].form-control.input-sm.addhide", "Assessor auto doc");
    },
    "31.Click submit button": function() {
        act.click(".edit.btn.btn-sm.btn-default.addhide");
    },
    "32.Click submit button": function() {
        act.click(".edit.btn.btn-sm.btn-default.addhide");
    },
    '33.Click button "×"': function() {
        var actionTarget = function() {
            return $("#document-editor").find(":containsExcludeChildren(×)");
        };
        act.click(actionTarget);
    },
    '34.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-competency-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "35.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "com one");
    },
    '36.Click submit button "Next"': function() {
        act.click("#project-activity-competency-next");
    },
    "37.Type in text area": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "come one created using auto software");
    },
    '38.Click submit button "Add Indicator"': function() {
        act.click(":containsExcludeChildren(Add Indicator)");
    },
    "40.Type in text area": function() {
        act.type("[data-model='negative']", "negative auto one");
    },
    "41.Click table cell": function() {
        var actionTarget = function() {
            return $(".indicator-row").find(" > td:nth(3)");
        };
        act.click(actionTarget);
    },
    "42.Type in text area": function() {
        act.type("[data-model='positive']", "positive auto one");
    },
    '43.Click button "Done"': function() {
        var actionTarget = function() {
            return $("#project-activity-competency-done");
        };
        act.click(actionTarget);
    },
    '44. Wait': function() {
        act.wait(2e3);
    },
    '45.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-competency-add-row button");
        };
        act.click(actionTarget);
    },
    "46.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "come");
    },
    "47.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "48.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, " two");
    },
    '49.Click submit button "Next"': function() {
        act.click("#project-activity-competency-next");
    },
    "50.Type in text area": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "come tow ");
    },
    "51.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "52.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "53.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "54.Type in text area": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "wo auto software");
    },
    '55.Click submit button "Add Indicator"': function() {
        act.click(":containsExcludeChildren(Add Indicator)");
    },
    "59.Type in text area": function() {
        act.type("[data-model='negative']", "neg two auto");
    },
    "60.Click table cell": function() {
        var actionTarget = function() {
            return $(".indicator-row").find(" > td:nth(3)");
        };
        act.click(actionTarget);
    },
    "61.Type in text area": function() {
        act.type("[data-model='positive']", "pos two auto");
    },
    '62.Click submit button "Done"': function() {
        act.click("#project-activity-competency-done");
    },
    '64.Click submit button "Done"': function() {
        act.click("#project-activity-done");
    },
    'Action Wait': function() {
        act.wait(2e3);
    },
    'Click submit button "Done"': function() {
        var actionTarget = function() {
            return $("#project-activity-done");
        };
        act.click(actionTarget);
    },
    '65.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "66.Click select": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='type'].form-control");
        };
        act.click(actionTarget);
    },
    '67.Click option "Psychometric"': function() {
        act.click(":containsExcludeChildren(Psychometric)");
    },
    "68.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "auto pychometric one");
    },
    '69.Click submit button "Done"': function() {
        act.click("#project-activity-done");
    },
    '71.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "72.Click select": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='type'].form-control");
        };
        act.click(actionTarget);
    },
    '73.Click option "Interview"': function() {
        var actionTarget = function() {
            return $("#project-activity").find(":containsExcludeChildren(Interview)").eq(0);
        };
        act.click(actionTarget);
    },
    "74.Click input": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='name'].form-control");
        };
        act.click(actionTarget);
    },
    "75.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "interview auto one");
    },
    '76.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-document-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "78.Click select": function() {
        act.click("[data-model='type'].document_type.input-sm.form-control");
    },
    '79.Click option "Facilitator"': function() {
        act.click(":containsExcludeChildren(Facilitator)");
    },
    "80.Type in input": function() {
        act.type("[data-model='name'].form-control.input-sm.addhide", "fac auto doc");
    },
    "81.Click submit button": function() {
        act.click(".edit.btn.btn-sm.btn-default.addhide");
    },
    '83.Click button "×"': function() {
        var actionTarget = function() {
            return $("#document-editor").find(":containsExcludeChildren(×)");
        };
        act.click(actionTarget);
    },
    '84.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-interview-question-page-add-row").find(":containsExcludeChildren(Add)");
        };
        act.click(actionTarget);
    },
    "85.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity-interview-question-page").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "auto question one");
    },
    '86.Click submit button "Next"': function() {
        act.click("#project-activity-interview-question-page-next");
    },
    '87.Click submit button "Add Question"': function() {
        act.click(":containsExcludeChildren(Add Question)");
    },
    "88.Type in text area": function() {
        act.type("[data-model='question'].form-control", "This is question one for auto testing");
    },
    '89.Click submit button "Save Question"': function() {
        act.click(":containsExcludeChildren(Save Question)");
    },
    '90.Click submit button "Add Question"': function() {
        act.click(":containsExcludeChildren(Add Question)");
    },
    "91.Type in text area": function() {
        var actionTarget = function() {
            return $("[data-model='question'].form-control").eq(1);
        };
        act.type(actionTarget, "This is question two for auto testing");
    },
    '92.Click submit button "Done"': function() {
        act.click("#project-activity-interview-question-page-done");
    },
    'Wait': function() {
        act.wait(2e3);
    },
    '93.Click submit button "Add"': function() {
        var actionTarget = function() {
            return $("#project-activity-competency-add-row").find("button");
        };
        act.click(actionTarget);
    },
    "94.Type in input": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='name'].form-control");
        };
        act.type(actionTarget, "comp two auto");
    },
    '95.Click submit button "Next"': function() {
        act.click("#project-activity-competency-next");
    },
    "96.Type in text area": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "Come ");
    },
    "97.Type in text area": function() {
        var actionTarget = function() {
            return $("#project-activity-competency").find("[data-model='description'].form-control");
        };
        act.type(actionTarget, "p two auto testing");
    },
    "98.Type in text area": function() {
        act.type("[data-model='interview_question'].form-control", "Question for probes auto testing");
    },
    '99.Click submit button "Add Probe"': function() {
        act.click(":containsExcludeChildren(Add Probe)");
    },
    "101.Type in text area": function() {
        act.type("[data-model='probe'].form-control", "Probe one created for auto testing");
    },
    '102.Click submit button "Add Indicator"': function() {
        act.click(":containsExcludeChildren(Add Indicator)");
    },
    "103.Type in text area": function() {
        act.type("[data-model='negative']", "prob neg auto");
    },
    "104.Click table cell": function() {
        var actionTarget = function() {
            return $(".indicator-row").find(" > td:nth(3)");
        };
        act.click(actionTarget);
    },
    "105.Type in text area": function() {
        act.type("[data-model='positive']", "Pos Neg auto");
    },
    '106.Click submit button "Add Indicator"': function() {
        act.click(":containsExcludeChildren(Add Indicator)");
    },
    '107.Click submit button "Done"': function() {
        act.click("#project-activity-competency-done");
    },
    'Wait': function() {
        act.wait(1e3);
    },
    '108.Click submit button "Done"': function() {
        act.click("#project-activity-done");
    },
    'Wait': function() {
        act.wait(1e3);
    },
    '109.Click submit button "Done"': function() {
        act.click("#project-done");
    },
    'Wait': function() {
        act.wait(1e3);
    },
    "110.Click span": function() {
        var actionTarget = function() {
            return $("#profile-menu").find(".profile");
        };
        act.click(actionTarget);
    },
    'Wait': function() {
        act.wait(1e3);
    },
    '111.Click link "Logout qama..."': function() {
        act.click("#logout-user");
    }
};



"@fixture VAC2 - Basic tests";
"@page https://assessment.virtualac.adc.uk.com/Home/assessment";



"@test"["VAC2 - Send Draft Emails"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
            '1.Hover over span "Drafts"': function() {
        act.hover(":containsExcludeChildren(Drafts)");
    },
    '2.Click span "Drafts"': function() {
        act.click(":containsExcludeChildren(Drafts)");
    },
    '3.Click div "Hello"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Hello)").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '5.Click div "Alex Barrow"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Alex Barrow)").eq(0);
        };
        act.click(actionTarget);
    },
    '6.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '7.Click button "OK"': function() {
        act.click(":containsExcludeChildren(Yes send)");
    },
    '8.Click div "Hi Alex,Thanks..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Hi AlexThanks again for taking this difficult decision on board Like Ive saidpreviously this is not a great position for us to be in however we must t)").eq(0);
        };
        act.click(actionTarget);
    },
    '9.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '10.Click button "OK"': function() {
        act.click(":containsExcludeChildren(OK)");
    },
    '11.Click div "Select..."': function() {
        var actionTarget = function() {
            return $(".css-151xaom-placeholder").eq(0);
        };
        act.click(actionTarget);
    },
    "12.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(0);
        };
        act.click(actionTarget);
    },
    '13.Click div "Select..."': function() {
        var actionTarget = function() {
            return $(".css-151xaom-placeholder").eq(0);
        };
        act.click(actionTarget);
    },
    '14.Click div "Alex Barrow"': function() {
        act.click("#react-select-6-option-0");
    },
    '15.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '16.Click button "OK"': function() {
        act.click(":containsExcludeChildren(Yes send)");
    },
    '17.Click div "Cinema tickets!"': function() {
        act.click(":containsExcludeChildren(Cinema tickets)");
    },
    '18.Click div "Alex Barrow"': function() {
        var actionTarget = function() {
            return $(".css-1l6091r").eq(0);
        };
        act.click(actionTarget);
    },
    '19.Click button "Send"': function() {
        act.click("[data-translationid='Send'][title='Send'].btn-invisible.icon.icon-send.btn-send.btn.btn-primary.btn-sm");
    },
    '20.Click div "Car keys!"': function() {
        act.click(":containsExcludeChildren(Car keys)");
    },
    '21.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '22.Click div "(No Subject)"': function() {
        act.click(":containsExcludeChildren(No Subject)");
    },
    '23.Click button "Send"': function() {
        act.click("[data-translationid='Send'][title='Send'].btn-invisible.icon.icon-send.btn-send.btn.btn-primary.btn-sm");
    },
    '24.Click button "OK"': function() {
        act.click(":containsExcludeChildren(Yes send)");
    },
    '25.Click div "Bring me the money!"': function() {
        act.click(":containsExcludeChildren(Bring me the money)");
    },
    "26.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(0);
        };
        act.click(actionTarget);
    },
    '27.Click div "Tom Parker"': function() {
        act.click("#react-select-14-option-2");
    },
    '28.Dblclick div "Select..."': function() {
        act.dblclick(".css-151xaom-placeholder");
    },
    '29.Click button "Send"': function() {
        act.click("[data-translationid='Send'][title='Send'].btn-invisible.icon.icon-send.btn-send.btn.btn-primary.btn-sm");
    }
};



"@test"["VAC2 - Open Org Chart"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    "2.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > ul:nth(0) > li:nth(3) > a:nth(0) > span:nth(0) > svg:nth(0) > path:nth(0)");
    },
    '3.Click span "Strategic Change..."': function() {
        act.click(":containsExcludeChildren(Strategic Change Project team)");
    },
    "4.Click line": function() {
        var actionTarget = function() {
            return $(".dhx_hide_icon").find(" > line:nth(0)");
        };
        act.click(actionTarget);
    },
    "5.Click polyline": function() {
        var actionTarget = function() {
            return $(".dhx_expand_icon").find(" > polyline:nth(0)");
        };
        act.click(actionTarget);
    }
};

"@test"["VAC2 - View Emails"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click div "Welcome"': function() {
        act.click(":containsExcludeChildren(Welcome)");
    },
    '3.Click div "Training cuts..."': function() {
        act.click(":containsExcludeChildren(Training cuts required for Westport Region)");
    }
};

"@test"["VAC2 - View Docs in Emails"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click div "Hi Amrit,We\'re all..."': function() {
        act.click(":containsExcludeChildren(Hi AmritWere all very excited to have you as part of the ESIG family I know yourestill getting settled into your role but I would appreciate your inpu)");
    },
    "3.Click submit button": function() {
        act.click("[data-toggle='dropdown'].btn-invisible.dropdown-toggle.btn-attachment.btn.btn-primary.btn-sm");
    },
    '4.Click span "ESIG\'s Values and..."': function() {
        act.click(":containsExcludeChildren(ESIGs Values and Objectives)");
    },
    '5.Click span "Training cuts required for Westport Region"': function() {
        act.click(":containsExcludeChildren(Training cuts required for Westport Region)");
    },
    '6.Click div "Training cuts required for Westport Region"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Training cuts required for Westport Region)").eq(1);
        };
        act.click(actionTarget);
    },
    '7.Click span "Diversity Uptake..."': function() {
        act.click(":containsExcludeChildren(Diversity Uptake of Delegates)");
    }
};

"@test"["VAC2 - Create and Send New Email"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click span "New Message"': function() {
        act.click(":containsExcludeChildren(New Message)");
    },
    "3.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click div "Alex Barrow"': function() {
        act.click("#react-select-2-option-0");
    },
    "5.Click input": function() {
        act.click("#subject");
    },
    "6.Type in input": function() {
        act.type("#subject", "This is a test");
    },
    "7.Type in div": function() {
        act.type(".ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline", "This is a test done but");
    },
    "8.Press key BACKSPACE": function() {
        act.press("backspace");
    },
    "9.Type in div": function() {
        act.type(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused", "y ");
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
    "13.Type in div": function() {
        act.type(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused", "y the auto software");
    },
    '14.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    }
};

"@test"["VAC2 - Emails - Multi people and Send"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    "2.Click button": function() {
        var actionTarget = function() {
            return $("..icon.icon-add.btn-add.btn.btn-primary.btn-sm").eq(0);
        };
        act.click(actionTarget);
    },
    "3.Click <path>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").find(" > path:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click div "Alex Barrow"': function() {
        act.click("#react-select-2-option-0");
    },
    "5.Click <path>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").find(" > path:nth(0)").eq(2);
        };
        act.click(actionTarget);
    },
    '6.Click div "Tom Parker"': function() {
        act.click("#react-select-2-option-2");
    },
    "7.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(4);
        };
        act.click(actionTarget);
    },
    '8.Click div "Janet Thomson"': function() {
        act.click("#react-select-3-option-1");
    },
    "9.Click input": function() {
        act.click("#subject");
    },
    "10.Type in input": function() {
        act.type("#subject", "New emails with multi people");
    },
    '11.Type in paragraph "Created by the..."': function() {
        var actionTarget = function() {
            return $(".ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline").find(" > p:nth(0)");
        };
        act.type(actionTarget, "Created by the auto software");
    },
    '12.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    }
};

"@test"["VAC2 - View Sent Emails"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click link "Sent"': function() {
        act.click("[title='Sent'].sent");
    },
    '3.Click div "RE: Welcome"': function() {
        act.click(":containsExcludeChildren(RE Welcome)");
    },
    '4.Click div "RE: Training cuts..."': function() {
        act.click(":containsExcludeChildren(RE Training cuts required for Westport Region)");
    }
};

"@test"["VAC2 - Sent - Forward and Reply email"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click span "Sent"': function() {
        act.click(":containsExcludeChildren(Sent)");
    },
    '3.Click div "RE: Welcome"': function() {
        act.click(":containsExcludeChildren(RE Welcome)");
    },
    '4.Click span "Forward"': function() {
        act.click(":containsExcludeChildren(Forward)");
    },
    "5.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(0);
        };
        act.click(actionTarget);
    },
    '6.Click div "Alex Barrow"': function() {
        act.click("#react-select-2-option-0");
    },
    "7.Click paragraph": function() {
        var actionTarget = function() {
            return $(".ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline").find(" > p:nth(0)");
        };
        act.click(actionTarget);
    },
    '8.Type in paragraph "QA testing"': function() {
        var actionTarget = function() {
            return $(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused").find(" > p:nth(0)");
        };
        act.type(actionTarget, "QA testing");
    },
    '9.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '10.Click div "RE: Welcome"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(RE Welcome)").eq(1);
        };
        act.click(actionTarget);
    },
    '11.Click span "Reply All"': function() {
        act.click(":containsExcludeChildren(Reply All)");
    },
    '12.Type in paragraph "QA testing all"': function() {
        var actionTarget = function() {
            return $(".ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused").find(" > p:nth(0)");
        };
        act.type(actionTarget, "QA testing all");
    },
    '13.Click button "Send"': function() {
        act.click("[data-translationid='Send'][title='Send'].btn-invisible.icon.icon-send.btn-send.btn.btn-primary.btn-sm");
    }
};

"@test"["VAC2 - Testing Priority - H/L"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click div "Hi Amrit,We\'re all..."': function() {
        act.click(":containsExcludeChildren(Hi AmritWere all very excited to have you as part of the ESIG family I know yourestill getting settled into your role but I would appreciate your inpu)");
    },
    '3.Click span "Forward"': function() {
        act.click(":containsExcludeChildren(Forward)");
    },
    "4.Click <svg>": function() {
        var actionTarget = function() {
            return $(".css-19bqh2r").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click div "Alex Barrow"': function() {
        act.click("#react-select-2-option-0");
    },
    '6.Hover over submit button "Priority"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Priority)").eq(1);
        };
        act.hover(actionTarget);
    },
    '7.Click submit button "Priority"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Priority)").eq(1);
        };
        act.click(actionTarget);
    },
    '8.Click link "High priority"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(High priority)").eq(1);
        };
        act.click(actionTarget);
    },
    '9.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    },
    '10.Click div "Welcome - Flyin..."': function() {
        act.click(":containsExcludeChildren(Welcome Flyin Message 1 Minute After Trial Starts)");
    },
    '11.Click span "Reply All"': function() {
        act.click(":containsExcludeChildren(Reply All)");
    },
    '12.Hover over submit button "Priority"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Priority)").eq(1);
        };
        act.hover(actionTarget);
    },
    '13.Click submit button "Priority"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Priority)").eq(1);
        };
        act.click(actionTarget);
    },
    '14.Click link "Low priority"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Low priority)").eq(1);
        };
        act.click(actionTarget);
    },
    '15.Click span "Send"': function() {
        act.click(":containsExcludeChildren(Send)");
    }
};

"@test"["VAC2 - Discard Emails"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click link "Drafts"': function() {
        act.click("[title='Drafts'].drafts");
    },
    '3.Click div "Hello"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Hello)").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click span "Discard"': function() {
        act.click(":containsExcludeChildren(Discard)");
    },
    '5.Click button "Yes, discard"': function() {
        act.click(":containsExcludeChildren(Yes discard)");
    },
    '6.Click div "(No Subject)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(No Subject)").eq(0);
        };
        act.click(actionTarget);
    },
    '7.Click span "Discard"': function() {
        act.click(":containsExcludeChildren(Discard)");
    },
       '9.Click button "Yes, discard"': function() {
        act.click(":containsExcludeChildren(Yes discard)");
    },
    '10.Click div "(No Subject)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(No Subject)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click span "Discard"': function() {
        act.click(":containsExcludeChildren(Discard)");
    },
    '12.Click button "Yes, discard"': function() {
        act.click(":containsExcludeChildren(Yes discard)");
    }
};

"@test"["VAC2 - Preview Document and Save - Open"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click div "Hi Amrit,Thanks..."': function() {
        act.click(":containsExcludeChildren(Hi AmritThanks again for taking this difficult decision on board Like Ive saidpreviously this is not a great position for us to be in however we must )");
    },
    '3.Click span "Diversity Uptake..."': function() {
        act.click(":containsExcludeChildren(Diversity Uptake of Delegates)");
    },
    '4.Click link "Preview"': function() {
        act.click(":containsExcludeChildren(Preview)");
    },
    '5.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#modal\\:ck6rx8kni000d3b6rlk4gwmt8").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    "6.Click submit button": function() {
        act.click("[data-toggle='dropdown'].btn-invisible.dropdown-toggle.btn-attachment.btn.btn-primary.btn-sm");
    },
    '7.Click link "Preview"': function() {
        act.click(":containsExcludeChildren(Preview)");
    },
    '8.Click button "Save to Documents..."': function() {
        var actionTarget = function() {
            return $("#modal\\:ck6rx8tc5000h3b6rrchfz6oa").find(":containsExcludeChildren(Save to Documents)");
        };
        act.click(actionTarget);
    },
    '9.Click span "Documents"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Documents)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click div "Diversity Uptake..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Diversity Uptake of Delegates)").eq(1);
        };
        act.click(actionTarget);
    }
};

"@test"["VAC2 - Edited email - Preview Doc - Remove"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '3.Click div "(No Subject)"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(No Subject)").eq(1);
        };
        act.click(actionTarget);
    },
    '4.Click span "Draft - Diversity..."': function() {
        act.click(":containsExcludeChildren(Draft Diversity of Delegates)");
    },
    '5.Click link "Preview"': function() {
        act.click(":containsExcludeChildren(Preview)");
    },
    '6.Click button "Close"': function() {
        var actionTarget = function() {
            return $("#modal\\:ck6rxdp4d000f3b6rol9588nm").find(":containsExcludeChildren(Close)");
        };
        act.click(actionTarget);
    },
    '7.Click span "Draft - Diversity..."': function() {
        act.click(":containsExcludeChildren(Draft Diversity of Delegates)");
    },
    '8.Click link "Remove"': function() {
        act.click("[data-testid='removeLink'].dropdown-item");
    },
    '9.Click button "Yes, Remove"': function() {
        act.click(":containsExcludeChildren(Yes Remove)");
    }
};

"@test"["VAC2 - Document - Tool bar"] = {
       '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '2.Click span "Documents"': function() {
        var actionTarget = function() {
            return $("#root").find(":containsExcludeChildren(Documents)");
        };
        act.click(actionTarget);
    },
    '3.Click div "Test Document"': function() {
        act.click(":containsExcludeChildren(Test Document)");
    },
    '4.Click span "Paragraph"': function() {
        act.click("#ck-editor__aria-label_e22fbeae1d54c3606ed37a69fc9e153d9");
    },
    '5.Click span "Heading 1"': function() {
        act.click("#ck-editor__aria-label_e008877f25458794ecbfba3571a2e7d7b");
    },
    "6.Click button": function() {
        act.click(".ck.ck-button.ck-off.ck-button_with-text.ck-dropdown__button");
    },
    '7.Click span "Heading 2"': function() {
        act.click("#ck-editor__aria-label_e2ae6517cfc019a9336ed6607d1089f19");
    },
    "8.Click button": function() {
        act.click(".ck.ck-button.ck-off.ck-button_with-text.ck-dropdown__button");
    },
    '9.Click span "Heading 3"': function() {
        act.click("#ck-editor__aria-label_e80414287f655c92148f2c3c1656287e6");
    },
    "10.Click button": function() {
        act.click(".ck.ck-button.ck-off.ck-button_with-text.ck-dropdown__button");
    },
    "11.Click button": function() {
        act.click(".ck.ck-button.ck-heading_paragraph.ck-off.ck-button_with-text");
    },
    "12.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > button:nth(0) > svg:nth(0) > path:nth(0)");
    },
    "13.Click button": function() {
        act.click(".ck.ck-button.ck-fontsize-option.text-big.ck-off.ck-button_with-text");
    },
    "14.Click <svg>": function() {
        var actionTarget = function() {
            return $(".ck.ck-button.ck-off.ck-dropdown__button").find(" > svg:nth(0)").eq(1);
        };
        act.click(actionTarget);
    },
    '15.Click span "Default"': function() {
        act.click("#ck-editor__aria-label_ed6eedd5c32174e3026d62a047a61d9fc");
    },
    "16.Click <svg>": function() {
        var actionTarget = function() {
            return $(".ck.ck-button.ck-off.ck-dropdown__button").find(" > svg:nth(0)").eq(2);
        };
        act.click(actionTarget);
    },
    '17.Click span "Arial"': function() {
        act.click("#ck-editor__aria-label_ef8e6df3c0c89972e43e9a020c7811dcf");
    },
    "18.Click button": function() {
        var actionTarget = function() {
            return $(".ck.ck-button.ck-off.ck-dropdown__button").eq(2);
        };
        act.click(actionTarget);
    },
    '19.Click span "Georgia"': function() {
        act.click("#ck-editor__aria-label_eb1fcbddb322458f99a30d08773a40780");
    },
    "20.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(0) > svg:nth(0) > path:nth(0)");
    },
    "21.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(1) > svg:nth(0)");
    },
    "22.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(2) > svg:nth(0)");
    },
    "23.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(3) > svg:nth(0)");
    },
    "24.Click <path>": function() {
        var actionTarget = function() {
            return $(".ck-icon__fill").eq(0);
        };
        act.click(actionTarget);
    },
    "25.Click <svg>": function() {
        var actionTarget = function() {
            return $(".ck.ck-button.ck-off.ck-dropdown__button").find(" > svg:nth(0)").eq(3);
        };
        act.click(actionTarget);
    },
    "26.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(1) > svg:nth(0)");
    },
    "27.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > button:nth(0) > svg:nth(0) > path:nth(0)");
    },
    "28.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(2) > svg:nth(0)");
    },
    "29.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > button:nth(0) > svg:nth(0) > path:nth(0)");
    },
    "30.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(4) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(3) > svg:nth(0) > path:nth(0)");
    },
    "31.Click <path>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(4) > svg:nth(0) > path:nth(0)");
    },
    "32.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(5) > svg:nth(0)");
    },
    "33.Click <svg>": function() {
        var actionTarget = function() {
            return $(".ck.ck-button.ck-disabled.ck-off").find(" > svg:nth(0)").eq(0);
        };
        act.click(actionTarget);
    },
    "34.Click <svg>": function() {
        act.click("body > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(1) > div:nth(2) > div:nth(0) > div:nth(1) > div:nth(1) > div:nth(0) > div:nth(0) > div:nth(0) > div:nth(0) > button:nth(7) > svg:nth(0)");
    }
};


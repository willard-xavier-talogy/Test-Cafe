"@fixture VAC2";
"@page https://assessment.virtualac.adc.uk.com/Home/assessment";

"@test"["One"] = {
    '0': function() {
        var ref = window.document.getElementsByTagName("script")[0]; 
        var script = window.document.createElement("script"); 
        script.id="testStoreStateScript"; 
        script.src ="/testStateChooser.js"; 
        script.type="text/javascript"; 
        ref.parentNode.insertBefore(script, ref);
    },
    '1.Hover over submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.hover(actionTarget);
    },
    '2.Click submit button "Use State"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Use State)").eq(6);
        };
        act.click(actionTarget);
    },
    '3.Click div "ESIG Non-Executive..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(ESIG NonExecutive Director)").eq(0);
        };
        act.click(actionTarget);
    },
    '4.Click submit button "Reply"': function() {
        act.click("[data-translationid='Reply'][data-testid='replyButton'].btn.btn-primary.btn-sm");
    },
    "5.Click div": function() {
        act.click(".form-group.row.to-recipients");
    }
};


"@fixture Apollo V2 Create";
"@page https://csr.devapolloassessment.adc.uk.com/admin/Login?ReturnUrl=%2Fadmin%2F";





"@test"["Create - Basic - AA - STD"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Click input "Project name"': function() {
        act.click("#Name");
    },
    '8.Type in input "Project name"': function() {
        act.type("#Name", "Auto - Basic - AA - STD" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '9.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '10.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '12.Click option "Administrative..."': function() {
        act.click(":containsExcludeChildren(Administrative Assistant Administrative Officer)");
    },
    '13.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '14.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '15.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '16.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '17.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '18.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '19.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '20.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '21.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '22.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    },
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - EO - STD" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '9.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Executive Officer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Executive Officer)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - SEHE - STD"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - SEHE - STD"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '9.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Senior Executive..."': function() {
        act.click(":containsExcludeChildren(Senior Executive Officer Higher Executive Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - Grade7 - STD"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - ");
    },
    '8.Type in input "Project name"': function() {
        act.type("#Name", "Basic - Grade7 - STD"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '9.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '10.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '12.Click option "Grade 7"': function() {
        act.click(":containsExcludeChildren(Grade 7)");
    },
    '13.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '14.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '15.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '16.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '17.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '18.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '19.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '20.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '21.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '22.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - AA - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - AA - Mix" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '9.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Administrative..."': function() {
        act.click(":containsExcludeChildren(Administrative Assistant Administrative Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Competency specific version)");
    },
    '14.Click check box "Seeing the big..."': function() {
        act.click("#comp_SeeingTheBigPicture");
    },
    '15.Click check box "Leading and..."': function() {
        act.click("#comp_LeadingAndCommunicating");
    },
    '16.Click check box "Achieving..."': function() {
        act.click("#comp_AchievingCommercialOutcomes");
    },
    '17.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '18.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '19.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '20.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '22.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '23.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '24.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - EO - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - EO - Mix" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '9.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Executive Officer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Executive Officer)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Competency specific version)");
    },
    '14.Click check box "Changing and..."': function() {
        act.click("#comp_ChangingAndImproving");
    },
    '15.Click check box "Collaborating and..."': function() {
        act.click("#comp_CollaboratingAndPartnering");
    },
    '16.Click check box "Delivering value..."': function() {
        act.click("#comp_DeliveringValueForMoney");
    },
    '17.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '18.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '19.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '20.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '22.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '23.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '24.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - SEHE - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Click input "Project name"': function() {
        act.click("#Name");
    },
    '8.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - SEHE - Mix" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '9.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '10.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '12.Click option "Senior Executive..."': function() {
        act.click(":containsExcludeChildren(Senior Executive Officer Higher Executive Officer)");
    },
    '13.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '14.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Competency specific version)");
    },
    '15.Click check box "Making effective..."': function() {
        act.click("#comp_MakingEffectiveDecisions");
    },
    '16.Click check box "Building..."': function() {
        act.click("#comp_BuildingCapabilityForAll");
    },
    '17.Click check box "Managing a quality..."': function() {
        act.click("#comp_ManagingAQualityService");
    },
    '18.Click check box "Delivering at pace"': function() {
        act.click("#comp_DeliveringAtPace");
    },
    '19.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '20.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '21.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '22.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '23.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '24.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '25.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '26.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - Basic - Grade7 - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@ad");
    },
    '2.Type in input "User name"': function() {
        act.type("#Username", "c.uk.com");
    },
    '3.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '4.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '5.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '6.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '7.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '8.Type in input "Project name"': function() {
        act.type("#Name", "Create - Basic - Grade7 - Mix" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '9.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '10.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests)").eq(0);
        };
        act.click(actionTarget);
    },
    '11.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '12.Click option "Grade 7"': function() {
        act.click(":containsExcludeChildren(Grade 7)");
    },
    '13.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '14.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Competency specific version)");
    },
    '15.Click check box "Seeing the big..."': function() {
        act.click("#comp_SeeingTheBigPicture");
    },
    '16.Click check box "Collaborating and..."': function() {
        act.click("#comp_CollaboratingAndPartnering");
    },
    '17.Click check box "Managing a quality..."': function() {
        act.click("#comp_ManagingAQualityService");
    },
    '18.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '19.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '20.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '21.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '22.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '23.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '24.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '25.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - New - AA - STD - Plus Running"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - AA - STD" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Administrative..."': function() {
        act.click(":containsExcludeChildren(Administrative Assistant Administrative Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
},
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    '1.Click submit button "Continue"': function() {
        act.click(".button");
    },
       '1.Click submit button "Continue"': function() {
        act.click(".button");

    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "48.Click submit button": function() {
        act.click("#complete");
    },
    "49.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    "51.Click submit button": function() {
        act.click("#next");
    },
    "52.Click submit button": function() {
        act.click("#next");
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '55.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '56.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    "58.Click submit button": function() {
        act.click("#next");
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '61.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '62.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "63.Click submit button": function() {
        act.click("#next");
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "68.Click submit button": function() {
        act.click("#next");
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '71.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "73.Click submit button": function() {
        act.click("#next");
    },
    "74.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "75.Click submit button": function() {
        act.click("#next");
    },
    "76.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '81.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    "83.Click submit button": function() {
        act.click("#next");
    },
    '84.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '86.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '87.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '90.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '91.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
       "93.Click submit button": function() {
        act.click("#next");
    },
          "93.Click submit button": function() {
        act.click("#next");
    },

    '124.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '125.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '126.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '127.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "128.Click submit button": function() {
        act.click("#next");
        },
    "128.Click submit button": function() {
        act.click("#next");
    },
    '129.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '130.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '131.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "133.Click submit button": function() {
        act.click("#next");
    },
    '134.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '135.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '136.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '137.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "145.Click submit button": function() {
        act.click("#complete");
    }
};

"@test"["Create - New - EO - STD - Plus Running"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - EO - STD" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Executive Officer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Executive Officer)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)")
    },
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    '1.Click submit button "Continue"': function() {
        act.click(".button");
    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "48.Click submit button": function() {
        act.click("#complete");
    },
    "49.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    "51.Click submit button": function() {
        act.click("#next");
    },
    "52.Click submit button": function() {
        act.click("#next");
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '55.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '56.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    "58.Click submit button": function() {
        act.click("#next");
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '61.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '62.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "63.Click submit button": function() {
        act.click("#next");
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "68.Click submit button": function() {
        act.click("#next");
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '71.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "73.Click submit button": function() {
        act.click("#next");
    },
    "74.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "75.Click submit button": function() {
        act.click("#next");
    },
    "76.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '81.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    "83.Click submit button": function() {
        act.click("#next");
    },
    '84.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '86.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '87.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '90.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '91.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    }, 
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },  
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    '94.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '95.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '96.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '97.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "98.Click submit button": function() {
        act.click("#next");
    },
    '99.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '100.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '101.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '102.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "103.Click submit button": function() {
        act.click("#next");
    },
    '104.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '105.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '106.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '107.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "108.Click submit button": function() {
        act.click("#next");
    },
    '109.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '110.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '111.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '112.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "113.Click submit button": function() {
        act.click("#next");
    },
    '114.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '115.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '116.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '117.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "118.Click submit button": function() {
        act.click("#next");
    },
    '119.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '120.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '121.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '122.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "123.Click submit button": function() {
        act.click("#next");
    },
    '124.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '125.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '126.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '127.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "128.Click submit button": function() {
        act.click("#next");
    },
    '129.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '130.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '131.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "133.Click submit button": function() {
        act.click("#next");
    },
    '134.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '135.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '136.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '137.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "145.Click submit button": function() {
        act.click("#complete");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    }
};

"@test"["Create - New - SEHE - STD - Plus Running"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - SEHE - STD"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Senior Executive..."': function() {
        act.click(":containsExcludeChildren(Senior Executive Officer Higher Executive Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    },
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
   '1.Click submit button "Continue"': function() {
        act.click(".button");

    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Click submit button": function() {
        act.click("#complete");
    },
    "48.Click submit button": function() {
        act.click("#next");
    },
    "49.Click submit button": function() {
        act.click("#next");
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    '51.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '52.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "55.Click submit button": function() {
        act.click("#next");
    },
    "56.Click submit button": function() {
        act.click("#next");
    },
    '57.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '58.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "61.Click submit button": function() {
        act.click("#next");
    },
    '62.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '63.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "66.Click submit button": function() {
        act.click("#next");
    },
    '67.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '68.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "71.Click submit button": function() {
        act.click("#next");
    },
    '72.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '73.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '74.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '75.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "76.Click submit button": function() {
        act.click("#next");
    },
    '77.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "81.Click submit button": function() {
        act.click("#next");
    },
    '82.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '83.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '84.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "86.Click submit button": function() {
        act.click("#next");
    },
    "87.Click submit button": function() {
        act.click("#next");
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '90.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '91.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '92.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    '95.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '96.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '98.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "99.Click submit button": function() {
        act.click("#next");
    },
    '100.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '101.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '102.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '103.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "104.Click submit button": function() {
        act.click("#next");
    },
    '105.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '106.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '107.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '108.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "109.Click submit button": function() {
        act.click("#next");
    },
    '110.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '111.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '112.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '113.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "114.Click submit button": function() {
        act.click("#next");
    },
    '115.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '116.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '117.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '118.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "119.Click submit button": function() {
        act.click("#next");
    },
    '120.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '121.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '122.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '123.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "124.Click submit button": function() {
        act.click("#next");
    },
    '125.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '126.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '127.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '128.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "129.Click submit button": function() {
        act.click("#next");
    },
    '130.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '131.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '132.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '133.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "134.Click submit button": function() {
        act.click("#next");
    },
    '135.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '136.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '137.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '138.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "139.Click submit button": function() {
        act.click("#next");
    },
    '140.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '141.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '142.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '143.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "144.Click submit button": function() {
        act.click("#next");
    },
    '145.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '146.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '147.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '148.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "149.Click submit button": function() {
        act.click("#next");
    },
    '150.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '151.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '152.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '153.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "154.Click submit button": function() {
        act.click("#next");
    }
};



"@test"["Create - New - Grade7 - STD - Plus Running"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - Grade7 - STD"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Grade 7"': function() {
        act.click(":containsExcludeChildren(Grade 7)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    },
     '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
     },   
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
},
    '1.Click submit button "Continue"': function() {
        act.click(".button");
    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Somewhat Agree"': function() {
        act.click(":containsExcludeChildren(Somewhat Agree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "48.Click submit button": function() {
        act.click("#complete");
    },
    "49.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    "51.Click submit button": function() {
        act.click("#next");
    },
    "52.Click submit button": function() {
        act.click("#next");
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '55.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '56.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    "58.Click submit button": function() {
        act.click("#next");
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '61.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '62.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "63.Click submit button": function() {
        act.click("#next");
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '66.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '67.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "68.Click submit button": function() {
        act.click("#next");
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '71.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '72.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "73.Click submit button": function() {
        act.click("#next");
    },
    "74.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "75.Click submit button": function() {
        act.click("#next");
    },
    "76.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '81.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    "83.Click submit button": function() {
        act.click("#next");
    },
    '84.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '86.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '87.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '90.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '91.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '92.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);

    },
    "103.Click submit button": function() {
        act.click("#next");
   },
    "123.Click submit button": function() {
        act.click("#next");
    },
    "128.Click submit button": function() {
        act.click("#next");
    },
    '129.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '130.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '131.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '132.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "133.Click submit button": function() {
        act.click("#next");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    '134.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '135.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '136.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '137.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
        },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },   
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    }, 
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },   
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },   
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },   
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "138.Click submit button": function() {
        act.click("#next");
    },
    '139.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '140.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '141.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '142.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "143.Click submit button": function() {
        act.click("#next");
    },
    "145.Click submit button": function() {
        act.click("#complete");
    },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    }
};
"@test"["Create - New - AA - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - AA - Mix"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Administrative..."': function() {
        act.click(":containsExcludeChildren(Administrative Assistant Administrative Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Specific behaviours)");
    },
    '14.Click check box "Developing Self..."': function() {
        act.click("#beh_DevelopingSelfAndOthers");
    },
    '15.Click check box "Changing and..."': function() {
        act.click("#beh_ChangingAndImproving");
    },
    '16.Click check box "Working Together"': function() {
        act.click("#beh_WorkingWithOthers");
    },
    '17.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '18.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '19.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '20.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '22.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '23.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '24.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - New - EO - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - EO - Mix"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Executive Officer"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Executive Officer)").eq(0);
        };
        act.click(actionTarget);
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Specific behaviours)");
    },
    '14.Click check box "Leadership"': function() {
        act.click("#beh_Leadership");
    },
    '15.Click check box "Working Together"': function() {
        act.click("#beh_WorkingWithOthers");
    },
    '16.Click check box "Communicating and..."': function() {
        act.click("#beh_CommunicatingAndInfluencing");
    },
    '17.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '18.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '19.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '20.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '22.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '23.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '24.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - New - SEHE - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - SEHE - Mix"+ Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Senior Executive..."': function() {
        act.click(":containsExcludeChildren(Senior Executive Officer Higher Executive Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Specific behaviours)");
    },
    '14.Click check box "Changing and..."': function() {
        act.click("#beh_ChangingAndImproving");
    },
    '15.Click check box "Making effective..."': function() {
        act.click("#beh_MakingEffectiveDecisions");
    },
    '16.Click check box "Communicating and..."': function() {
        act.click("#beh_CommunicatingAndInfluencing");
    },
    '17.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '18.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '19.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '20.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '21.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '22.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '23.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '24.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    }
};

"@test"["Create - New - Grade7 - Mix"] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '7.Type in input "Project name"': function() {
        act.type("#Name", "Create - New - Grade7 - mix "+ Math.floor(Math.random() * (100000 - 1)) + 1);

    },
    '11.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '8.Click option "Civil Service SJT..."': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours)").eq(0);
        };
        act.click(actionTarget);
    },
    '13.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '14.Click option "Grade 7"': function() {
        act.click(":containsExcludeChildren(Grade 7)");
    },
    '15.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '16.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Specific behaviours)");
    },
    "17.Click div": function() {
        act.click("#create-project");
    },
    '18.Click check box "Working Together"': function() {
        act.click("#beh_WorkingWithOthers");
    },
    '19.Click check box "Seeing the big..."': function() {
        act.click("#beh_SeeingTheBigPicture");
    },
    '20.Click check box "Making effective..."': function() {
        act.click("#beh_MakingEffectiveDecisions");
    },
    '21.Click check box "Changing and..."': function() {
        act.click("#beh_ChangingAndImproving");
    },
    '22.Click check box "Developing Self..."': function() {
        act.click("#beh_DevelopingSelfAndOthers");
    },
    '23.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '24.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '25.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '26.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '27.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '28.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '29.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '30.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    },
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    "144.Wait 1000 milliseconds": function() {
        act.wait(1e3);
    },
   '1.Click submit button "Continue"': function() {
        act.click(".button");

    },
    "2.Click submit button": function() {
        act.click("#complete");
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click label "Neither Agree nor..."': function() {
        act.click(":containsExcludeChildren(Neither Agree nor Disagree)");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Click submit button": function() {
        act.click("#complete");
    },
    "48.Click submit button": function() {
        act.click("#next");
    },
    "49.Click submit button": function() {
        act.click("#next");
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    '51.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '52.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '53.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '54.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "55.Click submit button": function() {
        act.click("#next");
    },
    "56.Click submit button": function() {
        act.click("#next");
    },
    '57.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '58.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '59.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '60.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "61.Click submit button": function() {
        act.click("#next");
    },
    '62.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '63.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '64.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '65.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "66.Click submit button": function() {
        act.click("#next");
    },
    '67.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '68.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '69.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '70.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "71.Click submit button": function() {
        act.click("#next");
    },
    '72.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '73.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '74.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '75.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "76.Click submit button": function() {
        act.click("#next");
    },
    '77.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '78.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '79.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '80.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "81.Click submit button": function() {
        act.click("#next");
    },
    '82.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '83.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '84.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '85.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "86.Click submit button": function() {
        act.click("#next");
    },
    "87.Click submit button": function() {
        act.click("#next");
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    '89.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '90.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '91.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '92.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "93.Click submit button": function() {
        act.click("#next");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    '95.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '96.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '97.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '98.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "99.Click submit button": function() {
        act.click("#next");
    },
    '100.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '101.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '102.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '103.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "104.Click submit button": function() {
        act.click("#next");
    },
    '105.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '106.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '107.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '108.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "109.Click submit button": function() {
        act.click("#next");
    },
    '110.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '111.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '112.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '113.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "114.Click submit button": function() {
        act.click("#next");
    },
    '115.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '116.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '117.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '118.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "119.Click submit button": function() {
        act.click("#next");
    },
    '120.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '121.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '122.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '123.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "124.Click submit button": function() {
        act.click("#next");
    },
    '125.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '126.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '127.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '128.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "129.Click submit button": function() {
        act.click("#next");
    },
    '130.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '131.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '132.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '133.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "134.Click submit button": function() {
        act.click("#next");
    },
    '135.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(1);
        };
        act.click(actionTarget);
    },
    '136.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(2);
        };
        act.click(actionTarget);
    },
    '137.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '138.Click label "Fairly Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Fairly Effective)").eq(4);
        };
        act.click(actionTarget);
    },
    "139.Click submit button": function() {
        act.click("#next");
    },
    '140.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(1);
        };
        act.click(actionTarget);
    },
    '141.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(2);
        };
        act.click(actionTarget);
    },
    '142.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(3);
        };
        act.click(actionTarget);
    },
    '143.Click label "Ineffective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Ineffective)").eq(4);
        };
        act.click(actionTarget);
    },
    "144.Click submit button": function() {
        act.click("#next");
    },
    '145.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(3);
        };
        act.click(actionTarget);
    },
    '146.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(5);
        };
        act.click(actionTarget);
    },
    '147.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(7);
        };
        act.click(actionTarget);
    },
    '148.Click label "Effective"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Effective)").eq(9);
        };
        act.click(actionTarget);
    },
    "149.Click submit button": function() {
        act.click("#next");
    },
    '150.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(1);
        };
        act.click(actionTarget);
    },
    '151.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(2);
        };
        act.click(actionTarget);
    },
    '152.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(3);
        };
        act.click(actionTarget);
    },
    '153.Click label "Counterproductive"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Counterproductive)").eq(4);
        };
        act.click(actionTarget);
    },
    "154.Click submit button": function() {
        act.click("#next");
    }
};

"@test"["Create - V2 - AA - STD "] = {
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click link "Create Project"': function() {
        var actionTarget = function() {
            return $(":containsExcludeChildren(Create Project)").eq(0);
        };
        act.click(actionTarget);
    },
    '5.Click select "ClientId"': function() {
        act.click("#ClientId");
    },
    '6.Click option "Civil Service..."': function() {
        var actionTarget = function() {
            return $("#ClientId").find(":containsExcludeChildren(Civil Service Recruitment)");
        };
        act.click(actionTarget);
    },
    '8.Type in input "Project name"': function() {
        act.type("#Name", "Auto - Basic - AA - STD V2" + Math.floor(Math.random() * (100000 - 1)) + 1);
    },
    '8.Click select "WorkflowId"': function() {
        act.click("#WorkflowId");
    },
    '9.Click option "Civil Service SJT..."': function() {
        act.click(":containsExcludeChildren(Civil Service SJT and Psychometric tests Success Profile Behaviours BSL)");
    },
    '10.Click select "Grade"': function() {
        act.click("#Grade");
    },
    '11.Click option "Administrative..."': function() {
        act.click(":containsExcludeChildren(Administrative Assistant Administrative Officer)");
    },
    '12.Click select "AssessmentType"': function() {
        act.click("#AssessmentType");
    },
    '13.Click option "Civil Service..."': function() {
        act.click(":containsExcludeChildren(Civil Service Judgement Test Standard version)");
    },
    '14.Click submit button "Submit"': function() {
        act.click("#submit");
    },
    '15.Click link "Upload Participants"': function() {
        act.click(":containsExcludeChildren(Upload Participants)");
    },
    '16.Click file button "Select file to..."': function() {
        act.click("#Upload");
    },
    '17.Upload "Apollov2.csv" file': function() {
        act.upload("#Upload", "./uploads/Apollov2.csv");
    },
    '18.Click submit button "Upload File"': function() {
        act.click(":containsExcludeChildren(Upload File)");
    },
    '19.Click link "Upload new entries"': function() {
        act.click(":containsExcludeChildren(Upload new entries)");
    },
    '20.Click link "Back"': function() {
        act.click(":containsExcludeChildren(Back)");
    },
    '21.Click link "Log Out"': function() {
        act.click(":containsExcludeChildren(Log Out)");
    },
    '1.Type in input "User name"': function() {
        act.type("#Username", "admin@adc.uk.com");
    },
    '2.Type in password input "Password"': function() {
        act.type("#Password", "D3ads3tone");
    },
    '3.Click submit button "Submit"': function() {
        act.click("#btnLoginSubmit");
    },
    '4.Click submit button "Manage"': function() {
        act.click("body > main:nth(0) > div:nth(1) > div:nth(0) > div:nth(0) > form:nth(1) > table:nth(0) > tbody:nth(0) > tr:nth(1) > td:nth(9) > button:nth(0)");
    },
        '6. Visit first candidate link': function() {
        var link = $("#projects-list >tbody > tr:first td:nth(2) > span")[0].textContent;
        act.navigateTo(link);
        },
    '1.Click submit button "Continue"': function() {
        act.click(".govuk-button.main-button");
    },
    "2.Drag submit button": function() {
        act.drag("#complete", 10, 21, {
            offsetX: 53,
            offsetY: 11
        });
    },
    "3.Click submit button": function() {
        act.click("#next");
    },
    '4.Click radio button "Completely Agree"': function() {
        act.click("#EXAMPLE_QUESTION-COMP_AGR");
    },
    "5.Click submit button": function() {
        act.click("#next");
    },
    "6.Click submit button": function() {
        act.click("#next");
    },
    '7.Click radio button "Completely Agree"': function() {
        act.click("#A1_04-COMP_AGR");
    },
    "8.Click submit button": function() {
        act.click("#next");
    },
    '9.Click radio button "Completely Agree"': function() {
        act.click("#A2_01-COMP_AGR");
    },
    "10.Click submit button": function() {
        act.click("#next");
    },
    '11.Click radio button "Completely Agree"': function() {
        act.click("#A2_02-COMP_AGR");
    },
    "12.Click submit button": function() {
        act.click("#next");
    },
    '13.Click radio button "Completely Agree"': function() {
        act.click("#A4_01-COMP_AGR");
    },
    "14.Click submit button": function() {
        act.click("#next");
    },
    '15.Click radio button "Completely Agree"': function() {
        act.click("#A4_06-COMP_AGR");
    },
    "16.Click submit button": function() {
        act.click("#next");
    },
    '17.Click radio button "Completely Agree"': function() {
        act.click("#A4_09_R-COMP_AGR");
    },
    "18.Click submit button": function() {
        act.click("#next");
    },
    '19.Click radio button "Completely Agree"': function() {
        act.click("#A3_10_R-COMP_AGR");
    },
    "20.Click submit button": function() {
        act.click("#next");
    },
    '21.Click radio button "Completely Agree"': function() {
        act.click("#A1_06-COMP_AGR");
    },
    "22.Click submit button": function() {
        act.click("#next");
    },
    '23.Click radio button "Completely Agree"': function() {
        act.click("#A1_10_R-COMP_AGR");
    },
    "24.Click submit button": function() {
        act.click("#next");
    },
    '25.Click radio button "Completely Agree"': function() {
        act.click("#A3_04-COMP_AGR");
    },
    "26.Click submit button": function() {
        act.click("#next");
    },
    '27.Click radio button "Completely Agree"': function() {
        act.click("#E4_04-COMP_AGR");
    },
    "28.Click submit button": function() {
        act.click("#next");
    },
    '29.Click radio button "Completely Agree"': function() {
        act.click("#E3_08_R-COMP_AGR");
    },
    "30.Click submit button": function() {
        act.click("#next");
    },
    '31.Click radio button "Completely Agree"': function() {
        act.click("#E4_06_R-COMP_AGR");
    },
    "32.Click submit button": function() {
        act.click("#next");
    },
    '33.Click radio button "Completely Agree"': function() {
        act.click("#E1_02-COMP_AGR");
    },
    "34.Click submit button": function() {
        act.click("#next");
    },
    '35.Click radio button "Completely Agree"': function() {
        act.click("#E1_05-COMP_AGR");
    },
    "36.Click submit button": function() {
        act.click("#next");
    },
    '37.Click radio button "Completely Agree"': function() {
        act.click("#E2_01-COMP_AGR");
    },
    "38.Click submit button": function() {
        act.click("#next");
    },
    '39.Click radio button "Completely Agree"': function() {
        act.click("#E2_04-COMP_AGR");
    },
    "40.Click submit button": function() {
        act.click("#next");
    },
    '41.Click radio button "Completely Agree"': function() {
        act.click("#E2_08_R-COMP_AGR");
    },
    "42.Click submit button": function() {
        act.click("#next");
    },
    '43.Click radio button "Completely Agree"': function() {
        act.click("#E3_06-COMP_AGR");
    },
    "44.Click submit button": function() {
        act.click("#next");
    },
    '45.Click radio button "Completely Agree"': function() {
        act.click("#E3_07-COMP_AGR");
    },
    "46.Click submit button": function() {
        act.click("#next");
    },
    "47.Click submit button": function() {
        act.click("#complete");
    },
    "48.Click submit button": function() {
        act.click("#next");
    },
    "49.Click submit button": function() {
        act.click("#next");
    },
    "50.Click submit button": function() {
        act.click("#next");
    },
    '52.Click radio button "Ineffective"': function() {
        act.click("#EXAMPLE_VIDEO_1-02_INEFF");
    },
    '53.Click radio button "Ineffective"': function() {
        act.click("#EXAMPLE_VIDEO_2-02_INEFF");
    },
    '54.Click radio button "Fairly Effective"': function() {
        act.click("#EXAMPLE_VIDEO_3-03_FLYEF");
    },
    '55.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_VIDEO_4-04_EFCTV");
    },
    "56.Click submit button": function() {
        act.click("#next");
    },
    "57.Click submit button": function() {
        act.click("#next");
    },
    '58.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A1-04_EFCTV");
    },
    '59.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A2-04_EFCTV");
    },
    '60.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A3-04_EFCTV");
    },
    '61.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_01_A4-04_EFCTV");
    },
    "62.Click submit button": function() {
        act.click("#next");
  },
    '68.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_COMINF_02_A1-03_FLYEF");
    },
    '64.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_02_A2-04_EFCTV");
    },
    '65.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_COMINF_02_A3-02_INEFF");
    },
    '66.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_02_A4-04_EFCTV");
    },
    "67.Click submit button": function() {
        act.click("#next");
    },
    '68.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A1-03_FLYEF");
    },
    '69.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A2-04_EFCTV");
    },
    '70.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_COMINF_03_A3-02_INEFF");
    },
    '71.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_COMINF_03_A4-01_CPROD");
    },
    "72.Click submit button": function() {
        act.click("#next");
    },
    '68.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A1-03_FLYEF");
    },
    '69.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A2-04_EFCTV");
    },
    '70.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_COMINF_04_A3-02_INEFF");
    },
    '71.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_COMINF_04_A4-01_CPROD");
    },
    "72.Click submit button": function() {
        act.click("#next");
    },
    '73.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_WWO_01_A1-02_INEFF");
    },
    '74.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_WWO_01_A2-03_FLYEF");
    },
    '75.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_WWO_01_A4-01_CPROD");
    },
    '76.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_WWO_01_A3-03_FLYEF");
    },
    "77.Click submit button": function() {
        act.click("#next");
    },
    '78.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A1-04_EFCTV");
    },
    '79.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A2-04_EFCTV");
    },
    '80.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_WWO_03_A3-02_INEFF");
    },
    '81.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_03_A4-04_EFCTV");
    },
    "82.Click submit button": function() {
        act.click("#next");
    },
    '83.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A1-04_EFCTV");
    },
    '84.Click radio button "Counterproductive"': function() {
        act.click("#AAAO_Beh_WWO_04_A2-01_CPROD");
    },
    '85.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A3-04_EFCTV");
    },
    '86.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_WWO_04_A4-04_EFCTV");
    },
    "87.Click submit button": function() {
        act.click("#next");
    },
    "88.Click submit button": function() {
        act.click("#next");
    },
    "89.Click submit button": function() {
        act.click("#next");
    },
    '90.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_1-04_EFCTV");
    },
    '91.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_2-04_EFCTV");
    },
    '92.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_3-04_EFCTV");
    },
    '93.Click radio button "Effective"': function() {
        act.click("#EXAMPLE_TEXT_4-04_EFCTV");
    },
    "94.Click submit button": function() {
        act.click("#next");
    },
    "95.Click submit button": function() {
        act.click("#next");
    },
    '96.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A1-04_EFCTV");
    },
    '97.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A2-03_FLYEF");
    },
    '98.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_01_A3-04_EFCTV");
    },
    '99.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_CI_01_A4-02_INEFF");
    },
    "100.Click submit button": function() {
        act.click("#next");
    },
    '101.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A1-04_EFCTV");
    },
    '102.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A2-04_EFCTV");
    },
    '103.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A3-04_EFCTV");
    },
    '104.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_03_A4-03_FLYEF");
    },
    "105.Click submit button": function() {
        act.click("#next");
    },
    '106.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A1-04_EFCTV");
    },
    '107.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A2-04_EFCTV");
    },
    '108.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_CI_04_A3-02_INEFF");
    },
    '109.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_CI_04_A4-03_FLYEF");
    },
    "110.Click submit button": function() {
        act.click("#next");
    },
    '111.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A1-03_FLYEF");
    },
    '112.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A2-04_EFCTV");
    },
    '113.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A3-04_EFCTV");
    },
    '114.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_01_A4-04_EFCTV");
    },
    "115.Click submit button": function() {
        act.click("#next");
    },
    '116.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A1-04_EFCTV");
    },
    '117.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A2-03_FLYEF");
    },
    '118.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A3-04_EFCTV");
    },
    '119.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_03_A4-03_FLYEF");
    },
    "120.Click submit button": function() {
        act.click("#next");
    },
    '121.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A1-04_EFCTV");
    },
    '122.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A2-03_FLYEF");
    },
    '123.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A3-04_EFCTV");
    },
    '124.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MED_04_A4-04_EFCTV");
    },
    "125.Click submit button": function() {
        act.click("#next");
    },
    '126.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A1-04_EFCTV");
    },
    '127.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A2-03_FLYEF");
    },
    '128.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A3-04_EFCTV");
    },
    '129.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_01_A4-03_FLYEF");
    },
    "130.Click submit button": function() {
        act.click("#next");
    },
    '131.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_MQS_03_A1-02_INEFF");
    },
    '132.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_03_A2-04_EFCTV");
    },
    '133.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_MQS_03_A3-02_INEFF");
    },
    '134.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_03_A4-04_EFCTV");
    },
    "135.Click submit button": function() {
        act.click("#next");
    },
    '136.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A1-04_EFCTV");
    },
    '137.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A2-03_FLYEF");
    },
    '138.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A3-03_FLYEF");
    },
    '139.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_MQS_08_A4-04_EFCTV");
    },
    "140.Click submit button": function() {
        act.click("#next");
    },
    '141.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A1-04_EFCTV");
    },
    '142.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A2-03_FLYEF");
    },
    '143.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A3-04_EFCTV");
    },
    '144.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_01_A4-03_FLYEF");
    },
    "145.Click submit button": function() {
        act.click("#next");
    },
    '146.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A1-04_EFCTV");
    },
    '147.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A2-03_FLYEF");
    },
    '148.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_03_A3-04_EFCTV");
    },
    '149.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_DAP_03_A4-02_INEFF");
    },
    "150.Click submit button": function() {
        act.click("#next");
    },
    '151.Click radio button "Fairly Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A1-03_FLYEF");
    },
    '152.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A2-04_EFCTV");
    },
    '153.Click radio button "Ineffective"': function() {
        act.click("#AAAO_Beh_DAP_08_A3-02_INEFF");
    },
    '154.Click radio button "Effective"': function() {
        act.click("#AAAO_Beh_DAP_08_A4-04_EFCTV");
    },
    "155.Click submit button": function() {
        act.click("#next");
    },
    "156.Click submit button": function() {
        act.click("#complete");
    }
};


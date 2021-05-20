const task2 = async () => {
    const getJobs = await fetch('./data/json/jobs.json');
    const getReactions = await fetch('./data/json/reactions.json');
    const allJobsJSON = await getJobs.json();
    const allReactionsJSON = await getReactions.json();
    const uniqueCompanyIds = [];
    const uniqueUserIds = [];

    //Get all liked jobs
    const allLikedJobs = allReactionsJSON.filter((item) => {
        return item.direction === "true";
    });

    //Get all companies
    const allCompanies = allJobsJSON.filter((item) => {
        return item.company_id
    });

    const compareCompanyId = (item) => {
        return item.company_id === allCompanies[i].company_id;
    };

    // find all unique company IDs
    for (i = 0; i < allCompanies.length; i++) {
        if (!uniqueCompanyIds.find(compareCompanyId)) {
            allCompanies[i].similarity_score = 0;
            allCompanies[i].all_job_ids = [];
            uniqueCompanyIds.push(allCompanies[i]);
        }
    }

    const compareUserId = (item) => {
        return item.user_id === allLikedJobs[i].user_id;
    };

    // find all unique user IDs
    for (i = 0; i < allLikedJobs.length; i++) {
        if (!uniqueUserIds.find(compareUserId)) {
            allLikedJobs[i].likedJobs = [];
            uniqueUserIds.push(allLikedJobs[i]);
        }
    }



    console.log("Task2");
    console.log(uniqueUserIds);

}

task2()
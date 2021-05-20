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

    // Find all users liked jobs.
    // Add all of a users liked jobs to their
    // corresponding object, as an array
    for (i = 0; i < uniqueUserIds.length; i++) {
        let filtered = allLikedJobs.filter((item) => {
            return item.user_id === uniqueUserIds[i].user_id;
        });

        filtered.forEach((item) => {
            uniqueUserIds[i].likedJobs.push(item.job_id);
        });
        //Remove redundant data
        delete uniqueUserIds[i].job_id
        delete uniqueUserIds[i].direction
        delete uniqueUserIds[i].time
    }

    // Find all company_id specific job_ids and add to array
    for (i = 0; i < uniqueCompanyIds.length; i++) {
        let filtered = allJobsJSON.filter((item) => {
            return item.company_id === uniqueCompanyIds[i].company_id;
        });

        filtered.forEach((item) => {
            uniqueCompanyIds[i].all_job_ids.push(item.job_id);
        });
    }

    //Sort by highest job_id count
    uniqueCompanyIds.sort(function (a, b) {
        return b.all_job_ids.length - a.all_job_ids.length;
    });



    console.log("Task2");
    console.log(uniqueCompanyIds);

}

task2()
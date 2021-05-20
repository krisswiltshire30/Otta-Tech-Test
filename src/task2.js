const task2 = async () => {
    const getJobs = await fetch('./data/json/jobs.json');
    const getReactions = await fetch('./data/json/reactions.json');
    const allJobsJSON = await getJobs.json();
    const allReactionsJSON = await getReactions.json();
    const uniqueCompanyIds = [];


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


    console.log("Task2");
    console.log(uniqueCompanyIds);

}

task2()
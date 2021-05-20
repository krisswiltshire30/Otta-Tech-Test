const task2 = async () => {
    const getJobs = await fetch('./data/json/jobs.json');
    const getReactions = await fetch('./data/json/reactions.json');
    const allJobsJSON = await getJobs.json();
    const allReactionsJSON = await getReactions.json();

    //Get all companies
    const allCompanies = allJobsJSON.filter((item) => {
        return item.company_id
    });


    console.log("Task2");
    console.log(allCompanies);

}

task2()
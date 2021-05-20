const task2 = async () => {
    const getJobs = await fetch('./data/json/jobs.json');
    const getReactions = await fetch('./data/json/reactions.json');
    const allJobsJSON = await getJobs.json();
    const allReactionsJSON = await getReactions.json();

    console.log("Task2");
    console.log(allJobsJSON);
    console.log(allReactionsJSON);
}

task2()
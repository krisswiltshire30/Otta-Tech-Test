const task1 = async () => {
    const getAllReactions = await fetch("../data/json/reactions.json")
    const allReactionsJSON = await getAllReactions.json()

    // Get all elements with jobs that have been liked
    const allLikedJobs = allReactionsJSON.filter((item) => {
        return item.direction === "true";
    });

    console.log(allLikedJobs);
}

task1()
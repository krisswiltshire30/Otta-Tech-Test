const task1 = async () => {
    const getAllReactions = await fetch("../data/json/jobs.json")
    const allReactionsJSON = await getAllReactions.json()
    console.log(allReactionsJSON);
}

task1()
const task1 = async () => {
    const getAllReactions = await fetch("../data/json/reactions.json")
    const allReactionsJSON = await getAllReactions.json()

    console.log(allReactionsJSON);
}

task1()
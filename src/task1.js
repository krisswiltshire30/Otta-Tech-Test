const task1 = async () => {
    const uniqueUserIds = []
    const getAllReactions = await fetch("../data/json/reactions.json")
    const allReactionsJSON = await getAllReactions.json()

    // Get all elements with jobs that have been liked
    const allLikedJobs = allReactionsJSON.filter((item) => {
        return item.direction === "true";
    });

    const compareUserIds = (item) => {
        return item.user_id === allLikedJobs[i].user_id;
      };
    
      // Find all unique user_ids
      for (i = 0; i < allLikedJobs.length; i++) {
        if (!uniqueUserIds.find(compareUserIds)) {
          allLikedJobs[i].likedJobs = [];
          uniqueUserIds.push(allLikedJobs[i]);
        }
      }

    console.log(uniqueUserIds);
}

task1()
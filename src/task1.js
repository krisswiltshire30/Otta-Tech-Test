const task1 = async () => {
    const getAllReactions = await fetch("../data/json/reactions.json")
    const allReactionsJSON = await getAllReactions.json()
    const uniqueUserIds = []

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
    }

    // Sort users by highest count of liked jobs
    uniqueUserIds.sort(function (a, b) {
        return b.likedJobs.length - a.likedJobs.length;
    });

    // Compare 2 arrays and count the number of similarities
    const similarityHandler = (arrayA, arrayB) => {
        let matches = 0;
        for (i = 0; i < arrayA.length; i++) {
            if (arrayB.indexOf(arrayA[i]) != -1)
                matches++;
        }
        return matches;
    }


    console.log("should return 3"); 
    console.log(similarityHandler([1,2,3],[1,2,3])); 
    console.log("should return 3"); 
    console.log(similarityHandler([1,2,3,4,5,6],[1,2,3])); 
    console.log("should return 2"); 
    console.log(similarityHandler([1,2],[1,2,3])); 
    console.log("should return 0"); 
    console.log(similarityHandler([1,2,3],[4,5,6])); 




    console.log("Task1");
    console.log(uniqueUserIds);
}

task1()
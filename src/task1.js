const task1 = async () => {
    const getAllReactions = await fetch("../data/json/reactions.json");
    const allReactionsJSON = await getAllReactions.json();
    const uniqueUserIds = [];
    const similarityScores = [];

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
        return matches
    }

    // Iterate through uniqueUserIds
    // find similarity score by counting the matches within each likedJobs array
    // Store in similarityScores object
    for (let i = 1; i < uniqueUserIds.length; i++) {
        for (let j = 0; j < uniqueUserIds.length; j++) {
            if (uniqueUserIds[i].user_id === uniqueUserIds[j].user_id) {
                continue
            } else {
                let similarities = similarityHandler(uniqueUserIds[j].likedJobs, uniqueUserIds[i].likedJobs);
                similarityScores.push({
                    compared_uids: uniqueUserIds[j].user_id + " & " + uniqueUserIds[i].user_id,
                    similarity_score: similarities
                })
            }
        }
    }

    //Sort by highest similarity score
    similarityScores.sort(function (a, b) {
        return b.similarity_score - a.similarity_score;
    });

    console.log("Task1");
    console.log(similarityScores[0]);
}

task1()
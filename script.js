//Wait for the window to be fully loaded before executing the code
window.onload = function () {
  // DOM elements
  let select = document.getElementById("select");
  let inputfield = document.getElementById("inputfield");
  let selectText = document.getElementById("selectText");
  let arrow = document.querySelector(".arrow");
  let workoutList = document.querySelector(".workout-list ul");
  let workoutDropdown = document.getElementById("selectWorkout");

  //list of workouts
  let workouts = [
    "Barbell Bench Press",
    "Pull ups",
    "Hammer Curls",
    "Bend Over Barbell Rows",
    "Push ups",
    "Plank",
    "Overhead Dumbbell Press",
    "Leg Extension",
    "Dumbbell Bench Press",
    "Close Grip Bench Press",
    "Dumbbell Flyes",
    "Incline Dumbbell Bench Press",
    "Low Cable Cross Over",
    "Chest Dip",
    "Decline Dumbbell Flyes",
    "Incline Cable Chest Fly",
    "Decline Barbell Bench Press",
    "Wide Grip Bench Press",
    "Dumbbell Floor Press",
    "Weighted Pull Up",
    "Reverse-grip Bent Over Row",
    "One-arm Dumbbell Row",
    "Close-grip Lat Pull Down",
    "T-Bar Row",
    "Seated Cable Rows",
    "Incline Dumbbell Row",
    "V-Bar Pull Up",
    "Bent Over Two-Dumbbell Row",
    "Deadlift",
    "Single-Leg Press",
    "Barbell Squat",
    "Dumbbell Standing Calf Raises",
    "Stair Master",
    "Kettlebell Squat",
    "Forward Lunge",
    "Dumbbell Squat",
    "Leg Press",
    "Hex-Bar Deadlift",
    "Narrow Stance Hack Squat",
    "Seated Calf Raise",
    "Smith Machine Squat",
    "Seated Leg Curl",
    "Single-leg Leg Extension",
    "Prone Leg Curl",
    "Tricep Dip",
    "Cable V-Bar Push Down",
    "EZ-Bar Skullcrusher",
    "Push Ups - Close Tricep Position",
    "Single-arm Cable Tricep Extension",
    "Tricep Pushdown - Rope",
    "Overhead Tricep Extension",
    "Dumbbell Skullcrusher",
    "One-arm Tricep Extension",
    "Lying Dumbell Tricep Extension",
    "Two-Dumbbell Front to Lateral Raise",
    "Seated Dumbbell Shoulder Press",
    "Military Press",
    "Standing Dumbbell Shoulder Press",
    "Incline Hammer Curl",
    "EZ-Bar Curl",
    "Dumbbell Curl",
    "Concentration Curl",
    "Machine Preacher Curl",
    "Preacher Curl",
    "One-arm Cable Curl",
    "Russion Twist",
    "Sit Up with Weight",
    "Heel Touches",
    "Laying Leg Raises",
    "Hanging Leg Raises",
  ];
  //list of workouts and categories
  let categories = {
    "All Categories": workouts.sort(),
    Chest: [
      "Barbell Bench Press",
      "Dumbbell Bench Press",
      "Close Grip Bench Press",
      "Dumbbell Flyes",
      "Incline Dumbbell Bench Press",
      "Low Cable Cross Over",
      "Chest Dip",
      "Push Ups",
      "Decline Dumbbell Flyes",
      "Incline Cable Chest Fly",
      "Decline Barbell Bench Press",
      "Wide Grip Bench Press",
      "Dumbbell Floor Press",
    ],
    Back: [
      "Bend Over Barbell Rows",
      "Pull ups",
      "Reverse-grip Bent Over Row",
      "One-arm Dumbbell Row",
      "Close-grip Lat Pull Down",
      "T-Bar Row",
      "Seated Cable Rows",
      "Incline Dumbbell Row",
      "Bent Over Two-Dumbbell Row",
    ],
    Biceps: [
      "Hammer Curls",
      "Incline Hammer Curl",
      "EZ-Bar Curl",
      "Dumbbell Curl",
      "Concentration Curl",
      "Machine Preacher Curl",
      "Preacher Curl",
      "One-arm Cable Curl",
    ],
    Triceps: [
      "Skull Crushers",
      "Tricep Dip",
      "Cable V-Bar Push Down",
      "EZ-Bar Skullcrusher",
      "Push Ups - Close Tricep Position",
      "Single-arm Cable Tricep Extension",
      "Tricep Pushdown - Rope",
      "Overhead Tricep Extension",
      "Dumbbell Skullcrusher",
      "One-arm Tricep Extension",
      "Lying Dumbell Tricep Extension",
    ],
    Legs: [
      "Leg Extension",
      "Single-Leg Press",
      "Barbell Squat",
      "Dumbbell Standing Calf Raises",
      "Stair Master",
      "Kettlebell Squat",
      "Forward Lunge",
      "Dumbbell Squat",
      "Leg Press",
      "Hex-Bar Deadlift",
      "Narrow Stance Hack Squat",
      "Seated Calf Raise",
      "Smith Machine Squat",
      "Seated Leg Curl",
      "Single-leg Leg Extension",
      "Prone Leg Curl",
    ],
    Shoulders: [
      "Overhead Dumbbell Press",
      "Seated Dumbbell Shoulder Press",
      "Military Press",
      "Standing Dumbbell Shoulder Press",
      "Two-Dumbbell Front to Lateral Raise",
    ],
    Abs: [
      "Plank",
      "Sit Up with Weight",
      "Heel Touches",
      "Laying Leg Raises",
      "Hanging Leg Raises",
      "Russion Twist",
    ],
  };

  //initialize the workout list to be hidden
  workoutList.style.display = "none";

  //event listener for input field changes
  inputfield.addEventListener("input", function () {
    let category = selectText.textContent;
    let searchTerm = inputfield.value.toLowerCase();
    populateWorkoutList(category, searchTerm);
    // Show or hide the workout list based on search term
    if (searchTerm.trim() !== "") {
      workoutList.style.display = "block"; // Show the list when there is input
      workoutList.classList.add("open");
    } else {
      workoutList.style.display = "none"; // Hide the list when input is empty
      workoutList.classList.remove("open");
    }
  });

  // Populate the workout list based on selected category and search term
  function populateWorkoutList(category, searchTerm) {
    let workoutList = document.querySelector("#selectWorkout ul");
    workoutList.innerHTML = "";

    let categoryWorkouts = categories[category];
    if (categoryWorkouts) {
      let matchingWorkouts = categoryWorkouts.filter((workout) =>
        workout.toLowerCase().includes(searchTerm)
      );
      if (matchingWorkouts.length > 0) {
        matchingWorkouts.forEach((workout) => {
          let listItem = document.createElement("li");
          listItem.className = "workout-list-item";
          listItem.textContent = workout;
          workoutList.appendChild(listItem);
        });
      } else {
        // If there are no matching workouts, display a message
        let listItem = document.createElement("li");
        listItem.className = "workout-list-item";
        listItem.textContent = "No matching workouts found.";
        workoutList.appendChild(listItem);
      }
    }
  }

  // Event listener for category selection
  document.getElementById("list").addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("options")) {
      let category = target.textContent;
      document.getElementById("selectText").textContent = category;
      document.getElementById(
        "inputfield"
      ).placeholder = `Search in ${category}`;
      populateWorkoutList(category);
      document.getElementById("selectWorkout").classList.add("open");
    }
  });
  // Event listener for workout selection
  document
    .getElementById("selectWorkout")
    .addEventListener("click", function (event) {
      let target = event.target;
      if (target.classList.contains("workout-list-item")) {
        let workout = target.textContent;
        document.getElementById("workoutSelectText").textContent = workout;
        document.getElementById("selectWorkout").classList.remove("open");
      }
    });
  // Toggle workout dropdown visibility
  function toggleWorkoutDropdown() {
    workoutDropdown.classList.toggle("open");
  }
  // Event listener for dropdown click
  document
    .getElementById("select")
    .addEventListener("click", toggleWorkoutDropdown);
  // Event listener for categories dropdown
  list.addEventListener("click", handleCategoryClick);

  function populateCategories() {
    for (let category in categories) {
      let option = document.createElement("li");
      option.className = "options";
      option.textContent = category;
      list.appendChild(option);
      option.addEventListener("click", handleCategoryClick);
    }
  }

  // Function to handle category selection
  function handleCategoryClick(event) {
    let target = event.target;
    if (target.classList.contains("options")) {
      let category = target.textContent;
      selectText.innerHTML = category;
      inputfield.placeholder = "Search in " + category;
      populateItems(category);
      list.classList.remove("open");
      list.style.display = "none";
      arrow.innerHTML = "&#9660;";
    }
  }
  // Shows arrow when page is loaded
  arrow.innerHTML = "&#9660;";

  select.onclick = function () {
    list.classList.toggle("open");
    if (list.classList.contains("open")) {
      arrow.innerHTML = "&#9650;";
    } else {
      arrow.innerHTML = "&#9660;";
    }
  };
};
document.addEventListener("DOMContentLoaded", function () {
  const workoutOptions = document.querySelector(".workout-options");
  const workoutDropdown = document.querySelector(".workout-dropdown");
  const workoutDetails = document.querySelector(".workout-details");
  //function to populate workout options
  let youtubePlayer = null;

  function populateWorkoutOptions() {
    workoutOptionsContainer.innerHTML = ""; // Clear previous options

    // Iterate through your workout data and add options
    workouts.forEach((workout) => {
      let option = document.createElement("li");
      option.textContent = workout;
      workoutOptionsContainer.appendChild(option);
    });
  }
  // Event delegation to handle click on workout options
  workoutOptions.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const selectedWorkout = event.target.textContent;
      populateWorkoutDetails(selectedWorkout);
      workoutDropdown.style.display = "block";

      const videoUrl = workoutDescriptions[selectedWorkout].videoUrl;

      // If the YouTube player is not initialized or the video URL has changed, create a new player
      if (!youtubePlayer || youtubePlayer.getVideoUrl() !== videoUrl) {
        if (youtubePlayer) {
          youtubePlayer.destroy(); // Destroy the existing player
        }

        youtubePlayer = new YT.Player("videoPlayer", {
          height: "315",
          width: "560",
          videoId: videoUrl,
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
    }
  });
  //it supposed to close workout pop up when clicking outside of it, it does not
  document.addEventListener("click", function (event) {
    if (
      !workoutOptionsContainer.contains(event.target) &&
      !workoutDropdown.contains(event.target)
    ) {
      workoutDropdown.style.display = "none";
    }
  });

  let workoutDescriptions = {
    "Barbell Bench Press": {
      description: "Barbell Bench Press",
      videoUrl: "lWFknlOTbyM",
    },
    "Pull ups": {
      description: "Pull Ups",
      videoUrl: "eGo4IYlbE5g",
    },
    "Hammer Curls": {
      description: "Hammer Curls",
      videoUrl: "TwD-YGVP4Bk",
    },
    "Bend Over Barbell Rows": {
      description: "Bend Over Barbell Rows",
      videoUrl: "FWJR5Ve8bnQ",
    },
    "Push ups": {
      description: "Push ups",
      videoUrl: "IODxDxX7oi4",
    },
    Plank: {
      description: "Plank",
      videoUrl: "yeKv5oX_6GY",
    },
    "Overhead Dumbbell Press": {
      description: "Overhead Dumbbell Press",
      videoUrl: "qEwKCR5JCog",
    },
    "Leg Extension": {
      description: "Leg Extension",
      videoUrl: "m0FOpMEgero",
    },
    "Dumbbell Bench Press": {
      description: "Dumbbell Bench Press",
      videoUrl: "VmB1G1K7v94",
    },
    "Close Grip Bench Press": {
      description: "Close Grip Bench Press",
      videoUrl: "nEF0bv2FW94",
    },
    "Dumbbell Flyes": {
      description: "Dumbbell Flyes",
      videoUrl: "eozdVDA78K0",
    },
    "Incline Dumbbell Bench Press": {
      description: "Incline Dumbbell Bench Press",
      videoUrl: "8iPEnn-ltC8",
    },
    "Low Cable Cross Over": {
      description: "Low Cable Cross Over",
      videoUrl: "M1N804yWA-8",
    },
    "Chest Dip": {
      description: "Chest Dip",
      videoUrl: "dX_nSOOJIsE",
    },
    "Decline Dumbbell Fly": {
      description: "Decline Dumbbell Fly",
      videoUrl: "ilcbmIoz9S4",
    },
    "Incline Cable Chest Flyes": {
      description: "Incline Cable Chest Flyes",
      videoUrl: "GtHNC-5GtR0",
    },
    "Decline Barbell Bench Press": {
      description: "Decline Barbell Bench Press",
      videoUrl: "LfyQBUKR8SE",
    },
    "Wide Grip Bench Press": {
      description: "Wide Grip Bench Press",
      videoUrl: "jHoTF0kpkhQ",
    },
    "Dumbbell Floor Press": {
      description: "Dumbbell Floor Press",
      videoUrl: "uUGDRwge4F8",
    },
    "Weighted Pull Up": {
      description: "Weight Pull Up",
      videoUrl: "HuuyDNGrCI8",
    },
    "Reverse-grip Bent Over Row": {
      description: "Reverse-grip Bent Over Row",
      videoUrl: "3gdGSSgDby8",
    },
    "One-arm Dumbbell Row": {
      description: "One-arm Dumbbell Row",
      videoUrl: "dFzUjzfih7k",
    },
    "Close-grip Lat Pull Down": {
      description: "Close-grip Lat Pull Down",
      videoUrl: "8hzVLzu-RJk",
    },
    "T-Bar Row": {
      description: "T-Bar Row",
      videoUrl: "j3Igk5nyZE4",
    },
    "Seated Cable Rows": {
      description: "Seated Cable Rows",
      videoUrl: "GZbfZ033f74",
    },
    "Incline Dumbbell Row": {
      description: "Incline Dumbbell Row",
      videoUrl: "2LxN3_3atps",
    },
    "V-Bar Pull Up": {
      description: "V-Bar Pull Up",
      videoUrl: "nM_CZysw0tA",
    },
    "Bent Over Two-Dumbbell Row": {
      description: "Bent Over Two-Dumbbell Row",
      videoUrl: "5PoEksoJNaw",
    },
    Deadlift: {
      description: "Deadlift",
      videoUrl: "r4MzxtBKyNE",
    },
    "Single-Leg Press": {
      description: "Single-Leg Press",
      videoUrl: "xT5-HS6e9O4",
    },
    "Barbell Squat": {
      description: "Barbell Squat",
      videoUrl: "rrJIyZGlK8c",
    },
    "Dumbell Standing Calf Raises": {
      description: "Dumbell Standing Calf Raises",
      videoUrl: "ADIDoYt_ko4",
    },
    "Stair Master": {
      description: "Stair Master",
      videoUrl: "xSB39wbMz4w",
    },
    "Kettlebell Squat": {
      description: "Kettlebell Squat",
      videoUrl: "IGpHeghDUw8",
    },
    "Forward Lunge": {
      description: "Forward Lunge",
      videoUrl: "QE_hU8XX48I",
    },
    "Dumbbell Squat": {
      description: "Dumbbell Squat",
      videoUrl: "RJSltCUcCqE",
    },
    "Leg Press": {
      description: "Leg Press",
      videoUrl: "IZxyjW7MPJQ",
    },
    "Hex-Bar Deadlift": {
      description: "Hex-Bar Deadlift",
      videoUrl: "1jC_nqcSCp8",
    },
    "Narrow Stance Hack Squat": {
      description: "Narrow Stance Hack Squat",
      videoUrl: "ocifZWJIYVg",
    },
    "Seated Calf Raise": {
      description: "Seated Calf Raise",
      videoUrl: "JbyjNymZOt0",
    },
    "Smith Machine Squat": {
      description: "Smith Machine Squat",
      videoUrl: "qPWXdq7idrI",
    },
    "Seated Leg Curl": {
      description: "Seated Leg Curl",
      videoUrl: "oFxEDkppbSQ",
    },
    "Single-leg Leg Extension": {
      description: "Single-leg Leg Extension",
      videoUrl: "I1F58vIjbvc",
    },
    "Prone Leg Curl": {
      description: "Prone Leg Curl",
      videoUrl: "1Tq3QdYUuHs",
    },
    "Tricep Dip": {
      description: "Tricep Dip",
      videoUrl: "6kALZikXxLc",
    },
    "Cable V-Bar Push Down": {
      description: "Cable V-bar Push Down",
      videoUrl: "2-LAMcpzODU",
    },
    "EZ-Bar Skullcrusher": {
      description: "EZ-Bar Skullcrusher",
      videoUrl: "jR7Y5YcugYc",
    },
    "Tricep Pushdown - Rope": {
      description: "Triccep Pushdown - Rope",
      videoUrl: "vB5OHsJ3EME",
    },
    "Overhead Tricep Extension": {
      description: "Overhead Tricep Extension",
      videoUrl: "HADoxgsslvw",
    },
    "Dumbbell Skullcrushers": {
      description: "Dumbbell Skullcrushers",
      videoUrl: "ir5PsbniVSc",
    },
    "One-arm Tricep Extension": {
      description: "One-arm Tricep Extension",
      videoUrl: "2jl4M0Dnq4c",
    },
    "Lying Dumbell Tricep Extension": {
      description: "Lying Dumbell Tricep Extension",
      videoUrl: "JGWZcp5qdwY",
    },
    "Two-Dumbbell Front to Lateral Raise": {
      description: "Two-Dumbbell Front to Lateral Raise",
      videoUrl: "PzsMitRdI_8",
    },
    "Seated Dumbbell Shoulder Press": {
      description: "Seated Dumbbell Shoulder Press",
      videoUrl: "qEwKCR5JCog",
    },
    "Military Press": {
      description: "Military Press",
      videoUrl: "2yjwXTZQDDI",
    },
    "Standing Dumbbell Shoulder Press": {
      description: "Standing Dumbbell Shoulder Press",
      videoUrl: "OOe_HrNnQWw",
    },
    "Incline Hammer Curl": {
      description: "Incline Hammer Curl",
      videoUrl: "eaKl9YOCB_c",
    },
    "EZ-Bar Curl": {
      description: "EZ-Bar Curl",
      videoUrl: "zG2xJ0Q5QtI",
    },
    "Dumbbell Curl": {
      description: "Dumbbell Curl",
      videoUrl: "ykJmrZ5v0Oo",
    },
    "Concentration Curl": {
      description: "Concentration Curl",
      videoUrl: "Jvj2wV0vOYU",
    },
    "Machine Preacher Curl": {
      description: "Machine Preacher Curl",
      videoUrl: "Ja6ZlIDONac",
    },
    "Preacher Curl": {
      description: "Preacher Curl",
      videoUrl: "fIWP-FRFNU0",
    },
    "One-arm Cable Curl": {
      description: "One-arm Cable Curl",
      videoUrl: "uuKeFiq5Ojc",
    },
    "Russion Twist": {
      description: "Russion Twist",
      videoUrl: "wkD8rjkodUI",
    },
    "Sit Up with Weight": {
      description: "Sit Up with Weight",
      videoUrl: "kZvSaq192cg",
    },
    "Heel Touches": {
      description: "Heel Touches",
      videoUrl: "RW25fbkQxVQ",
    },
    "Laying Leg Raises": {
      description: "Laying Leg Raises",
      videoUrl: "JB2oyawG9KI",
    },
    "Single-arm Cable Tricep Extension": {
      description: "Single-arm Cable Tricep Extension",
      videoUrl: "8rl4ioij6lc",
    },
    "Dumbbell Standing Calf Raises": {
      description: "Dumbbell Standing Calf Raises",
      videoUrl: "ADIDoYt_ko4",
    },
    "Dumbbell Skullcrusher": {
      description: "Dumbell Skullcrusher",
      videoUrl: "YUTJAt0vIGY",
    },
    "Decline Dumbbell Flyes": {
      description: "Decline Dumbbell Flyes",
      videoUrl: "ilcbmIoz9S4",
    },
    "Incline Cable Chest Fly": {
      description: "Incline Cable Chest Fly",
      videoUrl: "OsJx99xk5Xo",
    },
    "No matching workouts found.": {
      description: "",
      videoUrl: "dQw4w9WgXcQ",
    },
    "Hanging Leg Raises": {
      description: "Hanging Leg Raises",
      videoUrl: "RuIdJSVTKO4",
    },
    "Push Ups - Close Tricep Position": {
      description: "Push Ups - Close Tricep Position",
      videoUrl: "F1Lq9LnyvVc",
    }
  };

  // Inside the populateWorkoutDetails(selectedWorkout) function:

  function stopVideo() {
    if (youtubePlayer && youtubePlayer.stopVideo) {
      youtubePlayer.stopVideo();
    }
  }

  function onPlayerReady(event) {
    // Event triggered when the player is ready
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      // The video is playing, hide the "No video available" message
      document.querySelector(".no-video-message").style.display = "none";
    } else if (event.data == YT.PlayerState.ENDED) {
      // The video has ended, stop the video and show the "No video available" message
      youtubePlayer.stopVideo();
      document.querySelector(".no-video-message").style.display = "block";
    }
  }

  function onYouTubeIframeAPIReady() {
    // Create a new YouTube player when the API is ready
    youtubePlayer = new YT.Player("videoPlayer", {
      height: "315",
      width: "560",
      videoId: "", // Video ID will be set when a workout is selected
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }

  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.innerHTML = ""; // Clear the video player content
    videoPlayer.style.display = "none"; // Hide the video player
    const workoutDetails = document.querySelector(".workout-details");
    workoutDetails.classList.remove("visible"); // Hide the workout details
  });

  function populateWorkoutDetails(selectedWorkout) {
    workoutDetails.innerHTML = ""; // Clear previous details

    // Create 'X' button to close the workout details popup
    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");
    closeButton.addEventListener("click", function () {
      workoutDetails.classList.remove("visible");
      stopVideo(); // Stop the YouTube video when the popup is closed

      // Hide the video player container
      const videoPlayerContainer = document.getElementById("videoPlayer");
      videoPlayerContainer.style.display = "none";
    });
    workoutDetails.appendChild(closeButton);

    let workoutInfo = workoutDescriptions[selectedWorkout];
    if (workoutInfo) {
      let descriptionItem = document.createElement("li");
      descriptionItem.textContent = workoutInfo.description;
      workoutDetails.appendChild(descriptionItem);

      let videoUrl = workoutInfo.videoUrl;
      if (videoUrl) {
        const videoPlayerContainer = document.getElementById("videoPlayer");
        videoPlayerContainer.innerHTML = ""; // Clear previous video player if any

        // Create a new div element for the YouTube player
        const playerDiv = document.createElement("div");
        playerDiv.id = "youtubePlayer";
        videoPlayerContainer.appendChild(playerDiv);
        if (videoUrl) {
          if (youtubePlayer) {
            youtubePlayer.loadVideoById(videoUrl);
          } else {
            youtubePlayer = new YT.Player("videoPlayer", {
              height: "315",
              width: "560",
              videoId: videoUrl,
              events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
              },
            });
          }
        } else {
          // If the player already exists, load a new video into it
          youtubePlayer.loadVideoById(videoUrl);
        }
      } else {
        // No video available, show a message
        let noVideoItem = document.createElement("li");
        noVideoItem.textContent = "No video available for this workout.";
        workoutDetails.appendChild(noVideoItem);
      }
    } else {
      let noDescriptionItem = document.createElement("li");
      noDescriptionItem.textContent =
        "Description not available for this workout.";
      workoutDetails.appendChild(noDescriptionItem);
    }
    workoutDetails.classList.add("visible"); // Show the workout details dropdown
  }

  // Call the function to populate workout options when the page loads
  populateWorkoutOptions();

  // Close the workout dropdown when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !workoutOptions.contains(event.target) &&
      !workoutDropdown.contains(event.target)
    ) {
      workoutDropdown.style.display = "none";
    }
  });
});

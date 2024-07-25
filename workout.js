document.addEventListener('DOMContentLoaded', () => {
    // Load saved data from localStorage
    loadSavedData();
});

function addExercise(day) {
    const exerciseName = prompt("Enter the name of the exercise:");
    if (exerciseName) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${exerciseName}
            <button onclick="addSet(this)">Add Set</button>
            <button class="delete-exercise-btn" onclick="deleteExercise(this)">x</button>
            <ul class="set-list"></ul>
        `;
        document.getElementById(`${day}-list`).appendChild(listItem);
        saveData();
    } else {
        console.log("No exercise name entered.");
    }
}

function addSet(exerciseButton) {
    const weight = prompt("Enter the weight (kg):");
    const reps = prompt("Enter the number of reps:");
    if (weight && reps) {
        const setList = exerciseButton.nextElementSibling.nextElementSibling;
        const setItem = document.createElement('li');
        setItem.textContent = `Weight: ${weight} kg, Reps: ${reps}`;
        setList.appendChild(setItem);
        saveData();
    } else {
        console.log("Weight or reps not entered.");
    }
}

function deleteExercise(button) {
    button.parentElement.remove();
    saveData();
}

function clearAllProgress() {
    if (confirm("Are you sure you want to clear all progress?")) {
        document.getElementById('push-list').innerHTML = '';
        document.getElementById('pull-list').innerHTML = '';
        document.getElementById('legs-list').innerHTML = '';
        saveData();
    }
}

function saveData() {
    const data = {
        push: document.getElementById('push-list').innerHTML,
        pull: document.getElementById('pull-list').innerHTML,
        legs: document.getElementById('legs-list').innerHTML
    };
    localStorage.setItem('workoutData', JSON.stringify(data));
    console.log("Data saved:", data);
}

function loadSavedData() {
    const savedData = JSON.parse(localStorage.getItem('workoutData'));
    if (savedData) {
        document.getElementById('push-list').innerHTML = savedData.push;
        document.getElementById('pull-list').innerHTML = savedData.pull;
        document.getElementById('legs-list').innerHTML = savedData.legs;
        console.log("Data loaded:", savedData);
    } else {
        console.log("No data found in localStorage.");
    }
}

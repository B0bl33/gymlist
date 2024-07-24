$(document).ready(function() {
    // Select all buttons by class
    $('.complete-btn').click(function () {
        // Find the parent li element of the clicked button 
        var $exercise = $(this).parent();

        // Toggle completed class on parent li element 
        $exercise.toggleClass('completed');
        
        
    });

    
});
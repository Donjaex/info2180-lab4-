document.getElementById("searchButton").addEventListener("click", function() {
    fetch('superheroes.php')
        .then(response => response.json())
        .then(data => {
            // Extract the aliases from the superhero data
            const aliases = data.map(superhero => superhero.alias);
            // Join aliases with newline characters for the alert
            const aliasesList = aliases.join("\n");
            // Display the list in an alert box
            alert(aliasesList);
        })
        .catch(error => {
            console.error("Error fetching superhero data:", error);
        });
});

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sjekk pålogging</title>
</head>
<body>
<?php
session_start();
    if(isset($_POST['submit'])){
        //Gjøre om POST-data til variabler
        $brukernavn = $_POST['brukernavn'];
        $passord = $_POST['passord'];
        
        //Koble til databasen
        $dbc = mysqli_connect('localhost', 'root', '', 'skohubdb')
          or die('Error connecting to MySQL server.');
        
        //Gjøre klar SQL-strengen
        $query = "SELECT brukernavn, passord from brukere where brukernavn='$brukernavn' and passord='$passord'";
        
        //Utføre spørringen
        $result = mysqli_query($dbc, $query)
          or die('Error querying database.');
        
        //Koble fra databasen
        mysqli_close($dbc);

        //Sjekke om spørringen gir resultater
            if($result->num_rows > 0){
                //Gyldig login
                session_start();
                $_SESSION['brukernavn'] = $brukernavn; // Store the username in a session variable
                header('location: index.php');
        }else{
            //Ugyldig login
            echo '<p style="color: red;">Feil brukernavn eller passord. <a href="login.html">Prøv igjen</a>.</p>';
        }
    }
?>
</body>
</html>

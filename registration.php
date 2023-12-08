<html>
<head>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="utf-8">
    <title>PHP registrering</title>
</head>
<body>
    <p>Opprett ny bruker:</p>
    <form method="post">
        <label for="brukernavn">Brukernavn:</label>
        <input type="text" name="brukernavn" /><br />
        <label for="passord">Passord:</label>
        <input type="password" name="passord" /><br />

        <input type="submit" value="Registrer" name="submit" />
    </form>    
</body>
<?php
session_start();
if(isset($_POST['submit'])){
    //Gjøre om POST-data til variabler
    $brukernavn = $_POST['brukernavn'];
    $passord = $_POST['passord'];

    //Koble til databasen
    $dbc = mysqli_connect('localhost', 'root', '', 'skohubdb')
        or die('Error connecting to MySQL server.');

    // Hash passordet før lagring
    $hashed_password = password_hash($passord, PASSWORD_DEFAULT);

    //Gjøre klar SQL-strengen med prepared statement
    $query = "INSERT INTO brukere (brukernavn, passord) VALUES (?, ?)";
    $stmt = mysqli_prepare($dbc, $query);
    mysqli_stmt_bind_param($stmt, "ss", $brukernavn, $hashed_password);
    
    //Utføre spørringen
    $result = mysqli_stmt_execute($stmt);

    //Koble fra databasen
    mysqli_close($dbc);

    //Sjekke om spørringen gir resultater
    if($result){
        //Gyldig registrering
        echo "Takk for at du lagde bruker! Trykk <a href='login.html'>her</a> for å logge inn";
    }else{
        //Ugyldig registrering
        echo "Noe gikk galt, prøv igjen!";
    }
}
?>
</html>

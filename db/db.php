<?php
 $db = mysqli_connect('localhost','chris','123qwe','demodb')
 or die('Error connecting to MySQL server.');
?>
<html>
    <head>
        <title>Portfolio | Chris Horan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Database project.">
        <link rel="stylesheet" href="../style.css">
        <!-- <script src="script.js"></script> -->
        <link rel="icon" type="image/png" href="../images/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="../images/favicon.png" sizes="32x32">
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    </head>
    <body>
        <header>
            <a id="homeLink" href="#top"><img id="logo" src="../images/logo.png" alt="logo" height="60px;"></a>
            <nav>
                <a href="../index.html#info">About</a>
                <a href="../index.html#projects">Projects</a>
                <a href="../index.html#contact">Contact</a>
            </nav>
        </header>
        <main>
            <?php
            $query = "SELECT * FROM t1";
            mysqli_query($db, $query) or die('Error querying database.');
            
            $result = mysqli_query($db, $query);
            $row = mysqli_fetch_array($result);

            while ($row = mysqli_fetch_array($result)) {
                echo $row['first_name'] . ' ' . $row['last_name']<br />;
            }
            ?>
        </main>
        <footer>
            <div id="space1"></div>
            <a href="https://github.com/Chris-Horan" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/chris-horan-a77b5a112/" target="_blank">LinkedIn</a>
            <div id="space2"></div>
            <p>Copyright 2020.</p>
        </footer>
    </body>
</html>
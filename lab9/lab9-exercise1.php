<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
<<<<<<< HEAD
$remaining = 365 - date("z");
if(date("L")) {
    $remain = $remaining +  1;
    echo "There are " . $remain . " days left in the year";
}
else
    echo "There are " . $remaining . " days left in the year";
echo "<br>";
=======
echo "This was output using PHP";
echo "<br>"; //notice we must echo tags in php.
>>>>>>> 3fea442aabfb8393c58da1dae53909330bf29e82

?>
</body>
</html>
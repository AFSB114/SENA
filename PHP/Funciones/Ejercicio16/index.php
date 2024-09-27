<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include 'library/process.php';
    $numsF = numsFor(5);
    $numsW = numsWhile(5);
    var_dump($numsF,$numsW);
    ?>
</body>
</html>
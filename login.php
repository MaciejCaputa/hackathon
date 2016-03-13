<?php // Create user session for website
	ob_start();
	session_start();
?>

<?php // SQL Database Connection
	$host = "csmysql.cs.cf.ac.uk";
	$username = "c1532436";
	$password = "ahnetW3n";
	$db_name = "c1532436";
	$connection = mysqli_connect($host, $username, $password);
	
	if (!$connection)
	{
		die("Connection Failed :( ");
	}
	
	if (!mysqli_select_db($connection, $db_name))
	{
		die("Failed to select database!");
	}
?>

<?php // SQL Fetch Login Details
	$output = "";
	$result = mysqli_query($connection, "SELECT * FROM mathack_users ORDER BY username");
	
	if (!$result)
	{
		die("Query failed :(");
	}
	mysqli_close($connection);
?>

<?php // Checks which web page to load depending on which button is pressed
	/*
	function returnPage() {
		if (isset($_POST['log_in']))
		{
			echo htmlspecialchars($_SERVER['PHP_SELF']);
		}
		
		else if (isset($_POST['sign_up']))
		{
			echo "signup.php";
		}
	}
	*/
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">

    <title>MathHack Login</title>

    <!--  -->
    <link rel="stylesheet" href="style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

    <style>

    </style>

</head>

<body>
	<div class="container sign_in">
		<?php
			if (isset($_POST['log_in']) && !empty($_POST['username']) && !empty($_POST['password']))
			{
				while ($row = mysqli_fetch_row($result))
				{
					if ($_POST['username'] == $row[0] && $_POST['password'] == $row[3])
					{
						$_SESSION['valid'] = true;
						$_SESSION['timeout'] = time();
						$_SESSION['username'] = $_POST['username'];
						$output = "";
						header("Refresh: 0.1; URL = home.php");
						break;
					}
					
					else
					{
						$output = "Wrong username or password!";
					}
				}
			}
		?>
	</div>

    <div class="container login-container">
        <img src="logo.jpg" class="logo-login"><br><br><br><br>
        <div class="input-group input-group-lg login-form">
			<p class="sign_in-header"><?php echo($output); ?></p>
			<form class="sign-in" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
				<input type="text" class="form-control" id="login" name="username" placeholder="Username" />
				<input type="password" class="form-control" id="login" name="password" placeholder="Password" />
				<button type="submit" class="btn-lg login-btn" name="log_in">Login</button>
			</form>
			<button class="btn-lg signup-btn" name="sign_up" onclick="window.location.href = 'signup.php';">Sign Up</button>
			<p style="text-align: center;">Click <a href="logout.php" title="Logout">here</a> to clear the current session.</p>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>

    <script>
    </script>

</body>

</html>

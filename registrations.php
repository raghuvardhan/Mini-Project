<?php
	$handle=fopen("registrations.csv","a");
	fputcsv($handle,$_POST);
	fclose($handle);
	header("Location: login.html");
?>

<!DOCTYPE HTML>
<html>
<head>
<title> ShopOnline</title>
</head>
<body>
<h2>Welcome to ShopOnline</h2>
<p><span>Enter the product name you want with the quantities </span></p>

<form method="post" action="index.php">
  Product: <input type="text" name="product_name">
    <br><br>
  Quantity: <input type="text" name="product_quantity">
  <br><br>
  <input type="submit" value="Submit">
</form>


<?php
// define variables and set to empty values
$productNameErr = $quantityErr = "";
$productName = $quantity = "";

  if (empty($_POST["name"])) {
    $nameErr = "Product name is required";
  } else {
    $productName = test_input($_POST["productName"]);
  }

  if (empty($_POST["quantity"])) {
    $quantityErr = "Product quantity is required";
  } else {
    $quantity = test_input($_POST["quantity"]);
  }

?>

</body>
</html>
<?php
if (session_status() === PHP_SESSION_NONE) session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Tadka E-Shop</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>

<!-- HEADER -->
<header class="header">
  <div class="header-container">
    <div class="logo">
      <a href="index.php"><i class="fa fa-utensils"></i> Tadka</a>
    </div>

    <nav class="nav">
      <ul class="nav-list">
        <li><a href="index.php">Home</a></li>
        <li class="dropdown">
          <a href="shop.php">Shop <i class="fa fa-angle-down"></i></a>
          <ul class="dropdown-menu">
            <li><a href="shop.php?cat=starters">Starters</a></li>
            <li><a href="shop.php?cat=maincourse">Main Course</a></li>
            <li><a href="shop.php?cat=desserts">Desserts</a></li>
            <li><a href="shop.php?cat=beverages">Beverages</a></li>
          </ul>
        </li>
        <li><a href="about.php">About</a></li>
        <li><a href="contact.php">Contact</a></li>
      </ul>
    </nav>

    <div class="header-actions">
      <a href="cart.php" class="icon"><i class="fa fa-shopping-cart"></i></a>
      <?php if(isset($_SESSION['user'])): ?>
        <a href="logout.php" class="icon"><i class="fa fa-user"></i> Logout</a>
      <?php else: ?>
        <a href="login.php" class="icon"><i class="fa fa-user"></i> Login</a>
      <?php endif; ?>
    </div>
  </div>
</header>

<main class="content">

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $title; ?></title>
    <meta name="description" content="Weightloss Website">
    <meta name="keywords" content="Weightloss,Fitness,Gym">
    <meta name="author" content="John Doe">
    <link rel="icon" href="./assets/images/favicon.webp" />
    <!-- CSS Files Includes !-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="assets/css/responsive-gsap.css">
    <link rel="stylesheet" href="assets/fonts/styles.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/style-gsap.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <!-- End CSS Files Includes !-->
</head>

<body>
    <!-- Header !-->
    <header id="header">
        <div class="container-fluid px-5">
            <div class="row">
                <!-- Navigation !-->
                <nav class="navbar navbar-expand-lg navbar-light">

                    <a class="navbar-brand" href="index.php">
                        <img src="assets/images/newlogo 1.png" class="img-fluid" id="img-logo-header" alt="Logo" />
                        <img src="assets/images/newlogo 2.png" class="img-fluid" id="text-logo-header" alt="Logo" />
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <img class="img-fluid toogleimg" src="assets/images/toggle.webp" alt="image" />
                    </button>

                    <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">

                        <ul id='navbar-header' class="navbar-nav mobileNavBar">
                            <li class="nav-item mobilelogo">
                                <a class="nav-link" href="index.php"><img class="img-fluid" src="assets/images/m-logo.webp" alt="Mobile Logo" /></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.php">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="shop.php">shop</a>

                            </li>

                            <li class="nav-item mr-lg-2">
                                <a class="nav-link" href="#">total app</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">DUMMY SUPPS</a>
                            </li>

                            <li class="nav-item mr-lg-2">
                                <a class="nav-link" href="contact.php">contact us</a>
                            </li>

                        </ul>
                        <div class="header-socials">
                            <ul class="social_media">
                                <li><a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </nav>
                <!-- End Navigation !-->
            </div>
        </div>

    </header>
    <!-- End Header !-->
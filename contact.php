<?php
$title = "Home";
?>
<?php include 'includes/header.php'; ?>
<!-- Contact Banner !-->
<section class="contact-banner">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 con-left">
                <div class="innercon">
                    <h1>Let’s get in touch!</h1>
                    <form action="" class="contact-form">
                        <input name="name" placeholder="Full Name" class="fontact-field" />
                        <input name="email" placeholder="E-mail" class="fontact-field" />
                        <input name="messsage" placeholder="Messsage" class="fontact-field" />
                        <input type="submit" value="Send info" class="blue-btn" />
                    </form>
                </div>
            </div>
            <div class="col-lg-6 con-right">
                <div class="con-img">
                    <img src="assets/images/contact.webp" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Contact Banner !-->

<?php include 'includes/footer.php'; ?>
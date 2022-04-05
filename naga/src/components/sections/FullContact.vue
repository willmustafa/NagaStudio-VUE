<template>
    <section
        style="background: url('https://media.gettyimages.com/photos/taylor-swift-performs-onstage-during-the-reputation-stadium-tour-at-picture-id1043257620?s=2048x2048'">
        <div class="container-fluid px-0 position-relative">
            <div class="col-md-7 offset-md-5 bg-light contact-wrapper">
                <ul class="lg-social wow slideInLeft">
                    <li><a href="#" title="" class="spotify-ic"><i class="fab fa-spotify"></i></a></li>
                    <li><a href="#" title="" class="music"><i class="fab fa-github"></i></a></li>
                    <li><a href="#" title="" class="youtube"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="#" title="" class="soundcloud"><i class="fab fa-linkedin"></i></a></li>
                </ul>
                <div class="p-8">
                    <div class="contact-head">
                        <h2>Contact Us</h2>
                        <p>Or make us a visit!</p>
                        <div class="mt-4">
                            <span>19 Barlowstone Avenue San Pedro, CA 90731 California</span>
                        </div>
                    </div>
                    <div class="mt-4 row">
                        <form method="post" class="contact-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="txtName" class="form-control" placeholder="Your Name *"
                                            value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="txtEmail" class="form-control"
                                            placeholder="Your Email *" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="txtPhone" class="form-control"
                                            placeholder="Your Phone Number *" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *"
                                            style="width: 100%; height: 150px;"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="contact-managers mt-4">
                        <div class="row">
                            <div class="col-md-4 contact-info">
                                <h2 class="fw-bold">Studio</h2>
                                <span>Haron Araujo</span>
                                <span>studio@nagastudios.com</span>
                            </div>
                            <div class="col-md-4 contact-info">
                                <h2 class="fw-bold">Live</h2>
                                <span>Guilherme Magnus</span>
                                <span>live@nagastudios.com</span>
                            </div>
                            <div class="col-md-4 contact-info">
                                <h2 class="fw-bold">Managers</h2>
                                <span>Thaila Nagazawa</span>
                                <span>manager@nagastudios.com</span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    .contact-form .form-control {
        border-radius: 1rem;
    }

    .contact-form .form-group{
        margin-bottom: 1rem;
    }

    .contact-form form .row {
        margin-bottom: -7%;
    }

    .contact-form h3 {
        margin-bottom: 8%;
        margin-top: -10%;
        text-align: center;
        color: #0062cc;
    }

    .contact-form .btnContact {
        width: 50%;
        border: none;
        border-radius: 1rem;
        padding: 1.5%;
        background: #dc3545;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }

    .btnContactSubmit {
        width: 50%;
        border-radius: 1rem;
        padding: 1.5%;
        color: #fff;
        background-color: #0062cc;
        border: none;
        cursor: pointer;
    }

    .contact-info span {
        display: block;
    }

    .contact-wrapper {
        position: absolute;
        height: 80%;
        bottom: 0;
    }

    .p-8 {
        padding: 6rem;
    }

    .lg-social {
        position: absolute;
        top: 0;
        right: 100%;
        width: 130px;
        height: 100%;
    }

    .lg-social li a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 130px;
        color: #fff;
        text-align: center;
        font-size: 2.25rem;
        border-bottom-left-radius: 50px;
        border-top-left-radius: 50px;
        padding-left: 10%;
    }

    .lg-social .fab {
        font-size: 2.25rem;
    }

    .spotify-ic {
        background-color: #2dbc58;
    }

    .music {
        background-color: #c764f4;
    }

    .youtube {
        background-color: #fc002a;
    }

    .soundcloud {
        background-color: #f57107;
    }
</style>
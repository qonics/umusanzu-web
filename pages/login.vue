<template>
    <body>
        <div class="account-pages my-5 pt-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="card overflow-hidden">
                            <div class="bg-primary bg-soft">
                                <div class="row">
                                    <div class="col-7">
                                        <div class="text-primary p-4">
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p>Sign in to continue to Skote.</p>
                                        </div>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <img src="@/assets/elements/profile-img.png" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-0"> 
                                <div class="auth-logo">
                                    <a href="https://themesbrand.com/skote-django/layouts/index.html" class="auth-logo-light">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="@/assets/elements/logo-light.svg" alt="" class="rounded-circle" height="34">
                                            </span>
                                        </div>
                                    </a>

                                    <a href="https://themesbrand.com/skote-django/layouts/index.html" class="auth-logo-dark">
                                        <div class="avatar-md profile-user-wid mb-4">
                                            <span class="avatar-title rounded-circle bg-light">
                                                <img src="@/assets/elements/logo.svg" alt="" class="rounded-circle" height="34">
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div class="p-2">
                                    <form class="form-horizontal" action="https://themesbrand.com/skote-django/layouts/index.html">
        
                                        <div class="mb-3">
                                            <label for="username" class="form-label">Username</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter username">
                                        <kpm-button style="position: relative !important; z-index: 3 !important;" class="_1mUok1yqu_fHkbNOXVoU6l kpm_input-field-button kpm_gray-key-icon"><div class="_12GLdmNfqjBzgAQBymfRrk" style="position: absolute !important; width: 20px !important; height: 24px !important; top: -30.0312px !important; left: 373.5px !important;"><svg class="_1jZ1QRhwRIXZDO2Rgp_qon" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="inset: 0px -2px !important;"><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="12" height="24" viewBox="0 0 8 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="_2WQbmZpFI_2_k72D9o87Hq kpm_reset _2p2h7gYS-bpObPoQxR7lvo" style="position: absolute !important; width: 12px !important; height: 24px !important; top: -30.0312px !important; left: 373.5px !important;"><path fillRule="evenodd" clipRule="evenodd" d="M6 7.46487C7.1956 6.77325 8 5.48056 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 5.48056 0.804397 6.77325 2 7.46487V9H3V10H2V12H3V13H2V14.5L4 16L6 14.5V7.46487ZM5 3C5 3.55228 4.55229 4 4 4C3.44772 4 3 3.55228 3 3C3 2.44772 3.44772 2 4 2C4.55229 2 5 2.44772 5 3ZM4 8H5V14H4V8Z"></path></svg></kpm-button></div>
                
                                        <div class="mb-3">
                                            <label class="form-label">Password</label>
                                            <div class="input-group auth-pass-inputgroup">
                                                <input type="password" class="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon">
                                                <button class="btn btn-light " type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                            <kpm-button style="position: relative !important; z-index: 5 !important;" class="_1mUok1yqu_fHkbNOXVoU6l kpm_input-field-button kpm_gray-key-icon"><div class="_12GLdmNfqjBzgAQBymfRrk" style="position: absolute !important; width: 20px !important; height: 24px !important; top: 6.5px !important; left: -63.5px !important;"><svg class="_1jZ1QRhwRIXZDO2Rgp_qon" viewBox="25 25 50 50" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="inset: 0px -2px !important;"><circle cx="50" cy="50" r="20"></circle></svg></div><svg width="12" height="24" viewBox="0 0 8 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="_2WQbmZpFI_2_k72D9o87Hq kpm_reset _2p2h7gYS-bpObPoQxR7lvo" style="position: absolute !important; width: 12px !important; height: 24px !important; top: 6.5px !important; left: -63.5px !important;"><path fillRule="evenodd" clipRule="evenodd" d="M6 7.46487C7.1956 6.77325 8 5.48056 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 5.48056 0.804397 6.77325 2 7.46487V9H3V10H2V12H3V13H2V14.5L4 16L6 14.5V7.46487ZM5 3C5 3.55228 4.55229 4 4 4C3.44772 4 3 3.55228 3 3C3 2.44772 3.44772 2 4 2C4.55229 2 5 2.44772 5 3ZM4 8H5V14H4V8Z"></path></svg></kpm-button></div>
                                        </div>

                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="remember-check">
                                            <label class="form-check-label" for="remember-check">
                                                Remember me
                                            </label>
                                        </div>
                                        
                                        <div class="mt-3 d-grid">
                                            <button class="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                        </div>
            
                                        <div class="mt-4 text-center">
                                            <h5 class="font-size-14 mb-3">Sign in with</h5>
            
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-primary text-white border-primary">
                                                        <i class="mdi mdi-facebook"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-info text-white border-info">
                                                        <i class="mdi mdi-twitter"></i>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a href="javascript::void()" class="social-list-item bg-danger text-white border-danger">
                                                        <i class="mdi mdi-google"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <a href="https://themesbrand.com/skote-django/layouts/auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                        <div class="mt-5 text-center">
                            
                            <div>
                                <p>Don't have an account ? <a href="https://themesbrand.com/skote-django/layouts/auth-register.html" class="fw-medium text-primary"> Signup now </a> </p>
                                <p>2022 Skote. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    

</body>
</template>
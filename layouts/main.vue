<template>
  <body data-sidebar="dark" data-layout-mode="light" cz-shortcut-listen="true" style="" class="">

<!-- <body data-layout="horizontal" data-topbar="dark"> -->

<!-- Begin page -->
<div id="layout-wrapper">


    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="https://themesbrand.com/skote-django/layouts/index.html" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="@/assets/elements/logo.svg"
                                alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/elements/logo-dark.png"
                                alt="" height="17">
                        </span>
                    </a>

                    <a href="https://themesbrand.com/skote-django/layouts/index.html" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="@/assets/elements/logo-light.svg"
                                alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/elements/logo-light.png"
                                alt="" height="19">
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect"
                    id="vertical-menu-btn">
                    <i class="fa fa-fw fa-bars"></i>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-lg-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search...">
                        <span class="bx bx-search-alt"></span>
                    </div>
                </form>

                <div class="dropdown dropdown-mega d-none d-lg-block ms-2">
                    <button type="button" class="btn header-item waves-effect" data-bs-toggle="dropdown"
                        aria-haspopup="false" aria-expanded="false">
                        <span key="t-megamenu">Mega Menu</span>
                        <i class="mdi mdi-chevron-down"></i>
                    </button>
                    <div class="dropdown-menu dropdown-megamenu">
                        <div class="row">
                            <div class="col-sm-8">

                                <div class="row">
                                    <div class="col-md-4">
                                        <h5 class="font-size-14" key="t-ui-components">UI Components</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-rating">Rating</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-forms">Forms</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-tables">Tables</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-charts">Charts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-md-4">
                                        <h5 class="font-size-14" key="t-applications">Applications</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);" key="t-ecommerce">Ecommerce</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-calendar">Calendar</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-email">Email</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-projects">Projects</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-tasks">Tasks</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-contacts">Contacts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-md-4">
                                        <h5 class="font-size-14" key="t-extra-pages">Extra Pages</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);" key="t-light-sidebar">Light
                                                    Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-compact-sidebar">Compact
                                                    Sidebar</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-horizontal">Horizontal
                                                    layout</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-maintenance">Maintenance</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-coming-soon">Coming Soon</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-timeline">Timeline</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-faqs">FAQs</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h5 class="font-size-14" key="t-ui-components">UI Components</h5>
                                        <ul class="list-unstyled megamenu-list">
                                            <li>
                                                <a href="javascript:void(0);" key="t-lightbox">Lightbox</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-range-slider">Range Slider</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-sweet-alert">Sweet Alert</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-rating">Rating</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-forms">Forms</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-tables">Tables</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" key="t-charts">Charts</a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="col-sm-5">
                                        <div>
                                            <img src="@/assets/elements/megamenu-img.png"
                                                alt="" class="img-fluid mx-auto d-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="d-flex">

                <div class="dropdown d-inline-block d-lg-none ms-2">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                        id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="mdi mdi-magnify"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-search-dropdown">

                        <form class="p-3">
                            <div class="form-group m-0">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search ..."
                                        aria-label="Recipient's username">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="submit"><i
                                                class="mdi mdi-magnify"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item waves-effect" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <img id="header-lang-img"
                            src="@/assets/elements/us.jpg"
                            alt="Header Language" height="16">
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="en">
                            <img src="@/assets/elements/us.jpg"
                                alt="user-image" class="me-1" height="12"> <span class="align-middle">English</span>
                        </a>
                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="sp">
                            <img src="@/assets/elements/spain.jpg"
                                alt="user-image" class="me-1" height="12"> <span class="align-middle">Spanish</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="gr">
                            <img src="@/assets/elements/germany.jpg"
                                alt="user-image" class="me-1" height="12"> <span class="align-middle">German</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="it">
                            <img src="@/assets/elements/italy.jpg"
                                alt="user-image" class="me-1" height="12"> <span class="align-middle">Italian</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ru">
                            <img src="@/assets/elements/russia.jpg"
                                alt="user-image" class="me-1" height="12"> <span class="align-middle">Russian</span>
                        </a>
                    </div>
                </div>

                <div class="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" class="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="bx bx-customize"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                        <div class="px-lg-2">
                            <div class="row g-0">
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/github.png"
                                            alt="Github">
                                        <span>GitHub</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/bitbucket.png"
                                            alt="bitbucket">
                                        <span>Bitbucket</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/dribbble.png"
                                            alt="dribbble">
                                        <span>Dribbble</span>
                                    </a>
                                </div>
                            </div>

                            <div class="row g-0">
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/dropbox.png"
                                            alt="dropbox">
                                        <span>Dropbox</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/mail_chimp.png"
                                            alt="mail_chimp">
                                        <span>Mail Chimp</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <a class="dropdown-icon-item" href="#">
                                        <img src="@/assets/elements/slack.png"
                                            alt="slack">
                                        <span>Slack</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-none d-lg-inline-block ms-1">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                        data-bs-toggle="fullscreen">
                        <i class="bx bx-fullscreen"></i>
                    </button>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon waves-effect"
                        id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="bx bx-bell bx-tada"></i>
                        <span class="badge bg-danger rounded-pill">3</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                        aria-labelledby="page-header-notifications-dropdown">
                        <div class="p-3">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6 class="m-0" key="t-notifications"> Notifications </h6>
                                </div>
                                <div class="col-auto">
                                    <a href="#!" class="small" key="t-view-all"> View All</a>
                                </div>
                            </div>
                        </div>
                        <div data-simplebar="init" style="max-height: 230px;">
                            <div class="simplebar-wrapper" style="margin: 0px;">
                                <div class="simplebar-height-auto-observer-wrapper">
                                    <div class="simplebar-height-auto-observer"></div>
                                </div>
                                <div class="simplebar-mask">
                                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                        <div class="simplebar-content-wrapper"
                                            style="height: auto; overflow: hidden;">
                                            <div class="simplebar-content" style="padding: 0px;">
                                                <a href="javascript: void(0);" class="text-reset notification-item">
                                                    <div class="d-flex">
                                                        <div class="avatar-xs me-3">
                                                            <span
                                                                class="avatar-title bg-primary rounded-circle font-size-16">
                                                                <i class="bx bx-cart"></i>
                                                            </span>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1" key="t-your-order">Your order is placed
                                                            </h6>
                                                            <div class="font-size-12 text-muted">
                                                                <p class="mb-1" key="t-grammer">If several languages
                                                                    coalesce the grammar</p>
                                                                <p class="mb-0"><i
                                                                        class="mdi mdi-clock-outline"></i> <span
                                                                        key="t-min-ago">3 min ago</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript: void(0);" class="text-reset notification-item">
                                                    <div class="d-flex">
                                                        <img src="@/assets/elements/avatar-3.jpg"
                                                            class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1">James Lemire</h6>
                                                            <div class="font-size-12 text-muted">
                                                                <p class="mb-1" key="t-simplified">It will seem like
                                                                    simplified English.</p>
                                                                <p class="mb-0"><i
                                                                        class="mdi mdi-clock-outline"></i> <span
                                                                        key="t-hours-ago">1 hours ago</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript: void(0);" class="text-reset notification-item">
                                                    <div class="d-flex">
                                                        <div class="avatar-xs me-3">
                                                            <span
                                                                class="avatar-title bg-success rounded-circle font-size-16">
                                                                <i class="bx bx-badge-check"></i>
                                                            </span>
                                                        </div>
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1" key="t-shipped">Your item is shipped
                                                            </h6>
                                                            <div class="font-size-12 text-muted">
                                                                <p class="mb-1" key="t-grammer">If several languages
                                                                    coalesce the grammar</p>
                                                                <p class="mb-0"><i
                                                                        class="mdi mdi-clock-outline"></i> <span
                                                                        key="t-min-ago">3 min ago</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>

                                                <a href="javascript: void(0);" class="text-reset notification-item">
                                                    <div class="d-flex">
                                                        <img src="@/assets/elements/avatar-4.jpg"
                                                            class="me-3 rounded-circle avatar-xs" alt="user-pic">
                                                        <div class="flex-grow-1">
                                                            <h6 class="mb-1">Salena Layfield</h6>
                                                            <div class="font-size-12 text-muted">
                                                                <p class="mb-1" key="t-occidental">As a skeptical
                                                                    Cambridge friend of mine occidental.</p>
                                                                <p class="mb-0"><i
                                                                        class="mdi mdi-clock-outline"></i> <span
                                                                        key="t-hours-ago">1 hours ago</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="simplebar-placeholder" style="width: 0px; height: 0px;"></div>
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                <div class="simplebar-scrollbar"
                                    style="transform: translate3d(0px, 0px, 0px); display: none;"></div>
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                                <div class="simplebar-scrollbar"
                                    style="transform: translate3d(0px, 0px, 0px); display: none;"></div>
                            </div>
                        </div>
                        <div class="p-2 border-top d-grid">
                            <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                <i class="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">View
                                    More..</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="rounded-circle header-profile-user"
                            src="@/assets/elements/avatar-1.jpg"
                            alt="Header Avatar">
                        <span class="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                        <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle me-1"></i>
                            <span key="t-profile">Profile</span></a>
                        <a class="dropdown-item" href="#"><i
                                class="bx bx-wallet font-size-16 align-middle me-1"></i> <span key="t-my-wallet">My
                                Wallet</span></a>
                        <a class="dropdown-item d-block" href="#"><span
                                class="badge bg-success float-end">11</span><i
                                class="bx bx-wrench font-size-16 align-middle me-1"></i> <span
                                key="t-settings">Settings</span></a>
                        <a class="dropdown-item" href="#"><i
                                class="bx bx-lock-open font-size-16 align-middle me-1"></i> <span
                                key="t-lock-screen">Lock screen</span></a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item text-danger" href="#"><i
                                class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> <span
                                key="t-logout">Logout</span></a>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                      <v-icon icon="mdi-vuetify"></v-icon>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- ========== Left Sidebar Start ========== -->
    <div class="vertical-menu">

        <div data-simplebar="init" class="h-100">
            <div class="simplebar-wrapper" style="margin: 0px;">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: -17px; bottom: 0px;">
                        <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                            <div class="simplebar-content" style="padding: 0px;">

                                <!--- Sidemenu -->
                                <div id="sidebar-menu" class="mm-active">
                                    <!-- Left Menu Start -->
                                    <ul class="metismenu list-unstyled mm-show" id="side-menu">
                                        <li class="menu-title" key="t-menu">Menu</li>

                                        <li class="mm-active">
                                            <a href="javascript: void(0);" class="has-arrow waves-effect mm-active">
                                                <i class="bx bx-home-circle"></i>
                                                <span key="t-dashboards">Dashboards</span>
                                            </a>
                                            <ul class="sub-menu mm-collapse mm-show" aria-expanded="false">
                                                <li class="mm-active"><a
                                                        href="https://themesbrand.com/skote-django/layouts/index.html"
                                                        key="t-default" class="active">Default</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/dashboard-saas.html"
                                                        key="t-saas">Saas</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/dashboard-crypto.html"
                                                        key="t-crypto">Crypto</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/dashboard-blog.html"
                                                        key="t-blog">Blog</a></li>
                                                <li><a
                                                        href="https://themesbrand.com/skote-django/layouts/dashboard-job.html"><span
                                                            class="badge rounded-pill text-bg-success float-end"
                                                            key="t-new">New</span> <span
                                                            key="t-jobs">Jobs</span></a></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript: void(0);" class="waves-effect">
                                                <span class="badge rounded-pill bg-success float-end"
                                                    key="t-new">New</span>
                                                <i class="bx bx-briefcase-alt"></i>
                                                <span key="t-jobs">Jobs</span>
                                            </a>
                                            <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                <li><a href="https://themesbrand.com/skote-django/layouts/job-list.html"
                                                        key="t-job-list">Job List</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/job-grid.html"
                                                        key="t-job-grid">Job Grid</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/job-apply.html"
                                                        key="t-apply-job">Apply Job</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/job-details.html"
                                                        key="t-job-details">Job Details</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/job-categories.html"
                                                        key="t-Jobs-categories">Jobs Categories</a></li>
                                                <li>
                                                    <a href="javascript: void(0);" class="has-arrow"
                                                        key="t-candidate">Candidate</a>
                                                    <ul class="sub-menu mm-collapse" aria-expanded="true">
                                                        <li><a href="https://themesbrand.com/skote-django/layouts/candidate-list.html"
                                                                key="t-list">List</a></li>
                                                        <li><a href="https://themesbrand.com/skote-django/layouts/candidate-overview.html"
                                                                key="t-overview">Overview</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="menu-title" key="t-pages">Pages</li>

                                        <li>
                                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                                <i class="bx bx-user-circle"></i>
                                                <span key="t-authentication">Authentication</span>
                                            </a>
                                            <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-login.html"
                                                        key="t-login">Login</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-login-2.html"
                                                        key="t-login-2">Login 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-register.html"
                                                        key="t-register">Register</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-register-2.html"
                                                        key="t-register-2">Register 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-recoverpw.html"
                                                        key="t-recover-password">Recover Password</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-recoverpw-2.html"
                                                        key="t-recover-password-2">Recover Password 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-lock-screen.html"
                                                        key="t-lock-screen">Lock Screen</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-lock-screen-2.html"
                                                        key="t-lock-screen-2">Lock Screen 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-confirm-mail.html"
                                                        key="t-confirm-mail">Confirm Email</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-confirm-mail-2.html"
                                                        key="t-confirm-mail-2">Confirm Email 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-email-verification.html"
                                                        key="t-email-verification">Email verification</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-email-verification-2.html"
                                                        key="t-email-verification-2">Email Verification 2</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-two-step-verification.html"
                                                        key="t-two-step-verification">Two Step Verification</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/auth-two-step-verification-2.html"
                                                        key="t-two-step-verification-2">Two Step Verification 2</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <a href="javascript: void(0);" class="has-arrow waves-effect">
                                                <i class="bx bx-file"></i>
                                                <span key="t-utility">Utility</span>
                                            </a>
                                            <ul class="sub-menu mm-collapse" aria-expanded="false">
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-starter.html"
                                                        key="t-starter-page">Starter Page</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-maintenance.html"
                                                        key="t-maintenance">Maintenance</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-comingsoon.html"
                                                        key="t-coming-soon">Coming Soon</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-timeline.html"
                                                        key="t-timeline">Timeline</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-faqs.html"
                                                        key="t-faqs">FAQs</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-pricing.html"
                                                        key="t-pricing">Pricing</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-404.html"
                                                        key="t-error-404">Error 404</a></li>
                                                <li><a href="https://themesbrand.com/skote-django/layouts/pages-500.html"
                                                        key="t-error-500">Error 500</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <!-- Sidebar -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="simplebar-placeholder" style="width: auto; height: 1399px;"></div>
            </div>
            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: none;">
                </div>
            </div>
            <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                <div class="simplebar-scrollbar"
                    style="height: 575px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
            </div>
        </div>
    </div>
    <!-- Left Sidebar End -->



    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

        <slot/>
        <!-- End Page-content -->

        <!-- Transaction Modal -->
        <div class="modal fade transaction-detailModal" tabindex="-1" role="dialog"
            aria-labelledby="transaction-detailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="transaction-detailModalLabel">Order Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="mb-2">Product id: <span class="text-primary">#SK2540</span></p>
                        <p class="mb-4">Billing Name: <span class="text-primary">Neal Matthews</span></p>

                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src="@/assets/elements/img-7.png"
                                                    alt="" class="avatar-sm">
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)
                                                </h5>
                                                <p class="text-muted mb-0">$ 225 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 255</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src="@/assets/elements/img-4.png"
                                                    alt="" class="avatar-sm">
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 class="text-truncate font-size-14">Phone patterned cases</h5>
                                                <p class="text-muted mb-0">$ 145 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 145</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Sub Total:</h6>
                                        </td>
                                        <td>
                                            $ 400
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Shipping:</h6>
                                        </td>
                                        <td>
                                            Free
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Total:</h6>
                                        </td>
                                        <td>
                                            $ 400
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end modal -->

        <!-- subscribeModal -->
        <div class="modal fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-4">
                            <div class="avatar-md mx-auto mb-4">
                                <div class="avatar-title bg-light rounded-circle text-primary h1">
                                    <i class="mdi mdi-email-open"></i>
                                </div>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col-xl-10">
                                    <h4 class="text-primary">Subscribe !</h4>
                                    <p class="text-muted font-size-14 mb-4">Subscribe our newletter and get
                                        notification to stay update.</p>

                                    <div class="input-group bg-light rounded">
                                        <input type="email" class="form-control bg-transparent border-0"
                                            placeholder="Enter Email address" aria-label="Recipient's username"
                                            aria-describedby="button-addon2">

                                        <button class="btn btn-primary" type="button" id="button-addon2">
                                            <i class="bx bxs-paper-plane"></i>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end modal -->

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        2022 © Skote.
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end d-none d-sm-block">
                            Design &amp; Develop by Themesbrand
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <!-- end main content-->

</div>
<!-- END layout-wrapper -->

<!-- Right Sidebar -->
<div class="right-bar">
    <div data-simplebar="init" class="h-100">
        <div class="simplebar-wrapper" style="margin: 0px;">
            <div class="simplebar-height-auto-observer-wrapper">
                <div class="simplebar-height-auto-observer"></div>
            </div>
            <div class="simplebar-mask">
                <div class="simplebar-offset" style="right: -17px; bottom: 0px;">
                    <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden scroll;">
                        <div class="simplebar-content" style="padding: 0px;">
                            <div class="rightbar-title d-flex align-items-center px-3 py-4">

                                <h5 class="m-0 me-2">Settings</h5>

                                <a href="javascript:void(0);" class="right-bar-toggle ms-auto">
                                    <i class="mdi mdi-close noti-icon"></i>
                                </a>
                            </div>

                            <!-- Settings -->
                            <hr class="mt-0">
                            <h6 class="text-center mb-0">Choose Layouts</h6>

                            <div class="p-4">
                                <div class="mb-2">
                                    <img src="@/assets/elements/layout-1.jpg"
                                        class="img-thumbnail" alt="layout images">
                                </div>

                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input theme-choice" type="checkbox"
                                        id="light-mode-switch" checked="checked">
                                    <label class="form-check-label" for="light-mode-switch">Light Mode</label>
                                </div>

                                <div class="mb-2">
                                    <img src="@/assets/elements/layout-2.jpg"
                                        class="img-thumbnail" alt="layout images">
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input theme-choice" type="checkbox"
                                        id="dark-mode-switch">
                                    <label class="form-check-label" for="dark-mode-switch">Dark Mode</label>
                                </div>

                                <div class="mb-2">
                                    <img src="@/assets/elements/layout-3.jpg"
                                        class="img-thumbnail" alt="layout images">
                                </div>
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input theme-choice" type="checkbox"
                                        id="rtl-mode-switch">
                                    <label class="form-check-label" for="rtl-mode-switch">RTL Mode</label>
                                </div>

                                <div class="mb-2">
                                    <img src="@/assets/elements/layout-4.jpg"
                                        class="img-thumbnail" alt="layout images">
                                </div>
                                <div class="form-check form-switch mb-5">
                                    <input class="form-check-input theme-choice" type="checkbox"
                                        id="dark-rtl-mode-switch">
                                    <label class="form-check-label" for="dark-rtl-mode-switch">Dark RTL Mode</label>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="simplebar-placeholder" style="width: auto; height: 1064px;"></div>
        </div>
        <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
            <div class="simplebar-scrollbar" style="transform: translate3d(0px, 0px, 0px); display: none;"></div>
        </div>
        <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
            <div class="simplebar-scrollbar"
                style="height: 878px; transform: translate3d(0px, 0px, 0px); display: block;"></div>
        </div>
    </div> <!-- end slimscroll-menu-->
</div>
<!-- /Right-bar -->

<!-- Right bar overlay-->
<div class="rightbar-overlay"></div>

<div id="h10-xray"></div>
<div id="h10-asin-grabber"></div>
<div id="h10-demand"></div>
<div id="h10-inventory"></div>
<div id="h10-profitability-calculator"></div>
<div id="h10-review"></div>
<div id="h10-xray-walmart"></div><svg id="SvgjsSvg1169" width="2" height="0" xmlns="http://www.w3.org/2000/svg"
    version="1.1" xlink="http://www.w3.org/1999/xlink" svgjs="http://svgjs.com/svgjs"
    style="overflow: hidden; top: -100%; left: -100%; position: absolute; opacity: 0;">
    <defs id="SvgjsDefs1170"></defs>
    <polyline id="SvgjsPolyline1171" points="0,0"></polyline>
    <path id="SvgjsPath1172" d="M0 0 "></path>
</svg>
</body>
</template>

<script>
export default {};
</script>

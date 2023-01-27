

$(() => {

    // show content related
    const $contentItems = $('.content-item');
    const showContentClass = 'show-content';
    // individual content variables
    const $homeContent = $('#home');
    const $bioContent = $('#bio');
    const $skillsContent = $('#skills');
    const $projectContent = $('#projects');
    
    // active class related
    const $navItems = $('.nav-item');
    const navActiveClass = 'nav-active';
    // individual nav items
    const $navItemHome = $('#nav-home');
    const $navItemBio = $('#nav-bio');
    const $navItemSkills = $('#nav-skills');
    const $navItemProjects = $('#nav-projects');
    // individual mobile nav items
    const $mobileNavItemHome = $('#m-nav-home');
    const $mobileNavItemBio = $('#m-nav-bio');
    const $mobileNavItemSkills = $('#m-nav-skills');
    const $mobileNavItemProjects = $('#m-nav-projects');

    const showMainContent = (contentToShow, displayClass) => {
        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove(displayClass);
        }

        contentToShow.addClass(displayClass);
    }

    const navItemActive = (navItem, activeClass) => {
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove(activeClass);
        }
        $(navItem).addClass(activeClass);
    }

    // these control the nav bar and what content is shown
    $('#nav-home').on('click', () => {
        navItemActive($navItemHome, navActiveClass);
        showMainContent($homeContent, showContentClass);
    })

    $('#nav-bio').on('click', () => {
        navItemActive($navItemBio, navActiveClass);
        showMainContent($bioContent, showContentClass);
    })

    $('#nav-skills').on('click', () => {
        navItemActive($navItemSkills, navActiveClass);
        showMainContent($skillsContent, showContentClass);
    })

    $('#nav-projects').on('click', () => {
        navItemActive($navItemProjects, navActiveClass);
        showMainContent($projectContent, showContentClass);
    })

    // for mobile menu
    $('#m-nav-home').on('click', () => {
        navItemActive($mobileNavItemHome, navActiveClass);
        showMainContent($homeContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })
    $('#m-nav-bio').on('click', () => {
        navItemActive($mobileNavItemBio, navActiveClass);
        showMainContent($bioContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })
    $('#m-nav-skills').on('click', () => {
        navItemActive($mobileNavItemSkills, navActiveClass);
        showMainContent($skillsContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })
    $('#m-nav-projects').on('click', () => {
        navItemActive($mobileNavItemProjects, navActiveClass);
        showMainContent($projectContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })

    // mobile menu open/close functionality
    $('#three-dots').on('click', () => {
        $('#mobile-menu').addClass('mm-show')
    })
    
    $('.menu-close').on('click', () => {
        $('#mobile-menu').removeClass('mm-show')
    })
})
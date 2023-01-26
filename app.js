

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
    const $navItemResume = $('#nav-resume');
    const $navItemProjects = $('#nav-projects');
    // individual mobile nav items
    const $mobileNavItemHome = $('#m-nav-home');
    const $mobileNavItemBio = $('#m-nav-bio');
    const $mobileNavItemResume = $('#m-nav-resume');
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

    $('#nav-resume').on('click', () => {
        navItemActive($navItemResume, navActiveClass);
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
    $('#m-nav-resume').on('click', () => {
        navItemActive($mobileNavItemResume, navActiveClass);
        showMainContent($skillsContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })
    $('#m-nav-projects').on('click', () => {
        navItemActive($mobileNavItemProjects, navActiveClass);
        showMainContent($projectContent, showContentClass);
        $('#mobile-menu').removeClass('mm-show')
    })

    // project carousel logic
    let currentProjectIndex = 0;
    let numOfProjectItems = $('.carousel-projects').children().length -1;

    $('.next').on('click', () => {
        $('.carousel-projects').children().eq(currentProjectIndex).removeClass('show-project');
        if (currentProjectIndex < numOfProjectItems) {
            currentProjectIndex++
        } else {
            currentProjectIndex = 0
        }
        $('.carousel-projects').children().eq(currentProjectIndex).addClass('show-project');
    })

    $('.previous').on('click', () => {
        $('.carousel-projects').children().eq(currentProjectIndex).removeClass('show-project');
        if (currentProjectIndex > 0) {
            currentProjectIndex--
        } else {
            currentProjectIndex = numOfProjectItems
        }
        $('.carousel-projects').children().eq(currentProjectIndex).addClass('show-project');
    })

    // modal functionality
    $('#reveal-1').on('click', () => {
        $('#project-1').addClass('show-modal');
    });
    $('#close-project-1').on('click', () => {
        $('#project-1').removeClass('show-modal');
    });

    $('#reveal-2').on('click', () => {
        $('#project-2').addClass('show-modal');
    })
    $('#close-project-2').on('click', () => {
        $('#project-2').removeClass('show-modal');
    })

    $('#reveal-3').on('click', () => {
        $('#project-3').addClass('show-modal');
    })
    $('#close-project-3').on('click', () => {
        $('#project-3').removeClass('show-modal');
    })

    // Allows user to close modal by clicking outside modal area background
    $('body').on('click', (e) => {
        if ($(e.target).hasClass('show-modal')) {
            $(e.target).removeClass('show-modal');
        }
    })


    const openJob = () => {
        $('#job-container').toggle("slow");
    }

    const openSkills = () => {
        $('#technologies-container').toggleClass("tech-skills-open");
    }
    // recent job toggle
    $('#recent-job').click(openJob);

    // skills toggle
    $('#skills').click(openSkills);

    $('#three-dots').on('click', () => {
        $('#mobile-menu').addClass('mm-show')
    })
    
    $('.menu-close').on('click', () => {
        $('#mobile-menu').removeClass('mm-show')
    })
})

$(() => {

    // these control the nav bar and what content is shown
    $('#nav-home').on('click', () => {
        
        const $navItems = $('.nav-item');
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove("nav-active");
        }
        $('#nav-home').addClass("nav-active");

        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#home').addClass('show-content');
    })

    $('#nav-bio').on('click', () => {
        const $navItems = $('.nav-item');
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove("nav-active");
        }
        $('#nav-bio').addClass("nav-active");


        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#bio').addClass('show-content');
    })

    $('#nav-resume').on('click', () => {
        const $navItems = $('.nav-item');
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove("nav-active");
        }
        $('#nav-resume').addClass("nav-active");

        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#resume').addClass('show-content');
    })

    $('#nav-projects').on('click', () => {
        const $navItems = $('.nav-item');
        for (let i = 0; i < $navItems.length; i++) {
            const objectClassCollection = $navItems[i].classList;
            objectClassCollection.remove("nav-active");
        }
        $('#nav-projects').addClass("nav-active");

        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#projects').addClass('show-content');
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
            $(event.target).removeClass('show-modal');
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
})
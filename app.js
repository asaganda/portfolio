
$(() => {
    // $('#nav-bio').on('click', () => {
    //     $('#bio').css('display', 'block');
    // })
    // $('#nav-resume').on('click', () => {
    //     $('#resume').css('display', 'block');
    // })
    // $('#nav-projects').on('click', () => {
    //     $('#projects').css('display', 'block');
    // })
    
    // these control the nav bar and what content is shown
    $('#nav-home').on('click', () => {
        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#home').addClass('show-content');
    })

    $('#nav-bio').on('click', () => {
        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#bio').addClass('show-content');
    })

    $('#nav-resume').on('click', () => {
        const $contentItems = $('.content-item');

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
        }

        $('#resume').addClass('show-content');
    })

    $('#nav-projects').on('click', () => {
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
})
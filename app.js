
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
    
    $('#nav-home').on('click', () => {
        const $contentItems = $('.content-item');
        console.log($contentItems)

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
            // prints each content classList
            console.log(objectClassesCollection);
        }

        $('#home').addClass('show-content');
    })

    $('#nav-bio').on('click', () => {
        const $contentItems = $('.content-item');
        console.log($contentItems)

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
            // prints each content classList
            console.log(objectClassesCollection);
        }

        $('#bio').addClass('show-content');
    })

    $('#nav-resume').on('click', () => {
        const $contentItems = $('.content-item');
        console.log($contentItems)

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
            // prints each content classList
            console.log(objectClassesCollection);
        }

        $('#resume').addClass('show-content');
    })

    $('#nav-projects').on('click', () => {
        const $contentItems = $('.content-item');
        console.log($contentItems)

        for (let i = 0; i < $contentItems.length; i++) {
            const objectClassesCollection = $contentItems[i].classList;
            objectClassesCollection.remove("show-content");
            // prints each content classList
            console.log(objectClassesCollection);
        }

        $('#projects').addClass('show-content');
    })
})
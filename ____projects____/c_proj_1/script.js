document.addEventListener('DOMContentLoaded', function () {

    console.log('script is runing...')

    let homeSection = document.getElementById('home')
    let aboutSection = document.getElementById('about')
    let servicesSection = document.getElementById('services')
    let portfolioSection = document.getElementById('portfolio')
    let contactSection = document.getElementById('contact')
    let btnCollection = document.getElementsByClassName('btn')
    let menuIcon = document.getElementById('menu-icon')
    let navbar = document.querySelector('.navbar')
    let moodChange = document.getElementById('mood-change')


    let homeAnchor = document.getElementById('Homee')
    homeAnchor.classList.add('active')
    aboutSection.style.display = 'none'
    servicesSection.style.display = 'none'
    portfolioSection.style.display = 'none'
    contactSection.style.display = 'none'

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }
    if (moodChange.classList.contains('bxs-moon')) {
        console.log('ok night bright mood');
        // Changing to light mode
        // JavaScript to change CSS variable values
        document.documentElement.style.setProperty('--bg-color', ' #c7c7c7');
        document.documentElement.style.setProperty('--second--bg-color', '#fafafa');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--main-color', 'rgb(54, 172, 30)');
    } else if (moodChange.classList.contains('bx-brightness')) {
        console.log('ok dark mood');
        // Changing to dark mode
        // JavaScript to change CSS variable values
        document.documentElement.style.setProperty('--bg-color', '#1f242d');
        document.documentElement.style.setProperty('--second--bg-color', '#323946');
        document.documentElement.style.setProperty('--text-color', '#fff');
        document.documentElement.style.setProperty('--main-color', '#0ef');
    }
    moodChange.addEventListener('click', (event) => {
        event.preventDefault();
        moodChange.classList.toggle('bx-brightness');
        moodChange.classList.toggle('bxs-moon');

        if (moodChange.classList.contains('bxs-moon')) {
            console.log('ok night bright mood');
            // Changing to light mode
            // JavaScript to change CSS variable values
            document.documentElement.style.setProperty('--bg-color', ' #c7c7c7');
            document.documentElement.style.setProperty('--second--bg-color', '#fafafa');
            document.documentElement.style.setProperty('--text-color', '#000000');
            document.documentElement.style.setProperty('--main-color', 'rgb(54, 172, 30)');
        } else if (moodChange.classList.contains('bx-brightness')) {
            console.log('ok dark mood');
            // Changing to dark mode
            // JavaScript to change CSS variable values
            document.documentElement.style.setProperty('--bg-color', '#1f242d');
            document.documentElement.style.setProperty('--second--bg-color', '#323946');
            document.documentElement.style.setProperty('--text-color', '#fff');
            document.documentElement.style.setProperty('--main-color', '#0ef');
        }
    });
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer.', 'Backend Developer.', 'Web Developer.', 'MongoDB User.', 'Node.js Expert.'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })

    const btnArray = Array.from(btnCollection);
    btnArray.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('ok');
        });
    });


    // Assuming you're getting an HTMLCollection of anchor elements
    const anchorCollection = document.getElementsByTagName('a');

    // Convert the HTMLCollection into an array to use forEach
    const anchorArray = Array.from(anchorCollection);

    anchorArray.forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            navbar.classList.toggle('active')
            menuIcon.classList.toggle('bx-x')
            if (anchor.className == 'Home') {
                anchorArray.forEach((anchor) => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
                aboutSection.style.display = 'none'
                portfolioSection.style.display = 'none'
                servicesSection.style.display = 'none'
                contactSection.style.display = 'none'
                homeSection.style.display = 'flex'
            }
            else if (anchor.className == 'About') {
                anchorArray.forEach((anchor) => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
                homeSection.style.display = 'none'
                servicesSection.style.display = 'none'
                portfolioSection.style.display = 'none'
                contactSection.style.display = 'none'
                aboutSection.style.display = 'flex'
            }
            else if (anchor.className == 'Services') {
                anchorArray.forEach((anchor) => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
                homeSection.style.display = 'none'
                aboutSection.style.display = 'none'
                portfolioSection.style.display = 'none'
                contactSection.style.display = 'none'
                servicesSection.style.display = 'flex'
            }
            else if (anchor.className == 'Portfolio') {
                anchorArray.forEach((anchor) => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
                homeSection.style.display = 'none'
                aboutSection.style.display = 'none'
                servicesSection.style.display = 'none'
                contactSection.style.display = 'none'
                portfolioSection.style.display = 'grid'
            }
            else if (anchor.className == 'Contact') {
                anchorArray.forEach((anchor) => {
                    anchor.classList.remove('active')
                })
                anchor.classList.add('active')
                homeSection.style.display = 'none'
                aboutSection.style.display = 'none'
                servicesSection.style.display = 'none'
                portfolioSection.style.display = 'none'
                contactSection.style.display = 'block'
            }
        });
    });


    //type.js


})




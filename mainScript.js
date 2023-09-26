const menuIcon = document.querySelector('#menu-icon')
const section = document.getElementsByTagName("section")
const menuItems = document.getElementById('navbar')
const navLinks = document.querySelectorAll('#navbar a');
const allMenuitems = document.getElementsByTagName('a')
const homeSection = document.getElementById('home-section')
const aboutSection = document.getElementById('about-section')
const workdomainSection = document.getElementById('workdomain-section')
const projectSection = document.getElementById('project-section')
const teamSection = document.getElementById('team-section')
const headerSection = document.getElementById('header')
const contactSection = document.getElementById('contact-section')
const talkSection = document.getElementById('talk-section')
const headerVideoContainer = document.getElementById('videoContainer')
const mailIcon = document.getElementById('mail')
const talkBtn = document.getElementById('talk-btn')
const footer = document.getElementById('footer')
const footerHome = document.getElementById('footer-home')
const footerAbout = document.getElementById('footer-about')
const footerWorkdomain = document.getElementById('footer-workdomain')
const footerProjects = document.getElementById('footer-projects')
const footerOurTeam = document.getElementById('footer-ourteam')
const footerContact = document.getElementById('footer-contact')
const footertalk = document.getElementById('footer-talk')
const talkMailLink = document.getElementById('talk-mail')
const homeFristVideo = document.getElementById("video1");
const videoArray = [video1, video2, video3, video4, video5, video6, video7, video7]
const SectionArray = [headerVideoContainer,homeSection, aboutSection, workdomainSection,  projectSection, teamSection, contactSection, talkSection]
const scrollButton = document.getElementById("footer-hider");
// Add a click event listener to the button
    // Scroll to the end of the page
    // window.scrollTo(0, document.documentElement.scrollHeight);
    function scrollToPageEnd() {
        var pageHeight = document.documentElement.scrollHeight;
        var scrollStep = 20; // Scroll step in pixels
        var scrollInterval = 10; // Scroll interval in milliseconds

        function scroll() {
            if (window.scrollY + window.innerHeight < pageHeight) {
                window.scrollTo(0, window.scrollY + scrollStep);
                requestAnimationFrame(scroll);
            } else {
                scrollButton.style.display = "none";
                footer.style.display = "flex";
            }
        }
        
        // Start the scrolling animation
        scroll();
    }
// Function to check if the scrollbar is at the end of a scrollable element
    function scrollEnd(){
        window.addEventListener("scroll", function() {
            if ( window.scrollY + window.innerHeight == document.documentElement.scrollHeight) {
                scrollButton.style.display = "none";
                footer.style.display = "flex";
            }
        });
    }
    // Add a click event listener to the button
    scrollButton.addEventListener("click", scrollToPageEnd);
    window.addEventListener("scroll", function() {
        if ( window.scrollY + window.innerHeight < document.documentElement.scrollHeight) {
            scrollButton.style.display = "flex";
            footer.style.display = "none";
        }
    });

const hrefArray = [];
navLinks.forEach(link => {
    hrefArray.push(link.getAttribute('href'));
});
hrefArray.push(talkBtn)

window.addEventListener('load', () => {
    for (let i = 0; i <= 7; i++) {
        SectionArray[i].style.display = 'none'
    }
    menuItems.classList.add('hide')
    menuItems.style.display = 'none'
    footer.style.display = 'none'
    const laoder = document.querySelector('.laoder')
    laoder.classList.add('laoder--hide')
    laoder.addEventListener('transitionend', () => {
        headerVideoContainer.style.display = 'flex'
        homeSection.style.display = 'flex'
        headerSection.style.display = 'flex'
        scrollButton.style.display = 'flex'
    })
})
mailIcon.addEventListener('click', () => {
    aboutSection.style.display = 'none'
    headerVideoContainer.style.display = 'none'
    homeSection.style.display = 'none'
    workdomainSection.style.display = 'none'
    projectSection.style.display = 'none'
    teamSection.style.display = 'none'
    talkSection.style.display = 'none'
    contactSection.style.display = 'flex'
})
talkMailLink.addEventListener('click', () => {
    aboutSection.style.display = 'none'
    headerVideoContainer.style.display = 'none'
    homeSection.style.display = 'none'
    workdomainSection.style.display = 'none'
    projectSection.style.display = 'none'
    teamSection.style.display = 'none'
    talkSection.style.display = 'none'
    contactSection.style.display = 'flex'
})
menuIcon.addEventListener('click', (e) => {
    e.preventDefault()
    menuIcon.classList.toggle('bx-x')
    menuIcon.classList.toggle('bx-menu')
    menuItems.classList.toggle('active_comp')
    menuItems.classList.toggle('hide')
    if (menuItems.classList.contains('hide')) {
        menuItems.style.display = 'none'

    }
    else if (menuItems.classList.contains('active_comp')) {
        menuItems.style.display = 'block'
    }
})
//handling navbar disply and active class of navbar a
let btnArray = Array.from(navLinks);
btnArray.forEach(function (btn) {
    btn.addEventListener('click', (event) => {
        btnArray.forEach((btn) => { btn.classList.remove('active') })
        btn.classList.add('active')
        event.preventDefault()
        menuIcon.classList.toggle('bx-menu')
        menuIcon.classList.toggle('bx-x')
        menuItems.classList.toggle('active_comp')
        menuItems.classList.toggle('hide')
        if (menuItems.classList.contains('hide')) { menuItems.style.display = 'none' } else if (menuItems.classList.contains('active_comp')) { menuItems.style.display = 'block' }
    })
})
talkBtn.addEventListener('click', () => {
    aboutSection.style.display = 'none'
    workdomainSection.style.display = 'none'
    projectSection.style.display = 'none'
    teamSection.style.display = 'none'
    contactSection.style.display = 'none'
    headerVideoContainer.style.display = 'none'
    homeSection.style.display = 'none'
    footer.style.display = "none";
    scrollButton.style.display = "flex";
    talkSection.style.display = 'flex'
})
btnArray.forEach(function (btn) {
    btn.addEventListener('click', () => {
        
        window.scrollTo(0, 0);
        scrollEnd()
        scrollButton.style.display = "flex";
        footer.style.display = "none";
        if (btn.classList.contains('Home')) {
            for (let i = 0; i <= 7; i++) {
                console.log(videoArray[i])
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video1.style.display = 'flex'
            video1.currentTime = 0;
            video1.play()
            video1.addEventListener("ended", function () {
                video1.style.display = 'none';
                video2.style.display = 'flex';
                video2.currentTime = 0;
                video2.play();
            });
          
            video2.addEventListener("ended", function () {
                video2.style.display = 'none';
                video3.style.display = 'flex';
                video3.currentTime = 0;
                video3.play();
            });
            
            video3.addEventListener("ended", function () {
                video3.style.display = 'none';
                video1.style.display = 'flex';
                video1.currentTime = 0;
                video1.play();
            });
            headerVideoContainer.style.display = 'flex'
            homeSection.style.display = 'flex'
        }
        if (btn.classList.contains('About')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video4.style.display = 'flex'
            video4.currentTime = 0;
            video4.play()
            aboutSection.style.display = 'flex'
        }
        if (btn.classList.contains('working-domain')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video5.style.display = 'flex'
            video5.currentTime = 0;
            video5.play()
            workdomainSection.style.display = 'flex'
        }
        if (btn.classList.contains('Projects')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video6.style.display = 'flex'
            video6.currentTime = 0;
            video6.play()
            projectSection.style.display = 'flex'
        }
        if (btn.classList.contains('our-team')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video7.style.display = 'flex'
            video7.currentTime = 0;
            video7.play()
            teamSection.style.display = 'flex'
        }
        if (btn.classList.contains('Contact')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            video8.style.display = 'flex'
            video8.currentTime = 0;
            video8.play()
            contactSection.style.display = 'flex'
        }
        if (btn.classList.contains('talk-section')) {
            for (let i = 0; i <= 7; i++) {
                videoArray[i].pause()
                videoArray[i].style.display = 'none'
                SectionArray[i].style.display = 'none'
            }
            talkSection.style.display = 'flex'
        }
    })
})

footerHome.addEventListener('click', () => {
    for (let i = 0; i <= 7; i++) {
        console.log(videoArray[i])
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    footer.style.display = "none";
    window.scrollTo(0, 0);
    scrollButton.style.display = "flex";
    video1.style.display = 'flex'
    video1.currentTime = 0;
    video1.play()
    video1.addEventListener("ended", function () {
        video1.style.display = 'none';
        video2.style.display = 'flex';
            video2.currentTime = 0;
            video2.play();
    });
  
    video2.addEventListener("ended", function () {
        video2.style.display = 'none';
        video3.style.display = 'flex';
            video3.currentTime = 0;
            video3.play();
    });
  
    video3.addEventListener("ended", function () {
        video3.style.display = 'none';
        video1.style.display = 'flex';
            video1.currentTime = 0;
            video1.play();
    });
    headerVideoContainer.style.display = 'flex'
    homeSection.style.display = 'flex'
})
footerAbout.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    video4.style.display = 'flex'
    video4.currentTime = 0;
    video4.play()
    footer.style.display = "none";
    window.scrollTo(0, 0);
    scrollButton.style.display = "flex";
    aboutSection.style.display = 'flex'
})
footerWorkdomain.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    video5.style.display = 'flex'
            video5.currentTime = 0;
            video5.play()
            footer.style.display = "none";
            window.scrollTo(0, 0);
            scrollButton.style.display = "flex";
    workdomainSection.style.display = 'flex'
})
footerProjects.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    video6.style.display = 'flex'
            video6.currentTime = 0;
            video6.play()
            footer.style.display = "none";
            window.scrollTo(0, 0);
            scrollButton.style.display = "flex";
    projectSection.style.display = 'flex'
})
footerOurTeam.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    video7.style.display = 'flex'
            video7.currentTime = 0;
            video7.play()
            footer.style.display = "none";
            window.scrollTo(0, 0);
            scrollButton.style.display = "flex";
    teamSection.style.display = 'flex'
})
footerContact.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    video8.style.display = 'flex'
            video8.currentTime = 0;
            video8.play()
            footer.style.display = "none";
            window.scrollTo(0, 0);
            scrollButton.style.display = "flex";
    contactSection.style.display = 'flex'
})
footertalk.addEventListener('click', ()=>{
    for (let i = 0; i <= 7; i++) {
        videoArray[i].pause()
        videoArray[i].style.display = 'none'
        SectionArray[i].style.display = 'none'
    }
    footer.style.display = "none";
    window.scrollTo(0, 0);
    scrollButton.style.display = "flex";
    talkSection.style.display = 'flex'
})



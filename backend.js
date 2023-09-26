let phoneIcon = document.getElementById('phone')
let facebookIcon = document.getElementById('facebook')
let instagramIcon = document.getElementById('instagram')
let linkedinIcon = document.getElementById('linkedin')
let whatsappIcon = document.getElementById('whatsapp')
let talkPhoneLink = document.getElementById('talk-phone')
let talkWhatsAppLink = document.getElementById('talk-whatsapp')
let talkTelegramLink = document.getElementById('talk-telegram')
let talkWeChatLink = document.getElementById('talk-wechat')
let talkFacebookLink = document.getElementById('talk-facebook')
let talkInstagramLink = document.getElementById('talk-instagram')
let talkLinkedInLink = document.getElementById('talk-linkedin')
let windowWidth = 800;
let windowHeight = 600;

// Calculate the center position of the screen
let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let windowLeft = (screenWidth - windowWidth) / 2;
let windowTop = (screenHeight - windowHeight) / 2;

// Construct window options
let windowOptions = "width=" + windowWidth + ",height=" + windowHeight + ",left=" + windowLeft + ",top=" + windowTop + ",menubar=no,toolbar=no";

whatsappIcon.addEventListener('click', () => {
    let whatsappLink = 'https://wa.me/923060508566'
    window.open(whatsappLink, "_blank", windowOptions);
})
talkWhatsAppLink.addEventListener('click', () => {
    let whatsappLink = 'https://wa.me/923060508566'
    window.open(whatsappLink, "_blank", windowOptions);
})
talkTelegramLink.addEventListener('click', () => {
    let TelegramLink = 'https://t.me/eastneural'
    window.open(TelegramLink, "_blank", windowOptions);
})
talkWeChatLink.addEventListener('click', () => {
    let WechatLink = 'weixin://dl/chat?eastneural'
    window.open(WechatLink, "_blank", windowOptions);
})
facebookIcon.addEventListener('click', () => {
    let facebookLink = 'https://www.facebook.com/profile.php?id=61550695084876'
    window.open(facebookLink, "_blank", windowOptions);
})
talkFacebookLink.addEventListener('click', () => {
    let facebookLink = 'https://www.facebook.com/profile.php?id=61550695084876'
    window.open(facebookLink, "_blank", windowOptions);
})
linkedinIcon.addEventListener('click', () => {
    let linkedinLink = 'https://www.linkedin.com/company/eastneural'
    window.open(linkedinLink, "_blank", windowOptions);
})
talkLinkedInLink.addEventListener('click', () => {
    let linkedinLink = 'https://www.linkedin.com/company/eastneural'
    window.open(linkedinLink, "_blank", windowOptions);
})
instagramIcon.addEventListener('click', () => {
    let instagramLink = 'https://instagram.com/east.neural?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'
    window.open(instagramLink, "_blank", windowOptions);
})
talkInstagramLink.addEventListener('click', () => {
    let instagramLink = 'https://instagram.com/east.neural?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D'
    window.open(instagramLink, "_blank", windowOptions);
})
phoneIcon.addEventListener('click', () => {
    const phoneNumber = "+923060508566"; // Replace with the actual phone number
    window.location.href = "tel:" + phoneNumber;
})
talkPhoneLink.addEventListener('click', () => {
    const phoneNumber = "+923060508566"; // Replace with the actual phone number
    window.location.href = "tel:" + phoneNumber;
})
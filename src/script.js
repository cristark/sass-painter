import Vue from 'vue';

let app = new Vue({
    el: '#app',
    data: {
        hoverCounter: 0,
        headerMenu: ['Products','Wacom Tablets','Special Offers','Free Trials','Business','Support','Learning'],
        productsDrop: ['Digital Painting','Licensing & Education','Mobile Apps','Wacom Tablets'],
        digPaintDrop1: ['Painter 2021 (Windows/Mac)','ParticleShop (Photoshop brush plugin)','Painter Essentials 8 (Windows/Mac)'],
        digPaintDrop2: {
                name: 'App Store Editions',
                drop: ['Painter Store Edition (Windows)','Painter Store Edition (Mac)','Painter Essentials Store Edition (Windows)','Painter Essentials Store Edition (Mac)']
            },
        eduDrop: ['Painter 2021 - Corporate License','Painter 2021 - Education License','Painter 2021 - Education Edition'],
        mobileDrop: ['Painter Mobile (Android)','Paint it! Now (iPhone)','Paint it! Show (iPad)'],
        wacomDrop: ['Wacom/Painter Offers','Cintiq Pro 16 + Painter 2021','Cintiq 22HD + Painter 2021','Intuos Pro Medium + Painter 2021','Intuos Pro Large + Painter 2021','Cintiq 16 Creative Pen Display + Painter 2021','One Creative Pen Display + Painter 2021','Bamboo Duo Stylus','Wacom Pro Pen 2 with Case'],
        brushesDrop: ['Painter','ParticleShop','Painter Essentials'],
        supportDrop: ['Patches & Updates','Knowledgebase','View all'],
        learningDrop: ['Tutorials','Tips & Tricks','Artist Interviews','Webinar Library']

    }
});
const civilAircrafts = [
    'avion-civil-1.jpg',
    'avion-civil-2.jpg',
    'avion-civil-3.jpg',
    'avion-civil-4.jpg',
    'avion-civil-5.jpg'
].map(image => `assets/${image}`);

const militaryAircrafts = [
    'avion-militar-1.jpg',
    'avion-militar-2.jpg',
    'avion-militar-3.jpg',
    'avion-militar-4.jpg',
    'avion-militar-5.jpg'
].map(image => `assets/${image}`);

const civilHelicopters = [
    'helicoptero-civil-1.jpg',
    'helicoptero-civil-2.jpg',
    'helicoptero-civil-3.jpg',
    'helicoptero-civil-4.jpg',
    'helicoptero-civil-5.jpg'
].map(image => `assets/${image}`);

const militaryHelicopter = [
    'helicoptero-militar-1.jpg',
    'helicoptero-militar-2.jpg',
    'helicoptero-militar-3.jpg',
    'helicoptero-militar-4.jpg',
    'helicoptero-militar-5.jpg'
].map(image => `assets/${image}`);

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil() {
        const randomIndex = Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[randomIndex];
    }

    getRandomMilitary() {
        const randomIndex = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[randomIndex];
    }

    getAll() {
        return [...this.civilImages, ...this.militaryImages];
    }
}

class Painter {
    constructor() {
        this.galleryContainer = document.createElement('div');
        this.galleryContainer.id = 'gallery';
        document.body.appendChild(this.galleryContainer);
    }

    createGallery(images) {
        this.clearGallery();
        images.forEach(imageUrl => {
            const imgTag = this.createImageTag(imageUrl);
            this.galleryContainer.appendChild(imgTag);
        });
    }

    createImageTag(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Image not found';
        img.classList.add('gallery-image');
        return img;
    }

    paintSingleImage(imageUrl) {
        this.clearGallery();
        const imgTag = this.createImageTag(imageUrl);
        this.galleryContainer.appendChild(imgTag);
    }

    paintMultipleImages(arrayOfImages) {
        this.clearGallery();
        arrayOfImages.forEach(imageUrl => {
            const imgTag = this.createImageTag(imageUrl);
            this.galleryContainer.appendChild(imgTag);
        });
    }

    clearGallery() {
        this.galleryContainer.innerHTML = '';
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

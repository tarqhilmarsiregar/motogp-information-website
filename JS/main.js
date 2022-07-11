let tahunMotoGP = document.querySelectorAll('.tahun-gp');
for(let tahun of tahunMotoGP) {
    tahun.addEventListener('click', function(event) {
        if(event.target.classList.contains('2022')) {
            let imageElement = document.querySelector('.pembalap-tim-motogp img');
            imageElement.setAttribute('src', 'aset/images/daftar-pembalap-motogp-2022.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-gp .satu').classList.remove('active');
            document.querySelector('.tahun-gp .nol').classList.remove('active');
            document.querySelector('.tahun-gp .sembilan').classList.remove('active');

        } else if(event.target.classList.contains('2021')) {
            let imageElement = document.querySelector('.pembalap-tim-motogp img');
            imageElement.setAttribute('src', 'aset/images/daftar-pembalap-motogp-2021.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-gp .dua').classList.remove('active');
            document.querySelector('.tahun-gp .nol').classList.remove('active');
            document.querySelector('.tahun-gp .sembilan').classList.remove('active');                        
        } else if(event.target.classList.contains('2020')) {
            let imageElement = document.querySelector('.pembalap-tim-motogp img');
            imageElement.setAttribute('src', 'aset/images/daftar-pembalap-motogp-2020.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-gp .dua').classList.remove('active');
            document.querySelector('.tahun-gp .satu').classList.remove('active');
            document.querySelector('.tahun-gp .sembilan').classList.remove('active');                                    
        } else if(event.target.classList.contains('2019')) {
            let imageElement = document.querySelector('.pembalap-tim-motogp img');
            imageElement.setAttribute('src', 'aset/images/daftar-pembalap-motogp-2019.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-gp .dua').classList.remove('active');
            document.querySelector('.tahun-gp .satu').classList.remove('active');
            document.querySelector('.tahun-gp .nol').classList.remove('active');                        
        }
    });
}

let tahunMoto2 = document.querySelectorAll('.tahun-2');
for(let tahun of tahunMoto2) {
    tahun.addEventListener('click', function(event) {
        if(event.target.classList.contains('2022')) {
            let imageElement = document.querySelector('.pembalap-tim-moto2 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto2-2022.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-2 .satu').classList.remove('active');
            document.querySelector('.tahun-2 .nol').classList.remove('active');
            document.querySelector('.tahun-2 .sembilan').classList.remove('active');                        
        } else if(event.target.classList.contains('2021')) {
            let imageElement = document.querySelector('.pembalap-tim-moto2 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto2-2021.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-2 .dua').classList.remove('active');
            document.querySelector('.tahun-2 .nol').classList.remove('active');
            document.querySelector('.tahun-2 .sembilan').classList.remove('active');                        
        } else if(event.target.classList.contains('2020')) {
            let imageElement = document.querySelector('.pembalap-tim-moto2 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto2-2020.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-2 .dua').classList.remove('active');
            document.querySelector('.tahun-2 .satu').classList.remove('active');
            document.querySelector('.tahun-2 .sembilan').classList.remove('active');                        
        } else if(event.target.classList.contains('2019')) {
            let imageElement = document.querySelector('.pembalap-tim-moto2 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto2-2019.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-2 .dua').classList.remove('active');
            document.querySelector('.tahun-2 .satu').classList.remove('active');
            document.querySelector('.tahun-2 .nol').classList.remove('active');                        
        }
    });
}

let tahunMoto3 = document.querySelectorAll('.tahun-3');
for(let tahun of tahunMoto3) {
    tahun.addEventListener('click', function(event) {
        if(event.target.classList.contains('2022')) {
            let imageElement = document.querySelector('.pembalap-tim-moto3 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto3-2022.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-3 .satu').classList.remove('active');
            document.querySelector('.tahun-3 .nol').classList.remove('active');
            document.querySelector('.tahun-3 .sembilan').classList.remove('active');                        
        } if(event.target.classList.contains('2021')) {
            let imageElement = document.querySelector('.pembalap-tim-moto3 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto3-2021.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-3 .dua').classList.remove('active');
            document.querySelector('.tahun-3 .nol').classList.remove('active');
            document.querySelector('.tahun-3 .sembilan').classList.remove('active');                        
        } if(event.target.classList.contains('2020')) {
            let imageElement = document.querySelector('.pembalap-tim-moto3 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto3-2020.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-3 .dua').classList.remove('active');
            document.querySelector('.tahun-3 .satu').classList.remove('active');
            document.querySelector('.tahun-3 .sembilan').classList.remove('active');                        
        } if(event.target.classList.contains('2019')) {
            let imageElement = document.querySelector('.pembalap-tim-moto3 img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-moto3-2019.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-3 .dua').classList.remove('active');
            document.querySelector('.tahun-3 .satu').classList.remove('active');
            document.querySelector('.tahun-3 .nol').classList.remove('active');                        
        }
    });
}

let tahunMotoE = document.querySelectorAll('.tahun-e');
for(let tahun of tahunMotoE) {
    tahun.addEventListener('click', function(event) {
        if(event.target.classList.contains('2022')) {
            let imageElement = document.querySelector('.pembalap-tim-motoe img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-motoe-2022.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-e .satu').classList.remove('active');
            document.querySelector('.tahun-e .nol').classList.remove('active');
            document.querySelector('.tahun-e .sembilan').classList.remove('active');                        
        } else if(event.target.classList.contains('2021')) {
            let imageElement = document.querySelector('.pembalap-tim-motoe img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-motoe-2021.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-e .dua').classList.remove('active');
            document.querySelector('.tahun-e .nol').classList.remove('active');
            document.querySelector('.tahun-e .sembilan').classList.remove('active');            
        } else if(event.target.classList.contains('2020')) {
            let imageElement = document.querySelector('.pembalap-tim-motoe img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-motoe-2020.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-e .dua').classList.remove('active');
            document.querySelector('.tahun-e .satu').classList.remove('active');
            document.querySelector('.tahun-e .sembilan').classList.remove('active');            
        } else if(event.target.classList.contains('2019')) {
            let imageElement = document.querySelector('.pembalap-tim-motoe img');
            imageElement.setAttribute('src', 'aset/images/daftar-tim-motoe-2019.PNG');
            event.target.classList.toggle('active');
            document.querySelector('.tahun-e .dua').classList.remove('active');
            document.querySelector('.tahun-e .satu').classList.remove('active');
            document.querySelector('.tahun-e .nol').classList.remove('active');            
        }
    });
}

let HamburgerMenu = document.querySelector('img.hamburger-menu');
HamburgerMenu.addEventListener('click', function(event) {
       document.querySelector('header nav ul').classList.toggle('toggle');
       return;
});

let dropDowns = document.querySelectorAll('.dropDown');
for(dropDown of dropDowns) {
    dropDown.addEventListener('mouseover', function(event) {
        if(event.target.classList.contains('daftar-juara')) {
            let listDJ = document.querySelector('#list-dj ul');
            listDJ.classList.toggle('sub-nav');
        } else if(event.target.classList.contains('daftar-tim')) {
            let listT = document.querySelector('#list-dt ul');
            listT.classList.toggle('sub-nav');
        } else if(event.target.classList.contains('tentang')) {
            let listTentang = document.querySelector('#list-tentang ul');
            listTentang.classList.toggle('sub-nav');
        }
    });
}

for(dropDown of dropDowns) {
    dropDown.addEventListener('click', function(event) {
        if(event.target.classList.contains('daftar-juara')) {
            let listDJ = document.querySelector('#list-dj ul');
            listDJ.classList.toggle('sub-nav');
        } else if(event.target.classList.contains('daftar-tim')) {
            let listT = document.querySelector('#list-dt ul');
            listT.classList.toggle('sub-nav');
        } else if(event.target.classList.contains('tentang')) {
            let listTentang = document.querySelector('#list-tentang ul');
            listTentang.classList.toggle('sub-nav');
        }
    });
}

let Sliders = document.querySelectorAll('.sliders input[type="radio"]');
for(let Slider of Sliders) {
    Slider.addEventListener('click', function(event) {
        if(event.target.classList.contains('slider-btn1')) {
            document.querySelector('#imageSlider img').setAttribute('src', 'aset/images/sirkuit-jerez.jpeg');
        } else if(event.target.classList.contains('slider-btn2')) {
            document.querySelector('#imageSlider img').setAttribute('src', 'aset/images/sirkuit-mandalika.jpeg');
        } else if(event.target.classList.contains('slider-btn3')) {
            document.querySelector('#imageSlider img').setAttribute('src', 'aset/images/sirkuit-sachsenring.jpeg');
        } else if(event.target.classList.contains('slider-btn4')) {
            document.querySelector('#imageSlider img').setAttribute('src', 'aset/images/enea-bastianini.jpeg');
        }
    });
}
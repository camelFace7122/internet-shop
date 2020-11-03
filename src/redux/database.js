import mainBannerImage1 from './../assets/images/main-banner__image1.gif';
import mainBannerImage2 from './../assets/images/main-banner__image2.webp';
import mainBannerImage3 from './../assets/images/main-banner__image3.webp';
import mainBannerImage4 from './../assets/images/main-banner__image4.webp';
import teaserImage1 from './../assets/images/teaser-photo1.webp';
import teaserImage2 from './../assets/images/teaser-photo2.webp';
import teaserImage3 from './../assets/images/teaser-photo3.webp';
import teaserImage4 from './../assets/images/teaser-photo4.webp';
import popular1 from './../assets/images/popular1.webp';
import popular2 from './../assets/images/popular2.webp';
import popular3 from './../assets/images/popular3.webp';
import popular4 from './../assets/images/popular4.webp';
import popular5 from './../assets/images/popular5.webp';
import popular6 from './../assets/images/popular6.webp';
import popular7 from './../assets/images/popular7.webp';
import popular8 from './../assets/images/popular8.webp';
import popular9 from './../assets/images/popular9.webp';
import popular10 from './../assets/images/popular10.webp';
import popular11 from './../assets/images/popular11.webp';
import popular12 from './../assets/images/popular12.webp';
import popular13 from './../assets/images/popular13.webp';
import popular14 from './../assets/images/popular14.webp';
import popular15 from './../assets/images/popular15.webp';
import popular16 from './../assets/images/popular16.webp';
import popular17 from './../assets/images/popular17.webp';
import popular18 from './../assets/images/popular18.webp';
import popular19 from './../assets/images/popular19.webp';
import popular20 from './../assets/images/popular20.webp';
import popular21 from './../assets/images/popular21.webp';
import popular22 from './../assets/images/popular22.webp';
import popular23 from './../assets/images/popular23.webp';
import popular24 from './../assets/images/popular24.webp';
import popular25 from './../assets/images/popular25.webp';
import popular26 from './../assets/images/popular26.webp';
import popular27 from './../assets/images/popular27.webp';
import popular28 from './../assets/images/popular28.webp';
import popular29 from './../assets/images/popular29.webp';
import popular30 from './../assets/images/popular30.webp';
import teaserImage5 from './../assets/images/teaser-photo5.webp';
import teaserImage6 from './../assets/images/teaser-photo6.webp';
import teaserImage7 from './../assets/images/teaser-photo7.webp';
import knowMore1 from './../assets/images/know-more1.webp';
import knowMore2 from './../assets/images/know-more2.webp';
import knowMore3 from './../assets/images/know-more3.webp';
import knowMore4 from './../assets/images/know-more4.webp';
import wideCarousel1 from './../assets/images/wide-carousel1.webp';
import wideCarousel2 from './../assets/images/wide-carousel2.webp';

let dataBase = {
    women: {
        teaserItems: {
            teaserItem1: {
                picture: mainBannerImage1,
                title: 'Максимальные скидки',
                subtitle: 'Осталось несколько дней',
            },
            teaserItem2: {
                picture: mainBannerImage2,
                title: 'Зима уже близко',
                subtitle: 'Образы для дачи и прогулок',
            },
            teaserItem3: {
                picture: mainBannerImage3,
                title: 'Яркость на максимум',
                subtitle: 'Сочные оттенки',
            },
            teaserItem4: {
                picture: mainBannerImage4,
                title: 'Необходимая база',
                subtitle: 'Лучшие инвестиции в гардероб',
            },
            teaserItem5: {
                picture: teaserImage1,
                title: 'Скидки до 60%',
                subtitle: 'на демисезонную обувь',
            },
            teaserItem6: {
                picture: teaserImage2,
                title: 'Ставим новые рекорды',
                subtitle: 'Новая форма - лучшая мотивация',
            },
            teaserItem7: {
                picture: teaserImage3,
                title: 'Актуальные украшения',
                subtitle: 'От минимализма до стиля 90-х',
            },
            teaserItem8: {
                picture: teaserImage4,
                title: 'Как насчет рубашки?',
                subtitle: '+1 в коллекцию',
            },
            teaserItem9: {
                picture: teaserImage5,
                title: 'Большой выбор джинсов',
                subtitle: 'Тренды или база? Решайте!',
            },
            teaserItem10: {
                picture: teaserImage6,
                title: 'Домашнее время',
                subtitle: 'Украшаем и создаем уют',
            },
            teaserItem11: {
                picture: teaserImage7,
                title: 'На улицу не пойдем',
                subtitle: 'Уютная одежда для дома',
            },
        },
        knowMoreItems: {
            knowMoreItem1: {
                picture: knowMore1,
                title: 'Premium',
                subtitle: 'Порадуйте себя новинками из премиальных коллекций',
            },
            knowMoreItem2: {
                picture: knowMore2,
                title: 'OUTLET',
                subtitle: 'Коллекции одежды, обуви и аксессуаров по выгодным ценам',
            },
            knowMoreItem3: {
                picture: knowMore3,
                title: 'Мы заботимся о вас',
                subtitle: 'Мы приняли меры для обеспечения безопасного шопинга и сохранили старые цены на разные категории товаров',
            },
            knowMoreItem4: {
                picture: knowMore4,
                title: 'Косметика',
                subtitle: 'для ухода за собой и макияжаа',
            },
        },
        wideCarouselItems: {
            wideCarouselItem1: {
                picture: wideCarousel1,
                title: null,
                subtitle: null,
            },
            wideCarouselItem2: {
                picture: wideCarousel2,
                title: null,
                subtitle: null,
            },
        },
        clothes: {
            item1: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 29990,
                producer: 'Mango',
                name: 'Платье',
                availableSizes: [
                    '40/42', '42/44', '44/46'
                ],
                picture: popular1,
            },
            item2: {
                isNew: false,
                isPremium: false,
                discount: 0.2,
                price: 47000,
                producer: 'River Island',
                name: 'Шуба',
                availableSizes: [
                    '40', '42', '44', '46'
                ],
                picture: popular2,
            },
            item3: {
                isNew: false,
                isPremium: false,
                discount: 0.35,
                price: 15000,
                producer: 'Crosby',
                name: 'Кроссовки',
                availableSizes: [
                    '36', '37', '38', '39', '40', '41'
                ],
                picture: popular3,
            },
            item4: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 19500,
                producer: 'Patrol',
                name: 'Ботинки',
                availableSizes: [
                    '36', '37', '38', '39', '40'
                ],
                picture: popular4,
            },
            item5: {
                isNew: false,
                isPremium: false,
                discount: 0.71,
                price: 156190,
                producer: 'Finn Flare',
                name: 'Куртка утепленная',
                availableSizes: [
                    '48', '50'
                ],
                picture: popular5,
            },
            item6: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 59990,
                producer: 'Mango',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48'
                ],
                picture: popular6,
            },
            item7: {
                isNew: false,
                isPremium: false,
                discount: 0.15,
                price: 21500,
                producer: 'Enjoin',
                name: 'Сапоги',
                availableSizes: [
                    '36', '37', '38', '39', '40'
                ],
                picture: popular7,
            },
            item8: {
                isNew: false,
                isPremium: true,
                discount: null,
                price: 95000,
                producer: 'EA7',
                name: 'Костюм спортивный',
                availableSizes: [
                    '40/42', '42/44', '44/46'
                ],
                picture: popular8,
            },
            item9: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 97000,
                producer: 'PUMA',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48', '48/50'
                ],
                picture: popular9,
            },
            item10: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 39000,
                producer: 'Tamaris',
                name: 'Ботинки',
                availableSizes: [
                    '36', '37', '38', '39', '40', '41'
                ],
                picture: popular10,
            },
            item11: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 15000,
                producer: 'Patrol',
                name: 'Ботинки',
                availableSizes: [
                    '36', '37', '38', '39'
                ],
                picture: popular11,
            },
            item12: {
                isNew: false,
                isPremium: true,
                discount: 0.15,
                price: 480000,
                producer: 'Chiara Ferragni Collection',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44'
                ],
                picture: popular12,
            },
            item13: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 22500,
                producer: 'Patrol',
                name: 'Ботинки',
                availableSizes: [
                    '36', '37', '38', '39', '40'
                ],
                picture: popular13,
            },
            item14: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 20000,
                producer: 'Zolla',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46'
                ],
                picture: popular14,
            },
            item15: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 44500,
                producer: 'Tamaris',
                name: 'Ботинки',
                availableSizes: [
                    '36', '37', '38', '39', '40', '41'
                ],
                picture: popular15,
            },
            item16: {
                isNew: false,
                isPremium: false,
                discount: 0.45,
                price: 71000,
                producer: 'Winzor',
                name: 'Костюм спортивный',
                availableSizes: [
                    '42', '44', '46', '48'
                ],
                picture: popular16,
            },
            item17: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 24990,
                producer: 'Mango',
                name: 'Кардиган',
                availableSizes: [
                    '42/44', '44/46', '46/48'
                ],
                picture: popular17,
            },
            item18: {
                isNew: false,
                isPremium: false,
                discount: 0.55,
                price: 57000,
                producer: 'Marcella',
                name: 'Костюм',
                availableSizes: [
                    '44/46'
                ],
                picture: popular18,
            },
            item19: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 34500,
                producer: 'adidas',
                name: 'Костюм спортивный',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48', '48/50'
                ],
                picture: popular19,
            },
            item20: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 13500,
                producer: 'Befree',
                name: 'Платье',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48'
                ],
                picture: popular20,
            },
            item21: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 59990,
                producer: 'Mango',
                name: 'Куртка кожанная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '48/50'
                ],
                picture: popular21,
            },
            item22: {
                isNew: false,
                isPremium: true,
                discount: null,
                price: 222000,
                producer: 'EA7',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48', '48/50'
                ],
                picture: popular22,
            },
            item23: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 41500,
                producer: 'Covani',
                name: 'Полусапоги',
                availableSizes: [
                    '36', '37', '38', '39', '40', '41'
                ],
                picture: popular23,
            },
            item24: {
                isNew: true,
                isPremium: false,
                discount: 0.35,
                price: 99000,
                producer: 'Roxy',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48', '48/50'
                ],
                picture: popular24,
            },
            item25: {
                isNew: false,
                isPremium: false,
                discount: 0.52,
                price: 103190,
                producer: 'Finn Flare',
                name: 'Куртка утепленная',
                availableSizes: [
                    '52'
                ],
                picture: popular25,
            },
            item26: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 16990,
                producer: 'Mango',
                name: 'Юбка',
                availableSizes: [
                    '42/44', '44/46', '46/48'
                ],
                picture: popular26,
            },
            item27: {
                isNew: false,
                isPremium: false,
                discount: 0.35,
                price: 21500,
                producer: 'Vero Moda',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46'
                ],
                picture: popular27,
            },
            item28: {
                isNew: false,
                isPremium: false,
                discount: null,
                price: 51000,
                producer: 'Only',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46', '46/48', '48/50'
                ],
                picture: popular28,
            },
            item29: {
                isNew: false,
                isPremium: false,
                discount: 0.1,
                price: 13000,
                producer: 'Patrol',
                name: 'Дутики',
                availableSizes: [
                    '36', '37', '38', '39', '40', '41'
                ],
                picture: popular29,
            },
            item30: {
                isNew: false,
                isPremium: false,
                discount: 0.3,
                price: 25500,
                producer: 'Vero Moda',
                name: 'Куртка утепленная',
                availableSizes: [
                    '40/42', '42/44', '44/46'
                ],
                picture: popular30,
            },
        }
    }
}

export let womenTeaserItems = dataBase.women.teaserItems;
export let womenKnowMoreItems = dataBase.women.knowMoreItems;
export let womenWideCarouselItems = dataBase.women.wideCarouselItems;
export let womenClothes = dataBase.women.clothes;
export default dataBase;
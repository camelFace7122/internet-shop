import { ReactNode } from 'react';
import { MenuListType } from '../../../types/types';
import {womenMenuItems as WMI} from '../../database';

let initialState = {
    itemIsHovered: false,
    dropdownTabs: null as null | ReactNode,
    dropdownDelay: 500 as null | number,
    isDropdownOpen: false,
    womenList: [
        ...WMI,
    ] as MenuListType,
    menList: [
        {   
            content: 'Новинки', 
            link: 'https://www.lamoda.kz/c/4152/default-men/?is_new=1&sitelink=topmenuM&l=1',
            tabs: [
                {empty: true}
            ]    
        }, 
        {
            content: 'Одежда', 
            link: 'https://www.lamoda.kz/c/477/clothes-muzhskaya-odezhda/?sitelink=topmenuM&l=2',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Обувь', 
            link: 'https://www.lamoda.kz/c/17/shoes-men/?sitelink=topmenuM&l=3',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Аксессуары', 
            link: 'https://www.lamoda.kz/c/559/accs-muzhskieaksessuary/?sitelink=topmenuM&l=4',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Бренды', 
            link: 'https://www.lamoda.kz/brands/?genders=men&sitelink=topmenuM&l=5',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Premium', 
            link: 'https://www.lamoda.kz/home-premium-men/?sitelink=topmenuM&l=6',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Спорт', 
            link: 'https://www.lamoda.kz/home-sport-men/?sitelink=topmenuM&l=7',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Красота', 
            link: 'https://www.lamoda.kz/c/4288/beauty_accs-menbeauty/?genders=men&sitelink=topmenuM&l=8',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Дом', 
            link: 'https://www.lamoda.kz/c/6647/home_accs-tovarydlyadoma/?sitelink=topmenuM&l=9',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Made in KZ', 
            link: 'https://www.lamoda.kz/c/4152/default-men/?labels=29512&sitelink=topmenuM&l=10',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Sale%', 
            link: 'https://www.lamoda.kz/c/4152/default-men/?is_sale=1&display_locations=outlet&sitelink=topmenuM&l=11', 
            tabs: [
                {empty: true}
            ],  
            isRed: true
        }
    ] as MenuListType,
    kidsList: [
        {
            content: 'Новинки', 
            link: 'https://www.lamoda.kz/c/4154/default-kids/?genders=boys%2Cgirls&is_new=1&sitelink=topmenuK&l=1',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Девочкам', 
            link: 'https://www.lamoda.kz/c/5379/default-devochkam/?genders=girls&sitelink=topmenuK&l=2',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Мальчикам', 
            link: 'https://www.lamoda.kz/c/5378/default-malchikam/?genders=boys&sitelink=topmenuK&l=3',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Новорожденным', 
            link: 'https://www.lamoda.kz/c/5414/default-novorozhdennym/?sitelink=topmenuK&l=4',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Premium', 
            link: 'https://www.lamoda.kz/c/4154/default-kids/?labels=32245&sf=381&sitelink=topmenuK&l=5',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Спорт', 
            link: 'https://www.lamoda.kz/c/4154/default-kids/?labels=5648&sf=221&sitelink=topmenuK&l=6',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Школа', 
            link: 'https://www.lamoda.kz/c/4154/default-kids/?labels=29011&sf=221&sitelink=topmenuK&l=7',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Уход', 
            link: 'https://www.lamoda.kz/c/6815/default-uhod_za_rebenkom/?sitelink=topmenuK&l=8',
            tabs: [
                {empty: true}
            ]  
        }, 
        {
            content: 'Sale%', 
            link: 'https://www.lamoda.kz/c/4154/default-kids/?display_locations=outlet&is_sale=1&sitelink=topmenuK&l=9',
            tabs: [
                {empty: true}
            ],   
            isRed: true
        }
    ] as MenuListType,
}

export type InitialStateType = typeof initialState

export default initialState;
export type TeaserItemsType = Array<TeaserItemType>

export type TeaserItemType = {
    picture: string
    title?: string
    subtitle?: string
}

export type FooterType = {
    socialIcons: Array<string>
    paymentIcons: Array<string>
    appIcons: Array<string>
    countryIcons: Array<string>
    progress: Array<string>
    partners: Array<string>
}

export type GeoDataType = {
    location: string
}

export type KnowMoreItemsType = Array<KnowMoreItemType>

export type KnowMoreItemType = {
    picture: string
    title?: string
    subtitle?: string
}

export type MainBlockBannersType = Array<MainBlockBannerType>

export type MainBlockBannerType = {
    float: 'left' | 'right'
    items: TeaserItemsType
}

export type MainBlockSquareTeasersType = Array<MainBlockSquareTeaserType>

export type MainBlockSquareTeaserType = TeaserItemType & {
    float: 'left' | 'right'
}

export type MenuListType = Array<MenuListItemType>

export type MenuListItemType = {
    content: string
    link: string
    isRed?: boolean
    tabs: MenuListItemTabsType
}

export type MenuListItemTabsType = Array<MenuListItemTabType>

export type MenuListItemTabType = {
    tabLabel?: string
    sections?: MenuListItemTabSectionsType
    banner?: TeaserItemType
    empty?: boolean
}

export type MenuListItemTabSectionsType = Array<MenuListItemTabSectionType>

export type MenuListItemTabSectionType = {
    heading?: string
    links: Array<string>
    config: Array<number> 
}

export type ClothesItemsType = Array<ClothesItemType>

export type ClothesItemType = {
    isNew: boolean,
    isPremium: boolean,
    discount: null | number,
    price: number,
    producer: string,
    name: string,
    availableSizes: Array<string>
    picture: string,
}

export type SeoTabsType = Array<SeoTabType>

export type SeoTabType = {
    tabName: string
    categories?: SeoTabCategoriesType
    content?: SeoTabContentType
}

export type SeoTabCategoriesType = Array<SeoTabCategoryType>

export type SeoTabCategoryType = {
    categoryName: string
    links: SeoTabCategoryLinksType
    config: Array<number>
}

export type SeoTabCategoryLinksType = Array<SeoTabCategoryLinkType>

export type SeoTabCategoryLinkType = {
    linkName: string
    link: string
}

export type SeoTabContentType = {
    links?: SeoTabCategoryLinksType
    config?: Array<number>
    benefits?: SeoTabContentBenefitsType
}

export type SeoTabContentBenefitsType = Array<SeoTabContentBenefitType>

export type SeoTabContentBenefitType = {
    title: string
    rows: Array<string>
}

export type WideCarouselItemsType = Array<WideCarouselItemType>

export type WideCarouselItemType = {
    picture: string,
    title: null | string,
    subtitle: null | string 
}

export type GeoLocationsType = {
    kz: CountryLocationsType 
}

export type CountryLocationsType = Array<GeoLocationType>

export type GeoLocationType = {
    locationName: string
    residentsFrom: number
}

export type InputHelpersType = {
    reset?: boolean
    passwordHider?: boolean
}
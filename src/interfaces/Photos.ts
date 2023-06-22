export interface ISearchPhotoResponse {
  results?: (ResultsEntity)[] | null;
}
export interface ResultsEntity {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string | null;
  alt_description: string;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: (null)[] | null;
  sponsorship?: null;
  topic_submissions: TopicSubmissions;
  user: User;
  tags?: (TagsEntity)[] | null;
}
export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
export interface TopicSubmissions {
  business-work?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature | null;
  current-events?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature1 | null;
  interiors?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature2 | null;
  wallpapers?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature3 | null;
  architecture-interior?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature4 | null;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature1 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature2 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature3 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature4 {
  status: string;
  approved_on: string;
}
export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string | null;
  twitter_username?: string | null;
  portfolio_url?: string | null;
  bio?: string | null;
  location?: string | null;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username?: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}
export interface Links1 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}
export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}
export interface Social {
  instagram_username?: string | null;
  portfolio_url?: string | null;
  twitter_username?: string | null;
  paypal_email?: null;
}
export interface TagsEntity {
  type: string;
  title: string;
  source?: Source | null;
}
export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}
export interface Ancestry {
  type: TypeOrCategoryOrSubcategory;
  category?: TypeOrCategoryOrSubcategory1 | null;
  subcategory?: TypeOrCategoryOrSubcategory2 | null;
}
export interface TypeOrCategoryOrSubcategory {
  slug: string;
  pretty_slug: string;
}
export interface TypeOrCategoryOrSubcategory1 {
  slug: string;
  pretty_slug: string;
}
export interface TypeOrCategoryOrSubcategory2 {
  slug: string;
  pretty_slug: string;
}
export interface CoverPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string | null;
  alt_description: string;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: (null)[] | null;
  sponsorship?: null;
  topic_submissions: TopicSubmissions1;
  premium: boolean;
  plus: boolean;
  user: User1;
}
export interface TopicSubmissions1 {
  current-events?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature5 | null;
  wallpapers?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature6 | null;
  nature?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature7 | null;
  architecture-interior?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature8 | null;
  color-of-water?: Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature9 | null;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature5 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature6 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature7 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature8 {
  status: string;
  approved_on: string;
}
export interface Business-workOrArchitecture-interiorOrWallpapersOrColor-of-waterOrCurrent-eventsOrInteriorsOrNature9 {
  status: string;
  approved_on: string;
}
export interface User1 {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username?: string | null;
  portfolio_url?: string | null;
  bio: string;
  location?: string | null;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social1;
}
export interface Social1 {
  instagram_username: string;
  portfolio_url?: string | null;
  twitter_username?: string | null;
  paypal_email?: null;
}


export interface PhotoState {
  listOfPhotos: ResultsEntity[];
  loading: boolean;
  loadingLoadMore: boolean;
  total: number;
  total_pages: number;
  current_keyword: string;
  current_page: number;
}

export interface IPayloadPhotos {
  query: string;
  page?: number;
  isLoadMore?: boolean;
}



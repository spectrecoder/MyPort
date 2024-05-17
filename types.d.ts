import { IconType } from "react-icons"

interface ProfileData {
  id: string
  cv: string
  name: string
  ownersPhoto: { url: string }
  bgImages: { url: string }[]
}

interface partOfProfile {
  name: string
  ownersPhoto: { url: string }
}

interface ServiceData {
  id: number
  title: string
  Icon: IconType
  description: string
}

interface PriceData {
  id: string
  packageName: string
  packagePrice: number
  priceType: string
  freelanceUrl: string
  packageServices: PackageServiceData[]
}

interface PackageServiceData {
  id: string
  isIncluded: boolean
  packageService: string
}

interface ClientData {
  id: number
  linkLocation: string
  imgLocation: string
}

interface TestimonialData {
  id: string
  userName: string
  userProfession: string
  quote: string
  userImage: { url: string }
}

interface ExperienceData {
  id: string
  badge: string
  desc: string
  experience: boolean
  subTitle: string
  title: string
  logo: { url: string }
}

interface SkillData {
  id: string
  knowledge: string[]
  backEnd: FieldValueData[]
  frontEnd: FieldValueData[]
  languages: FieldValueData[]
}

interface FieldValueData {
  id?: string
  field: string
  value: string
}

interface WorksData {
  id: string
  title: string
  images: { url: string }[]
  workTabs: { tab: String }[]
}

interface PageInfoData {
  hasNextPage: boolean
  endCursor: string
}

interface WorksConnectionData {
  edges: { node: WorksData }[]
  pageInfo: PageInfoData
}

interface SingleWorkData {
  id: string
  description: string
  title: string
  workUrl: string
  githubUrl: string
  clientName: string
  ownerName: string
  techStack: string[]
  userActions: string[]
  images: { url: string }[]
  date: Date
}

interface BlogData {
  id: string
  blogUrl: string
  description: string
  title: string
  thumbnail: { url: string }
  date: Date
}

interface BlogsQuery {
  blogs: BlogData[]
}

interface MenuData {
  id: number
  label: string
  Icon: IconType
  Component: () => JSX.Element
}

interface guestBooksConnection {
  edges: {
    node: {
      id: string
      name: string
      comment: string
      createdAt: Date
    }
  }[]
  pageInfo: PageInfoData
}

interface StatisticsData {
  title: string
  info: string | number
  externalLink?: string
}

interface SocialMedia {
  id: number
  label: string
  mediaUrl: string
  logoColor: string
  info: string
  Icon: IconType
}

export interface blog {
  type_of: string
  id: number
  title: string
  description: string
  readable_publish_date: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  collection_id: number
  published_timestamp: string
  positive_reactions_count: number
  cover_image: string
  social_image: string
  canonical_url: string
  created_at: string
  edited_at: string
  crossposted_at?: null
  published_at: string
  last_comment_at: string
  reading_time_minutes: number
  tag_list?: string[] | null
  tags: string
  user: User
}
export interface User {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: number
  website_url: string
  profile_image: string
  profile_image_90: string
}

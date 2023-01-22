
interface BreadcrumpLink {
    href: string,
    content: string,
    active: string,
}

interface PageProps{
    path: string,
    page: number,
    perPage: number,
    count: number
}

interface UserProp{
    nikname: string,
}

interface ReviewProps{
    title: string,
    comment: string,
    user: UserProp,
    createdAt: string
}

interface RestaurantProp {
    id: number,
    name: string,
    image: string | null,
    reviews: ReviewProp[]
}
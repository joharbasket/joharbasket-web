import UpdateCard from '@/components/Products/UpdateCard';
import Products from '@/components/Products/Products';
import { capitalizeFirstLetter } from "@/lib/utils"
interface Context {
  params: {
    slug: string[]
  }
}
export async function generateMetadata({ params }: Context) {
  const pageTitle = capitalizeFirstLetter(params.slug[0]) ;// + " - " + "Products | Johar Basket"
  return {
    title: `${pageTitle} Items | Johar Basket`
  }

}
type Category = "pooja" | "cosmetics" | "grocery" | "stationary";
export default function ProductsPage({ params }: Context) {
  const { slug } = params;
  if (slug?.length === 2) {
    return (
      <UpdateCard id={slug[1]} collection={slug[0]} />
    )
  }
  if (slug?.length === 1) {
    let category: Category = "grocery";
    switch (slug[0]) {
      case "pooja":
        category = "pooja"
        break;
      case "cosmetics":
        category = "cosmetics"
        break;
      case "grocery":
        category = "grocery"
        break;
      case "stationary":
        category = "stationary"
        break;
      default:
        break;
    }
    return (
      <Products category={category} />
    )
  }
}


/*
 const isAdmin = user && user!.isAdmin;
  if (!isAdmin) {
    setTimeout(() => {
      router.back()
    }, 5000)

    return (
      <div className='flex flex-col justify-center items-center h-80svh'>
        <h1 className='text-3xl text-blue-400 '>Hey your are not an admin! You cannot view this page</h1>
        <p>Redirecting in 5s</p>
      </div>
    )
  }
  */
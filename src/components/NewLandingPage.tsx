import Home from "./Home"
import Header from "./Header"
import Footer from "./Footer"

export default function NewLandingPage() {
  return (
   <>
    <Header/>
      <Home/>
      <div className="col-span-2 w-full">
      <Footer />
      </div>
   </>
  )
}

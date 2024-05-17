import Loader from "./Loader"

export default function LoaderPage({ loaderPage }: { loaderPage: boolean }) {
  return (
    <section
      style={{ zIndex: 1, backgroundColor: `#000000${loaderPage ? '80' : '00'}` }}
      className={` lb fixed top-0 left-0 w-screen h-screen  flex justify-center  items-center transition-all duration-200`}
    >
      {loaderPage && <Loader />}
    </section>
  )
}

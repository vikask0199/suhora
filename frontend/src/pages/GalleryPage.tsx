import Galleries from "../components/gallery/Galleries"
import GalleryHeader from "../components/gallery/GalleryHeader"

type galleryCurrentTheme = {
  currentTheme: string
}

const GalleryPage = ({ currentTheme }: galleryCurrentTheme) => {
  return (
    <>
      <GalleryHeader />
      <Galleries currentTheme = {currentTheme}/>
    </>
  )
}

export default GalleryPage

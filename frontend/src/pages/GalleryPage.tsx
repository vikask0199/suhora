import Galleries from "../components/gallery/Galleries"
import GalleryHeader from "../components/gallery/GalleryHeader"
import SampleFilterGallery from "../components/gallery/SampleFilterGallery"


const GalleryPage = () => {
  return (
    <>
      <GalleryHeader />
      <Galleries />
      <SampleFilterGallery />
    </>
  )
}

export default GalleryPage

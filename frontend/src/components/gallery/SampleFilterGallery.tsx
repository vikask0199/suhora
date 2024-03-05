import { useState } from 'react';
import { Grid, GridItem, Button, Image } from '@chakra-ui/react';
import optical1 from '../../assets/img/gallery/optical-1_Turkey.jpg'
import optical2 from '../../assets/img/gallery/optical-2_Dubai.png'
import sar1 from '../../assets/img/gallery/sar_chennai_floods_iceye_SM_colorized_resized.jpg'
import sar2 from '../../assets/img/gallery/sar_lhonak_new_iceye-nez_colorized2.png'

const SampleFilterGallery = () => {
  // State to track the selected filter
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample image data
  const imageData = [
    { id: 1, src: optical1, category: 'optical' },
    { id: 2, src: optical2, category: 'optical' },
    { id: 3, src: sar1, category: 'SAR' },
    { id: 4, src: sar2, category: 'SAR' },
    // Add more image data as needed
  ];

  // Function to handle filter selection
  const handleFilterSelect = (filter : string) => {
    setSelectedFilter(filter);
  };

  // Filtered images based on the selected filter
  const filteredImages =
    selectedFilter === 'all'
      ? imageData
      : imageData.filter((image) => image.category === selectedFilter);

  return (
    <>
      {/* Filter buttons */}
      <Button onClick={() => handleFilterSelect('all')} variant={selectedFilter === 'all' ? 'solid' : 'outline'}>All</Button>
      <Button onClick={() => handleFilterSelect('optical')} variant={selectedFilter === 'optical' ? 'solid' : 'outline'}>Optical</Button>
      <Button onClick={() => handleFilterSelect('SAR')} variant={selectedFilter === 'SAR' ? 'solid' : 'outline'}>SAR</Button>

      {/* Image gallery */}
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {filteredImages.map((image) => (
          <GridItem key={image.id}>
            <Image src={image.src} alt={`Image ${image.id}`} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default SampleFilterGallery;


//CHAT GPT CODE, not working

// import { useState } from 'react';
// import { Grid, GridItem, Button, Image } from '@chakra-ui/react';
// import { galleryImages } from './galleryutils';

// const SampleFilterGallery = () => {
//   const [selectedFilter, setSelectedFilter] = useState('all');

//   type ImagesType = {
//     [key: string]: any;
//   }
//   const images : ImagesType = galleryImages;

//   const handleFilterSelect = (filter : string) => {
//     setSelectedFilter(filter);
//   };

//   const filteredImages =
//     selectedFilter === 'all'
//       ? Object.values(images).flat()
//       : images[selectedFilter];

//   return (
//     <>
//       {/* Filter buttons */}
//       <Button onClick={() => handleFilterSelect('all')} variant={selectedFilter === 'all' ? 'solid' : 'outline'}>All</Button>
//       <Button onClick={() => handleFilterSelect('optical')} variant={selectedFilter === 'optical' ? 'solid' : 'outline'}>Optical</Button>
//       <Button onClick={() => handleFilterSelect('sar')} variant={selectedFilter === 'sar' ? 'solid' : 'outline'}>SAR</Button>
//       <Button onClick={() => handleFilterSelect('thermal')} variant={selectedFilter === 'thermal' ? 'solid' : 'outline'}>Thermal</Button>

//       {/* Image gallery */}
//       <Grid templateColumns="repeat(3, 1fr)" gap={4}>
//         {filteredImages.map((image : any, index : any) => (
//           <GridItem key={index}>
//             <Image src={image.default} alt={`Image ${index}`} />
//           </GridItem>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default SampleFilterGallery;


//BARD CODE

// import React, { useState, useEffect } from 'react';
// import { Box, Stack, Grid, Tag, TagLabel, Image } from '@chakra-ui/react';
// import glob from 'glob-all'; // Import from glob-all

// interface ImageData {
//   src: string;
//   alt: string;
//   id?: string; // Optional ID (if available)
//   folder?: string; // Optional folder name (if extracted)
// }

// const SampleFilterGallery = () => {
//   const [selectedFilter, setSelectedFilter] = useState('');
//   const [images, setImages] = useState<ImageData[]>([]); // Array to hold images

//   // Fetch images on component mount using glob-all
//   useEffect(() => {
//     const folderPath = '../../assets/img/gallery/**/*.{jpg,jpeg,png,svg}'; // Adjust path and allowed extensions
//     glob(folderPath).then((files : any) => {
//       const imageData = files.map((file : any) => ({
//         src: file, // Adjust path based on your file structure
//         alt: '', // Add alt text for accessibility
//         // Optionally extract folder information from the path
//         id: file, // Or a unique identifier based on file path or other criteria
//         folder: file.split('/')[1], // Assuming subfolder names represent filters
//       }));
//       setImages(imageData);
//     }).catch((err : any) => {
//       console.error('Error fetching images:', err);
//     });
//   }, []);

//   const handleFilterClick = (filter: string) => {
//     setSelectedFilter(filter);
//   };

//   const filteredImages = images.filter((image: ImageData) => {
//     return image.folder === selectedFilter; // Use optional chaining for 'folder'
//   });

//   return (
//     <Box>
//       <Stack direction="row" align="center" spacing={4}>
//         {/* Filter tags */}
//         {images.map((image) => (
//           <Tag key={image.id ?? image.src} // Use ID or src as key
//             variant="outline-gray"
//             _active ={selectedFilter === image.folder ? { bg: 'gray.200' } : {}} // Optional chaining for 'folder'
//             onClick={() => handleFilterClick(image.folder ?? '')} // Use optional chaining
//           >
//             <TagLabel>{image.folder ?? ''}</TagLabel>
//           </Tag>
//         ))}
//       </Stack>

//       <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
//         {/* Filtered images */}
//         {filteredImages.map((image) => (
//           <Image key={image.id ?? image.src} src={image.src} alt={image.alt} />
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default SampleFilterGallery;




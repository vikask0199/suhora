// // galleryUtils.js
// function importAll(r : any) {
//     return r.keys().map(r);
//   }
  
//   function requireAll(requireContext : any) {
//     return requireContext.keys().map(requireContext);
//   }
//   export const galleryImages = {
//     optical: importAll(requireAll(require('../../assets/gallery/optical'))),
//     sar: importAll(requireAll(require('../../assets/gallery/sar'))),
//     thermal: importAll(requireAll(require('../../assets/gallery/thermal'))),
//   };

// galleryUtils.js
// async function importAll(filePaths: Record<string, () => Promise<{ default: string }>>) {
//   const imports = await Promise.all(
//     Object.values(filePaths).map(async (importer) => {
//       const module = await importer();
//       return 'default' in module ? module.default : module;
//     })
//   );
//   return imports;
// }

// import test from '../../assets'
export const galleryImages = {
  landscape: import.meta.glob('../../assets/gallery/optical/*.{jpg,jpeg,png,webp}'),
  portrait: import.meta.glob('../../assets/gallery/sar/*.{jpg,jpeg,png,webp}'),
  other: import.meta.glob('../../assets/gallery/thermal/*.{jpg,jpeg,png,webp}')
};


// galleryUtils.tsx
// // galleryUtils.tsx
// async function importAll(filePaths: Record<string, () => Promise<{ default: string }>>) {
//   const imports = await Promise.all(
//     Object.values(filePaths).map(async (importer) => {
//       const module = await importer();
//       return 'default' in module ? module.default : module;
//     })
//   );
//   return imports;
// }

// export const galleryImages = {
//   landscape: importAll(import.meta.glob('../../assets/gallery/landscape/*.{jpg,jpeg,png,webp}')),
//   portrait: importAll(import.meta.glob('../../assets/gallery/portrait/*.{jpg,jpeg,png,webp}')),
//   other: importAll(import.meta.glob('../../assets/gallery/other/*.{jpg,jpeg,png,webp}'))
// };

export function getImage(image){
  if(image.includes('cloudinary')){
    return image
  }else{
    return '/'+image
  }
}

export default getImage;
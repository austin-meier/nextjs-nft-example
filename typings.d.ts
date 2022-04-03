interface Image {
  asset: {
    url: string
  }
}

export interface Creator {
  _id: string
  name: string
  address: string
  slug: {
    current: string
  }
  image: Image
  bio: string
}

export interface Collection {
  _id: string
  title: string
  nftCollectionName: string
  address: string
  description: string
  mainImage: Image
  previewImage: Image
  slug: {
    current: string
  }
  creator: Creator
}
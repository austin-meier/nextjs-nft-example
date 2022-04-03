export default {
  name: 'creator',
  title: 'Creator',
  type: 'document',
  fields: [
    {
      name: 'name',
      description: 'Your name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'address',
      description: 'Your Etherium wallet address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'bio',
      description: 'A little bit about yourself?',
      title: 'Bio',
      type: 'string',
    },
    {
      name: 'slug',
      description: 'Your URL slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      description: 'Profile Image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

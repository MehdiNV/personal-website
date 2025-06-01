export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Caption / Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image File',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'location',
      title: 'Location (optional)',
      type: 'string'
    }
  ]
}

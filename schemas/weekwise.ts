export default {
  name: 'weekwise',
  type: 'document',
  title: 'Weekwise',
  fields: [
    {
      name: 'questionname',
      type: 'string',
      title: 'Question Name',
    },
    {
      name: 'weeknumber',
      type: 'string',
      title: 'Week Number',
    },
    {
      name: 'questionlink',
      type: 'string',
      title: 'Question Link',
    },
    {
      name: 'isdone',
      type: 'boolean',
      title: 'Is Done',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'questionname',
        maxLength: 200,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
  initialValue: {
    isdone: false,
  },
}

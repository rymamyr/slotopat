import {defineField, defineType} from 'sanity'

export const sponsorType = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bonus',
      title: 'Bonus',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Etiket',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: ['Casino', 'Slot', 'Canlı', 'Bahis', 'Kripto', 'VIP'],
      },
    }),
    defineField({
      name: 'short',
      title: 'Kısa Kod',
      type: 'string',
      description: 'Örn: AB',
    }),
    defineField({
      name: 'rank',
      title: 'Sıralama',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Öne Çıkan',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'active',
      title: 'Aktif',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'accentFrom',
      title: 'Accent From',
      type: 'string',
      initialValue: 'from-cyan-400/20',
    }),
    defineField({
      name: 'accentTo',
      title: 'Accent To',
      type: 'string',
      initialValue: 'to-sky-300/5',
    }),
    defineField({
      name: 'externalUrl',
      title: 'Dış Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bonus',
      media: 'logo',
    },
  },
})
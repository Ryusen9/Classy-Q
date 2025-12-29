import { defineField, defineType } from "sanity";

export const newWatch = defineType({
  name: "newWatch",
  title: "New Watch",
  type: "document",
  icon: () => "⌚",
  fields: [
    defineField({
      name: "name",
      title: "Watch Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "model_name",
      title: "Model Name",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).max(100).warning("Discount should be between 0 and 100"),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) =>
        Rule.min(0).max(5).warning("Rating should be between 0 and 5"),
    }),
    defineField({
      name: "reviews",
      title: "Number of Reviews",
      type: "number",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "In Stock", value: "in_stock" },
          { title: "Out of Stock", value: "out_of_stock" },
          { title: "Pre order", value: "preorder" },
        ],
      },
    }),
    defineField({
      name: "quantity",
      title: "Quantity in Stock",
      type: "number",
      validation: (Rule) => Rule.required().min(0).integer(),
    }),
    defineField({
      name: "lowStock",
      title: "Low Stock Alert",
      type: "boolean",
      description: "Enable when stock is running low",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "trending",
      title: "Trending Product",
      type: "boolean",
      description: "Mark as trending to feature on homepage",
      initialValue: false,
    }),
    defineField({
      name: "colors",
      title: "Available Colors",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Black", value: "Black" },
          { title: "Silver", value: "Silver" },
          { title: "Gold", value: "Gold" },
          { title: "Rose Gold", value: "Rose Gold" },
          { title: "Blue", value: "Blue" },
          { title: "Brown", value: "Brown" },
          { title: "White", value: "White" },
        ],
      },
    }),
    defineField({
      name: "strapMaterial",
      title: "Strap Material",
      type: "string",
      options: {
        list: [
          { title: "Leather", value: "Leather" },
          { title: "Stainless Steel", value: "Stainless Steel" },
          { title: "Rubber", value: "Rubber" },
          { title: "Silicone", value: "Silicone" },
          { title: "Nylon", value: "Nylon" },
          { title: "Canvas", value: "Canvas" },
        ],
      },
    }),
    defineField({
      name: "dialMaterial",
      title: "Dial Material",
      type: "string",
      options: {
        list: [
          { title: "Stainless Steel", value: "Stainless Steel" },
          { title: "Titanium", value: "Titanium" },
          { title: "Ceramic", value: "Ceramic" },
          { title: "Gold", value: "Gold" },
          { title: "Carbon Fiber", value: "Carbon Fiber" },
        ],
      },
    }),
    defineField({
      name: "waterResistance",
      title: "Water Resistance",
      type: "string",
      description: "e.g., 30m, 50m, 100m, 200m",
    }),
    defineField({
      name: "warranty",
      title: "Warranty Information",
      type: "string",
      description: "Warranty coverage details",
    }),
    defineField({
      name: "description",
      title: "Product Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(50).max(500),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "brand",
      media: "images.0",
    },
  },
});

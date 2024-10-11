import { defineConfig } from "tinacms";
import type { Template } from 'tinacms'

const sampleBlock: Template = {
  name: 'sampleBlock',
  label: 'Sample Block',
  ui: {
    defaultItem: {
      title: "Here's some text above the other text",
      text: 'Phasellus scelerisque, libero eu finibus rutrum, risus risus accumsan libero, nec molestie urna dui a leo.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Text',
      name: 'text',
      ui: {
        component: 'textarea',
      },
    },
  ],
}

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  cmsCallback: (cms) => {
    console.log(cms)
    return cms
  },

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: 'object',
            list: true,
            name: 'sampleBlocksSection',
            label: 'Content Sections',
            templates: [sampleBlock],
          },
        ],
        ui: {
          router: ({ collection, document }) => {
            return `${document._sys.breadcrumbs.join('/')}`;
          },
        },
      },
      {
        name: "partials",
        label: "Partials",
        path: "content/partials",
        fields: [
          {
            type: 'object',
            list: true,
            name: 'sampleBlocksSection',
            label: 'Content Sections',
            templates: [sampleBlock],
          },
        ],
        ui: {
          router: ({ collection, document }) => {
            return `${document._sys.breadcrumbs.join('/')}`;
          },
        },
      },
    ],
  },
});

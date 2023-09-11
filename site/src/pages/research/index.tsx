import { REVALIDATE } from 'constants/common'

import Research, { ResearchLayout } from 'pages/Research'
import MetaLayout from 'components/MetaLayout'

import { getCollection, getSiteConfig } from 'src/strapi'
import { seoData } from 'stubs/researchCards'
import { InferGetStaticPropsType } from 'next'
import { Post } from 'entities/Post'
import { Tag } from 'entities/tag'

const ResearchPage = ({ cms, seo }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <MetaLayout seo={seo}>
    <Research data={cms} />
  </MetaLayout>
)

ResearchPage.getLayout = (page: JSX.Element) => {
  const tags = page?.props?.cms?.tags ?? []
  return <ResearchLayout tags={tags}>{page}</ResearchLayout>
}

export async function getStaticProps() {
  const [posts, tags, config] = await Promise.all([
    getCollection<Post>('research', {
      tags: {
        populate: '*',
      },
    }),
    getCollection<Tag>('tags', {
      filters: {
        research: {
          id: {
            $notNull: true,
          },
        },
      },
    }),
    await getSiteConfig(),
  ])

  return {
    revalidate: REVALIDATE,
    props: {
      cms: {
        posts,
        tags,
      },
      config,
      seo: seoData,
    },
  }
}

export default ResearchPage

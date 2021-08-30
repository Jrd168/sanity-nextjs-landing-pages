export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612d25a78b9af11b788a2330',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ey7foko7',
                  apiId: 'acb035e2-71fd-4d7f-bfbf-ac396fb065d8'
                },
                {
                  buildHookId: '612d25a7a2d6282040af44f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fzxf15vp',
                  apiId: '49b88010-59aa-47aa-bd04-fdb3bd1ac6d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jrd168/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fzxf15vp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

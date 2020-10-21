const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/Deuh/deuh.github.io.git',
        user: {
            name: 'deuh',
            email: 'a.gerbore@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
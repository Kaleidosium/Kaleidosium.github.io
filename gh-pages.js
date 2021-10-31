var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/IamRifki/IamRifki.github.io.git', // Update to point to your repository  
        user: {
            name: 'Dania Rifki', // update to use your name
            email: 'iamrifki0@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
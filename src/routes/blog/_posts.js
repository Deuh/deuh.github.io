// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Lets switch to sapper (svelte)',
		slug: 'restart-with-sapper',
		html: `
			<p>
				Wanted to try with sapper to facilitate experiment.
			</p>
		`
	},
	{
		title: 'I lived in Iceland for 5 years',
		slug: 'i-lived-in-iceland-for-5-years',
		html: `
			<p>
				Here my feedback about living in Iceland...
			</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

<template>
  <div>Our home page!</div>
</template>

<script>
export default {
	// we use asyncData to make sure this gets called during build
  async asyncData() {
		// call our api to get the page
		let page = await fetch( process.env.api + '/wp-json/wp/v2/pages?slug=homepage').then((res) => res.json()).then((res) => res[0]),
    return {
			// make our values available for the rest of the script
			page,
			seo: page.yoast_head_json
    }
  },
  head() {
    return {
      title: this.seo.og_title,
      meta: [
        // custom
        {
          // website or article?
          hid: 'og-type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: '',
        },

        // auto
        {
          hid: 'description',
          name: 'description',
          content: this.seo.og_description,
        },
        {
          hid: 'og-description',
          name: 'og:description',
          content: this.seo.og_description,
        },
        {
          hid: 'canonical',
          name: 'canonical',
          content: process.env.canonical + this.$route.path,
        },
        {
          hid: 'og-locale',
          property: 'og:locale',
          content: this.seo.og_locale,
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: process.env.canonical + this.$route.path,
        },
        {
          hid: 'article-modified-time',
          name: 'article:modified_time',
          content: this.seo.article_modified_time,
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: this.seo.twitter_card,
        },
        {
          hid: 'twitter-estimated-label',
          name: 'twitter:label1',
          content: 'Est. reading time',
        },
        {
          hid: 'twitter-estimated-data',
          name: 'twitter:Est. reading time',
          content: this.seo.twitter_misc['Est. reading time'],
        },
      ],
       // schema
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.seo.schema),
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
}
</script>

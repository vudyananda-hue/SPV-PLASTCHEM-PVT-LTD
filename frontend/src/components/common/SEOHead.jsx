import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, path = '' }) {
  const siteName = 'S P V Plastchem (Pvt) Ltd'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Industrial Chemical Solutions`
  const defaultDescription =
    'S P V Plastchem (Pvt) Ltd — Sri Lanka\'s trusted industrial chemical manufacturing company. Specialty chemical formulations, rubber processing, construction chemicals.'
  const siteUrl = 'https://spv-plastchem-eh7g.vercel.app'
  const imageUrl = `${siteUrl}/og-image.png` 

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`${siteUrl}${path}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

import { Helmet } from 'react-helmet-async'

export default function SEOHead({ title, description, path = '' }) {
  const siteName = 'S P V Plastchem (Pvt) Ltd'
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Industrial Chemical Solutions`
  const defaultDescription =
    'S P V Plastchem (Pvt) Ltd — Sri Lanka\'s trusted industrial chemical manufacturing company. Specialty chemical formulations, rubber processing, construction chemicals.'
  const siteUrl = 'https://spvplastchem.com'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
    </Helmet>
  )
}

import Script from 'next/script'

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NEAR Protocol Rewards',
    applicationCategory: 'DevelopmentTool',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'A transparent, on-chain rewards program for NEAR builders. Where activity and impact earn you real incentives.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    },
    author: {
      '@type': 'Organization',
      name: 'NEAR Protocol',
      url: 'https://near.org'
    },
    keywords: 'NEAR Protocol, blockchain rewards, developer incentives, web3 funding, crypto grants',
    url: 'https://rewards.near.org',
    sameAs: [
      'https://github.com/near-horizon/near-protocol-rewards',
      'https://near.org',
      'https://twitter.com/NEARProtocol'
    ]
  }

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      strategy="worker"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 
import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Letter from 'components/Letter';
import Testimonials from 'components/Testimonials';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <HeroBanner />
      <Letter />
      <hr />
    </Layout>
  );
};

export default IndexPage;

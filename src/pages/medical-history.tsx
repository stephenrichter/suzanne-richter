import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import MedicalHistory from 'components/MedicalHistory';

const MedicalHistoryPage: React.FC = () => (
  <Layout>
    <SEO title="Medical History" />
    <MedicalHistory />
  </Layout>
);

export default MedicalHistoryPage;

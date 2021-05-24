import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import MedicalHistory from 'components/MedicalHistory';
import Education from 'components/Education';
import Skills from 'components/Skills';

const MedicalHistoryPage: React.FC = () => (
  <Layout>
    <SEO title="Medical History" />
    <MedicalHistory />
    <hr />
    {/* <Education />
    <hr />
    <Skills /> */}
  </Layout>
);

export default MedicalHistoryPage;

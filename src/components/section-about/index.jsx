import React from 'react';

import Section from '../section';

const SectionAbout = ({ about, extended = false }) => {
  return (
    <Section title={extended ? '' : 'About Me'}>
      <div className="mb-6" style={{ whiteSpace: 'pre-line' }}>
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;

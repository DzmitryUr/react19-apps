'use client';
import { useState } from 'react';

const Tab = ({ content, tabNumber }) => {
  const [hideContent, setHideContent] = useState(false);
  return (
    <>
      <h1>{tabNumber}</h1>
      {!hideContent && <p className="font-semibold text-lg">{content}</p>}
      <button onClick={() => setHideContent((curr) => !curr)}>
        {hideContent ? 'Show Content' : 'Hide Content'}
      </button>
    </>
  );
};

const Page = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <Tab
        tabNumber={tab}
        content={
          tab === 0
            ? 'This is the first tab that we will render'
            : 'This is the second tab that we will render'
        }
        key={tab}
      />
      <button onClick={() => setTab(tab === 0 ? 1 : 0)}>Change Tabs</button>
    </div>
  );
};

export default Page;

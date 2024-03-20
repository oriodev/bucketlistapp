import React from 'react';

import { BucketListItem } from '@/components/BucketListItem';

export const DisplayBucketList = ({ bucketlistitems }) => {
  return (
    <main className="w-full flex flex-col items-center space-y-5">
      {bucketlistitems.map((item) => (
        <BucketListItem key={item.id} item={item} />
      ))}
    </main>
  );
};

import { BucketListItem } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getCompletedBucketListItems = async (): Promise<BucketListItem[]> => {

  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data, error } = await supabase
    .from('bucketlist')
    .select('*')
    .eq('completed', 'true')

  if (error) {
    console.log(error)
  }

  return (data as any) || []

}

export default getCompletedBucketListItems
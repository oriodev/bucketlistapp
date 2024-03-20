import { BucketListItem } from '@/types';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const getBucketListItems = async (): Promise<BucketListItem[]> => {

  const supabase = createServerComponentClient({
    cookies: cookies
  })

  const { data, error } = await supabase
    .from('bucketlist')
    .select('*')
    .eq('completed', 'false')

  if (error) {
    console.log(error)
  }

  return (data as any) || []

}

export default getBucketListItems
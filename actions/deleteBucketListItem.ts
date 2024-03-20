'use server'

import { BucketListItem } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const deleteBucketListItem = async (item: BucketListItem) => {
  const supabase = createServerComponentClient({ cookies: cookies })

  const { data, error } = await supabase
    .from('bucketlist')
    .delete()
    .eq('id', item.id)

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default deleteBucketListItem
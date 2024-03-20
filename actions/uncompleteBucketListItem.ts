'use server'

import { BucketListItem } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const uncompleteBucketListItem = async (item: BucketListItem) => {
  const supabase = createServerComponentClient({ cookies: cookies })

  const { data, error } = await supabase
    .from('bucketlist')
    .update({ completed: false })
    .eq('id', item.id)

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default uncompleteBucketListItem
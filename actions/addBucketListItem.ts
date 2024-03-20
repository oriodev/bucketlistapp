'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

interface Goal {
  goal: string;
  description: string;
  completed: boolean;
}

const addBucketListItem = async (item: Goal) => {
  const supabase = createServerComponentClient({ cookies: cookies })

  const { data, error } = await supabase
    .from('bucketlist')
    .insert(item)

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default addBucketListItem
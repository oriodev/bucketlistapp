'use server'

import { BucketListItem } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const completeBucketListItem = async (item: BucketListItem) => {
  const supabase = createServerComponentClient({ cookies: cookies })

  // export function getCurrentDate(separator=''){

  //   let newDate = new Date()
  //   let date = newDate.getDate();
  //   let year = newDate.getFullYear();

  //   return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  //   }

  const newDate = new Date()
  const month = newDate.getMonth() + 1;
  const date = `${newDate.getDate()}/${month < 10 ? `0${month}` : `${month}`}/${newDate.getFullYear()}`

  const { data, error } = await supabase
    .from('bucketlist')
    .update({ completed: true, completed_at: date })
    .eq('id', item.id)

  if (error) {
    console.log(error)
  }

  return ('success')

}

export default completeBucketListItem
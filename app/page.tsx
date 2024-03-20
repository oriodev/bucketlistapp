import { AddListItemForm } from '@/components/AddListItemForm';
import { DisplayBucketList } from '@/components/DisplayBucketList';
import getBucketListItems from '@/actions/getBucketListItems';
import getCompletedBucketListItems from '@/actions/getCompletedBucketListItems';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ModeToggle } from '@/components/ModeToggle';

export const revalidate = 0;

export default async function Home() {
  const bucketlistitems = await getBucketListItems();
  const completedbucketlistitems = await getCompletedBucketListItems();
  const numOfItems = bucketlistitems.length;
  const numOfCompletedItems = completedbucketlistitems.length;
  const progress =
    (numOfCompletedItems / (numOfItems + numOfCompletedItems)) * 100;

  return (
    <div>
      <div className="text-right mr-5 mt-5">
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center justify-center space-y-5">
        <h1 className="text-xl mt-5">ur bucket list</h1>

        <div className="w-1/4">
          <Progress value={progress} />
          <p className="text-xs text-right">
            {numOfCompletedItems} out of {numOfItems + numOfCompletedItems}{' '}
            completed.
          </p>
        </div>

        <AddListItemForm />

        <div className="w-1/2">
          <Separator />
        </div>

        {numOfItems > 0 && <h1>making it happen</h1>}

        <DisplayBucketList bucketlistitems={bucketlistitems} />

        {numOfCompletedItems > 0 && <h1>completed</h1>}
        <DisplayBucketList bucketlistitems={completedbucketlistitems} />
      </div>
    </div>
  );
}

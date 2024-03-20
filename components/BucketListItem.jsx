'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';

import deleteBucketListItem from '@/actions/deleteBucketListItem';
import { useRouter } from 'next/navigation';
import completeBucketListItem from '@/actions/completeBucketListItem';
import { OptionsMenu } from './OptionsMenu';
import uncompleteBucketListItem from '@/actions/uncompleteBucketListItem';
import { useToast } from './ui/use-toast';

export const BucketListItem = ({ item }) => {
  const router = useRouter();
  const { toast } = useToast();

  const refreshPage = () => {
    window.location.reload();
    router.push('/');
  };

  const deleteItem = async () => {
    const deleted = await deleteBucketListItem(item);

    toast({
      title: 'deleted!',
    });

    refreshPage();
  };

  const completeItem = async () => {
    const complete = await completeBucketListItem(item);

    toast({
      title: 'completed!',
    });

    refreshPage();
  };

  const uncompleteItem = async () => {
    const uncomplete = await uncompleteBucketListItem(item);

    toast({
      title: 'uncompleted!',
    });

    refreshPage();
  };

  return (
    <Card className="w-1/4">
      <CardHeader>
        <CardTitle className="flex">
          {item.goal}
          <div className="ml-auto">
            <OptionsMenu
              item={item}
              deleteItem={deleteItem}
              uncompleteItem={uncompleteItem}
            />
          </div>
        </CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex space-y-5">
        {!item.completed && <Button onClick={completeItem}>complete!</Button>}
        {item.completed_at && item.completed && (
          <p className="text-sm">completed: {item.completed_at}</p>
        )}
      </CardContent>
    </Card>
  );
};

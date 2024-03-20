'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import addBucketListItem from '@/actions/addBucketListItem';
import Router, { usePathname, useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';

export const AddListItemForm = () => {
  const router = useRouter();
  const { toast } = useToast();

  const refreshPage = () => {
    window.location.reload();
    router.push('/');
  };

  const formSchema = z.object({
    goal: z.string().min(2).max(50),
    description: z.string().min(2).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goal: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);

    const goal = {
      goal: values.goal,
      description: values.description,
      completed: false,
    };

    const newGoal = await addBucketListItem(goal);

    toast({
      title: 'added',
    });

    refreshPage();
  }

  return (
    <div className="">
      <Sheet>
        <SheetTrigger className="bg-slate-900 text-white px-12 py-3 rounded-lg">
          add goal
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>add a new goal to complete :D</SheetTitle>
            <SheetDescription>
              dream big! or dream small! i literally do not care!
              <br />
              <br />
              ideas include swimming with sharks, getting a tattoo, or finally
              going to the goddamn gardening club that you have been talking
              about going to for three years now.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>goal name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="take a walk on the moon"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        this is the name/title of ur goal.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>abt ur goal</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="the seventh moon of saturn specifically."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        this is where u add the details abt ur goal, like
                        time/place/specifics.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">make it happen!</Button>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

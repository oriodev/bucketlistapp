import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { BucketListItem } from '@/types';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

interface OptionsMenuProps {
  item: BucketListItem;
  deleteItem: () => Promise<void>;
  uncompleteItem: () => Promise<void>;
}

export const OptionsMenu: React.FC<OptionsMenuProps> = ({
  item,
  deleteItem,
  uncompleteItem,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <DotsVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={deleteItem}>delete</DropdownMenuItem>

          {item.completed && (
            <DropdownMenuItem onClick={uncompleteItem}>
              un-complete
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

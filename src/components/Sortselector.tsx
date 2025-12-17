
import { Button, Menu, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface props {
    onSelectSortOrder:(sortOrder:string)=>void;
    sortOrder:string
}

const Sortselector = ({onSelectSortOrder,sortOrder}:props) => {
  const sortOrders = [
    { value: ``, label: `Relevance` },
    { value: `-added`, label: `Date added` },
    { value: `name`, label: `Name` },
    { value: `-released`, label: `Release date` },
    { value: `-metacritic`, label: `Popularity` },
    { value: `-rating`, label: `Average rating` },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Orderby:{currentSortOrder?.label || `Relevance`}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOrders.map((order) => (
            <MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>
              {order.label}
            </MenuItem>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default Sortselector;

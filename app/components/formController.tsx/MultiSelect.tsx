import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export default function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options",
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);

  const toggleValue = (val: string) => {
    const updated = value.includes(val)
      ? value.filter((v) => v !== val)
      : [...value, val];

    onChange(updated);
  };

  const selectedLabels = options
    .filter((opt) => value.includes(opt.value))
    .map((opt) => opt.label)
    .join(", ");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between line-clamp-1"
        >
          {selectedLabels.length > 0 ? selectedLabels : placeholder}

          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 !w-full">
        <Command className="w-full">
          <CommandList className="w-full">
            <CommandGroup className="w-full">
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  onSelect={() => toggleValue(opt.value)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {/* Checkbox */}
                  <Checkbox
                    checked={value.includes(opt.value)}
                    onCheckedChange={() => toggleValue(opt.value)}
                  />

                  {/* Label */}
                  <span>{opt.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

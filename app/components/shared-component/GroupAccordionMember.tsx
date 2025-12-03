import { useMembers } from "~/hooks/useMembers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import CircularProgress from "./CircularProgress";
import MemberListCard from "./MemberListCard";
import { Download } from "lucide-react";
import { cn } from "~/lib/utils";

function GroupAccordionMember() {
  const { members } = useMembers();
  return (
    <div className="w-full h-full">
      {Array.from({ length: 10 }).map((_, index) => (
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger
              showArrow={false}
              className={cn(
                "w-full flex justify-center items-center py-2 rounded-none px-4 border-b border-borderColor no-underline ring-0",
                index === 0 && "mt-0.5"
              )}
            >
              <div className="w-full flex justify-between items-center no-underline">
                <span className="text-sm text-textColor no-underline">
                  Maheshbhai Bavchandbhai Bhalala
                </span>
                <div className="flex justify-center items-center gap-3">
                  <CircularProgress
                    size={45}
                    strokeWidth={2}
                    value={(index + 1) * 10}
                  />
                  <Download size={20} className="text-blueTextColor" />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {members?.map((member) => (
                <MemberListCard
                  key={member.smk_no}
                  member={member}
                  from={"report"}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default GroupAccordionMember;

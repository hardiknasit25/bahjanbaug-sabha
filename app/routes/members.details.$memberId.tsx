import { ChartColumn } from "lucide-react";
import CircularProgress from "~/components/shared-component/CircularProgress";
import LayoutWrapper from "~/components/shared-component/LayoutWrapper";
import { FALLBACK_AVATAR_PLACEHOLDER } from "~/constant/constant";

function MemberDetails() {
  return (
    <LayoutWrapper
      showTab={false}
      headerConfigs={{
        title: "people",
        iconName: "ArrowLeft",
        href: "/members",
      }}
    >
      <div className="h-full w-full flex flex-col justify-start items-center">
        <div className="w-full bg-primaryColor flex justify-start gap-4 items-start px-4 pb-4">
          <div className="min-w-24 max-w-24 min-h-24 max-h-24 border-2 border-borderColor p-1 rounded-full">
            <img
              src={FALLBACK_AVATAR_PLACEHOLDER}
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-1 pt-4">
            <span className="text-base text-white capitalize">
              Abhishek Hasmukhbhai Radadiya
            </span>

            <div className="flex justify-start items-center gap-4">
              <span className="text-textLightColor text-sm border-r border-borderColor pr-4">
                SMK ID: <span className="text-white">1234</span>
              </span>
              <span className="text-textLightColor text-sm">
                HAJRI NO: <span className="text-white">12</span>
              </span>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-evenly items-start bg-white shadow-md p-2">
          <div className="flex flex-col justify-start items-center">
            <span className="text-green-500 text-xl">4/5</span>
            <p className="flex justify-center items-center text-sm font-medium rounded-full text-textColor">
              Present
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <span className="text-redTextColor text-xl">1/5</span>
            <p className="flex justify-center items-center text-sm font-medium rounded-full text-textColor">
              Absent
            </p>
          </div>
          <div className="flex justify-start items-center gap-2 px-4">
            <CircularProgress size={45} strokeWidth={2} value={33} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default MemberDetails;

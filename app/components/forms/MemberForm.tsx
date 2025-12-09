import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import {
  userCreateSchema,
  type UserCreateFormData,
} from "~/schemas/memberSchema";
import InputController from "../formController.tsx/InputController";
import SelectController from "../formController.tsx/SelectController";
import ChipController from "../formController.tsx/ChipController";
import DatePickerController from "../formController.tsx/DatePickerController";
import TextAreaController from "../formController.tsx/TextAreaController";
import SubmitButton from "../shared-component/SubmitButton";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useMembers } from "~/hooks/useMembers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import MultiSelect from "../formController.tsx/MultiSelect";

interface MemberFormProps {
  mode?: "create" | "update";
  initialData?: Partial<UserCreateFormData>;
  onSubmit?: (data: UserCreateFormData) => void | Promise<void>;
}

const occupationOptions = [
  { value: "job", label: "Job" },
  { value: "study", label: "Study" },
  { value: "business", label: "Business" },
];

const roleOptions = [
  { value: "1", label: "Member" },
  { value: "2", label: "Admin" },
  { value: "3", label: "Coordinator" },
];

const satsangDayOptions = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

function MemberForm({
  mode = "create",
  initialData,
  onSubmit,
}: MemberFormProps) {
  const { groupSelect, fetchGroupSelect } = useMembers();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      first_name: initialData?.first_name || "",
      last_name: initialData?.last_name || "",
      middle_name: initialData?.middle_name || "",
      email: initialData?.email || "",
      mobile: initialData?.mobile || "",
      birth_day: initialData?.birth_day || "",
      satsang_day: initialData?.satsang_day || "",
      mulgam: initialData?.mulgam || "",
      smk_no: initialData?.smk_no || "",
      address: initialData?.address || "",
      is_married: initialData?.is_married ?? false,
      is_family_leader: initialData?.is_family_leader ?? false,
      is_seva: initialData?.is_seva ?? false,
      occupation: initialData?.occupation,
      occupation_field: initialData?.occupation_field || "",
      seva: initialData?.seva || "",
      parichit_bhakt_name: initialData?.parichit_bhakt_name || "",
      group_id: initialData?.group_id || [],
    },
  }) as any;

  const handleFormSubmit: SubmitHandler<any> = useCallback(
    async (data: UserCreateFormData) => {
      try {
        console.log("Form submitted with data:", data);
        if (onSubmit) {
          await onSubmit(data);
        } else {
          console.log("No onSubmit handler provided");
        }
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    fetchGroupSelect();
  }, []);

  return (
    <div className="w-full h-full">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="w-full space-y-4 pb-4"
      >
        {/* Name Section */}
        <InputController
          name="first_name"
          control={control}
          label="First Name"
          placeholder="Enter first name"
          required
        />

        <InputController
          name="middle_name"
          control={control}
          label="Middle Name"
          placeholder="Enter middle name"
          required
        />

        <InputController
          name="last_name"
          control={control}
          label="Last Name"
          placeholder="Enter last name"
          required
        />

        <InputController
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="Enter email address"
        />

        <InputController
          name="mobile"
          control={control}
          label="Mobile Number"
          placeholder="Enter 10 digit mobile number"
          required
        />

        {/* Role & Organization Section */}
        {/* <ChipController
          name="role_id"
          control={control}
          label="Role"
          placeholder="Select a role"
          options={roleOptions}
          multi={false}
          required
        /> */}

        <InputController
          name="smk_no"
          control={control}
          label="SMK Number"
          placeholder="Enter SMK number"
        />

        {/* Personal Information Section */}

        <DatePickerController
          name="birth_day"
          control={control}
          label="Birth Date"
          placeholder="Select birth date"
          required
          disablePastDates={false}
        />

        <DatePickerController
          name="satsang_day"
          control={control}
          label="Satsang Day"
          placeholder="Select satsang day"
          disablePastDates={false}
        />

        <InputController
          name="mulgam"
          control={control}
          label="Mulgam"
          placeholder="Enter mulgam"
        />

        <TextAreaController
          name="address"
          control={control}
          label="Address"
          placeholder="Enter full address"
          rows={3}
        />

        {/* poshak leader */}
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            Select Poshak Group Leader
          </label>

          <Controller
            name="group_id"
            control={control}
            render={({ field }) => (
              <MultiSelect
                options={groupSelect.map((group) => ({
                  value: String(group.id),
                  label: group.leader_name,
                }))}
                value={field.value || []}
                onChange={(val) => field.onChange(val)}
                placeholder="Select group leaders"
              />
            )}
          />
        </div>

        {/* Family Status Section */}

        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            Married ?
          </label>
          <Controller
            name="is_married"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <label htmlFor="r1">Yes</label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <label htmlFor="r2">No</label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            Family Leader ?
          </label>
          <Controller
            name="is_family_leader"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <label htmlFor="r1">Yes</label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <label htmlFor="r2">No</label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        {/* <InputController
          name="family_leader_id"
          control={control}
          label="Family Leader ID"
          type="number"
          placeholder="Enter family leader ID"
        /> */}

        {/* Occupation Section */}

        <ChipController
          name="occupation"
          control={control}
          label="Occupation Type"
          options={occupationOptions}
          multi={false}
          required
        />

        <InputController
          name="occupation_field"
          control={control}
          label="Occupation Field"
          placeholder="Enter occupation field"
        />

        {/* Seva Section */}

        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            Seva ?
          </label>
          <Controller
            name="is_seva"
            control={control}
            render={({ field }) => (
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex gap-4"
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="yes" id="r1" />
                  <label htmlFor="r1">Yes</label>
                </div>

                <div className="flex items-center gap-3">
                  <RadioGroupItem value="no" id="r2" />
                  <label htmlFor="r2">No</label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <TextAreaController
          name="seva"
          control={control}
          label="Seva Details"
          placeholder="Enter seva details"
          rows={2}
        />

        <InputController
          name="parichit_bhakt_name"
          control={control}
          label="Parichit Bhakt Name"
          placeholder="Enter parichit bhakt name"
        />

        {/* Submit Button */}
        <div className="pt-4">
          <SubmitButton
            buttonText={mode === "create" ? "Create Member" : "Update Member"}
            loadingButtonText={
              mode === "create" ? "Creating..." : "Updating..."
            }
            loading={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}

export default MemberForm;

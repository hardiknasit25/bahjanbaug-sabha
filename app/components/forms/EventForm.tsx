import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputController from "../formController.tsx/InputController";
import DatePickerController from "../formController.tsx/DatePickerController";
import TextAreaController from "../formController.tsx/TextAreaController";
import SubmitButton from "../shared-component/SubmitButton";
import { useNavigate } from "react-router";
import { Button } from "../ui/button";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

// Zod schema for form validation
const eventFormSchema = z.object({
  sabhaName: z.string().min(1, "Sabha name is required"),
  date: z
    .string()
    .min(1, "Date is required")
    .refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime()) && parsedDate >= new Date();
    }, "Please select a valid future date"),
  description: z.string().optional(),
});

type EventFormData = z.infer<typeof eventFormSchema>;

function EventForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      sabhaName: "YUVA SABHA",
      date: "",
      description: "",
    },
  });

  const onSubmit = (data: EventFormData) => {
    console.log("Form Data:", data);
    navigate("/events");
  };

  const handleCancel = () => {
    reset();
    navigate("/events");
  };

  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 12));

  return (
    <div className="w-full p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-4 flex flex-col justify-between"
      >
        <InputController
          name="sabhaName"
          control={control}
          label="Sabha Name"
          placeholder="Enter sabha name"
          className="w-full"
          required
        />
        <DatePickerController
          name="date"
          control={control}
          label="Select Date"
          placeholder="Choose a date"
          className="w-full"
          required
        />
        <TextAreaController
          name="description"
          control={control}
          label="Description"
          placeholder="Enter event description"
          rows={4}
          className="w-full"
        />
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200"
          >
            Cancel
          </button>

          <SubmitButton
            buttonText="Create"
            loadingButtonText="Creating..."
            loading={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}

export default EventForm;

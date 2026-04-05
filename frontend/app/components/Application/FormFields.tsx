import { Input } from "@material-tailwind/react";
import SelectField from "./SelectField";
import {
  FormData,
  NIGERIAN_STATES,
  GENDER_OPTIONS,
  CODING_EXPERIENCE,
  CLASS_TYPES,
  ONLINE_COURSES,
  PHYSICAL_COURSES,
} from "./constants";

interface FormFieldsProps {
  formData: FormData;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onTuitionFeeChange: (fee: number) => void;
  tuitionFee: number;
}

const FormFields = ({
  formData,
  onInputChange,
  onTuitionFeeChange,
  tuitionFee,
}: FormFieldsProps) => {
  const courseOptions =
    formData.classType === "Virtual" ? ONLINE_COURSES : PHYSICAL_COURSES;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-14">
      <Input
        size="lg"
        name="firstName"
        variant="static"
        label="First Name"
        className="pl-4 text-[18px]"
        labelProps={{ className: "!text-black" }}
        containerProps={{ className: "h-14" }}
        placeholder="First Name"
        value={formData.firstName}
        onChange={onInputChange}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <Input
        size="lg"
        name="lastName"
        variant="static"
        label="Last Name"
        className="pl-4 text-[18px]"
        labelProps={{ className: "!text-black" }}
        containerProps={{ className: "h-14" }}
        placeholder="Last Name"
        value={formData.lastName}
        onChange={onInputChange}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <SelectField
        label="Gender"
        name="gender"
        className="pl-4 text-[18px]"
        handleChange={onInputChange}
        options={GENDER_OPTIONS}
      />

      <Input
        size="lg"
        name="dob"
        type="date"
        variant="static"
        className="pl-4 text-[18px] text-gray-600"
        labelProps={{ className: "!text-black" }}
        containerProps={{ className: "h-14" }}
        label="Date of Birth"
        value={formData.dob}
        onChange={onInputChange}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <Input
        size="lg"
        name="phoneNo"
        variant="static"
        label="Phone Number"
        className="pl-4 text-[18px]"
        labelProps={{ className: "!text-black" }}
        containerProps={{ className: "h-14" }}
        placeholder="+2347123456789"
        value={formData.phoneNo}
        onChange={onInputChange}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <Input
        size="lg"
        name="emailAddress"
        variant="static"
        label="Email Address"
        className="pl-4 text-[18px]"
        labelProps={{ className: "!text-black" }}
        containerProps={{ className: "h-14" }}
        placeholder="yourmail@gmail.com"
        value={formData.emailAddress}
        onChange={onInputChange}
        crossOrigin={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />

      <SelectField
        label="State Of Origin"
        name="stateOfOrigin"
        className="pl-4 text-[18px]"
        handleChange={onInputChange}
        options={NIGERIAN_STATES}
      />

      <SelectField
        label="Coding Experience"
        className="pl-4 text-[18px]"
        handleChange={onInputChange}
        name="codeExperience"
        options={CODING_EXPERIENCE}
        setTuitionFee={onTuitionFeeChange}
      />

      <SelectField
        className="pl-4 text-[18px]"
        label="Class type"
        name="classType"
        handleChange={onInputChange}
        options={CLASS_TYPES}
        value={formData.classType}
      />

      <div className="flex flex-col">
        <SelectField
          className="pl-4 text-[18px]"
          label="Course Selected"
          handleChange={onInputChange}
          name="courseSelected"
          options={courseOptions}
          setTuitionFee={onTuitionFeeChange}
          classType={formData.classType}
        />
        <span>
          Course Fee:{" "}
          {typeof tuitionFee === "number" && tuitionFee > 0
            ? `₦${tuitionFee.toFixed(2)}`
            : "Select a course"}
        </span>
      </div>

      <SelectField
        className="pl-4 text-[18px]"
        label="State Of Residence"
        name="stateOfResidence"
        handleChange={onInputChange}
        options={NIGERIAN_STATES}
      />
    </div>
  );
};

export default FormFields;

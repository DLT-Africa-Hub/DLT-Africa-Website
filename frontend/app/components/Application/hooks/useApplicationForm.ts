import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";
import { computeTuitionFee } from "../applicationFees";
import { FormData, CheckboxesChecked, APPLICATION_DEADLINE } from "../constants";

export const useApplicationForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        dob: "",
        courseSelected: "",
        classType: "",
        stateOfOrigin: "",
        gender: "",
        phoneNo: "",
        emailAddress: "",
        codeExperience: "",
        stateOfResidence: "",
    });

    const [checkboxesChecked, setCheckboxesChecked] = useState<CheckboxesChecked>({
        newsletter: false,
        privacyPolicy: false,
        payment: false,
    });

    const [formValidMessage, setFormValidMessage] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [tuitionFee, setTuitionFee] = useState<number>(0);
    const [isApplicationClosed, setIsApplicationClosed] = useState<boolean>(false);

    useEffect(() => {
        const checkApplicationDeadline = (): void => {
            const currentDate = new Date();
            const deadlineDate = new Date(APPLICATION_DEADLINE);
            if (currentDate >= deadlineDate) {
                setIsApplicationClosed(true);
            }
        };
        checkApplicationDeadline();
    }, []);

    useEffect(() => {
        setTuitionFee(
            computeTuitionFee(formData.classType, formData.courseSelected)
        );
    }, [formData.classType, formData.courseSelected]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        setFormValidMessage("");
        const { name, value } = e.target;

        if (name === "classType" && value === "Virtual") {
            setFormData({
                ...formData,
                [name]: value,
                courseSelected: "",
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleCheckboxChange = (name: keyof CheckboxesChecked): void => {
        setCheckboxesChecked({
            ...checkboxesChecked,
            [name]: !checkboxesChecked[name],
        });
    };

    const setClassType = (value: "Physical" | "Virtual"): void => {
        setFormValidMessage("");
        setFormData((prev) => ({
            ...prev,
            classType: value,
            courseSelected: "",
        }));
    };

    const validateForm = (): boolean => {
        const requiredFields = [
            "firstName",
            "lastName",
            "dob",
            "courseSelected",
            "classType",
            "stateOfOrigin",
            "gender",
            "phoneNo",
            "emailAddress",
            "codeExperience",
            "stateOfResidence"
        ];

        const isFormValid = requiredFields.every(field => formData[field as keyof FormData]);

        if (!isFormValid) {
            setFormValidMessage(
                "Oops! required field are not filled. Please, go back and fill them"
            );
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        const submitData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            dob: formData.dob,
            courseSelected: formData.courseSelected,
            classType: formData.classType,
            stateOfOrigin: formData.stateOfOrigin,
            gender: formData.gender,
            phoneNo: formData.phoneNo,
            emailAddress: formData.emailAddress,
            codeExperience: formData.codeExperience,
            stateOfResidence: formData.stateOfResidence,
        };

        try {
            await apiClient.post("/cohorts/studentreg", submitData);
            setIsSubmitting(false);
            router.push("/congrats");
        } catch (error: unknown) {
            setIsSubmitting(false);
            setFormValidMessage(getApiErrorMessage(error));
        }
    };

    const allCheckboxesChecked = Object.values(checkboxesChecked).every(value => value);

    return {
        formData,
        checkboxesChecked,
        formValidMessage,
        isSubmitting,
        tuitionFee,
        isApplicationClosed,
        allCheckboxesChecked,
        handleInputChange,
        handleCheckboxChange,
        handleSubmit,
        setTuitionFee,
        setClassType,
    };
};

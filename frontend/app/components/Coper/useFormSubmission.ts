import { useState, useCallback } from 'react';
import { apiClient, getApiErrorMessage } from '@/lib/apiClient';
import { useRouter } from 'next/navigation';

interface FormData {
    fullName: string;
    emailAddress: string;
    phone_number: string;
    gender: string;
    stateOfOrigin: string;
    corp_id: string;
    course_selected: string;
    batchResumption: string;
}

interface SubmissionState {
    isSubmitting: boolean;
    error: string | null;
    success: boolean;
}

export const useFormSubmission = () => {
    const [submissionState, setSubmissionState] = useState<SubmissionState>({
        isSubmitting: false,
        error: null,
        success: false,
    });

    const router = useRouter();

    const submitForm = useCallback(async (formData: FormData): Promise<boolean> => {
        setSubmissionState({
            isSubmitting: true,
            error: null,
            success: false,
        });

        try {
            const response = await apiClient.post(
                '/cohorts/corperreg',
                formData,
                {
                    timeout: 30000, // 30 second timeout
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                setSubmissionState({
                    isSubmitting: false,
                    error: null,
                    success: true,
                });

                // Store success state in localStorage
                localStorage.setItem("isLoggedIn", "true");

                // Navigate to success page
                router.push("/congratsCorp");

                return true;
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error: unknown) {
            setSubmissionState({
                isSubmitting: false,
                error: getApiErrorMessage(error),
                success: false,
            });

            return false;
        }
    }, [router]);

    const clearError = useCallback(() => {
        setSubmissionState(prev => ({
            ...prev,
            error: null,
        }));
    }, []);

    const resetSubmissionState = useCallback(() => {
        setSubmissionState({
            isSubmitting: false,
            error: null,
            success: false,
        });
    }, []);

    return {
        submissionState,
        submitForm,
        clearError,
        resetSubmissionState,
    };
};

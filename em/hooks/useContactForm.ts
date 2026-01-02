// hooks/useContactForm.ts
import { useState } from 'react';

interface ContactFormData {
  [key: string]: string | string[];
}

interface UseContactFormProps {
  formId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export function useContactForm({ formId, onSuccess, onError }: UseContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formId,
          fields: formData,
        }),
      });

      const result = await response.json();

      if (result.ok) {
        setIsSuccess(true);
        onSuccess?.();
      } else {
        throw new Error(result.error || 'Une erreur est survenue');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSuccess(false);
    setError(null);
    setIsSubmitting(false);
  };

  return {
    submitForm,
    isSubmitting,
    isSuccess,
    error,
    reset,
  };
}